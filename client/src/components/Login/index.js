import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { API } from "../../config/api";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Alert from "../Alert";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [state, dispatch] = useContext(UserContext);
  useEffect(() => {
    if (state.isLogin) {
      navigate("/");
    }
  }, [state]);
  // store data with useState as form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set Content-Type to application/json into headers as config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // convert data to json
    const body = JSON.stringify({ email, password });
    // insert data to API
    API.post("/login", body, config)
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data.data,
        });
        // Redirect to home page or admin page
        if (res.data.data.isAdmin) {
          navigate("/dashboard/index");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response) {
          setAlert(err.response.data);
        }
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none">
        <div className="relative px-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <Link to={location.pathname}>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
            <form
              onSubmit={handleSubmit}
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
            >
              <h3 className="text-4xl font-black text-blood dark:text-white">
                Login
              </h3>
              <Alert alert={alert} setAlert={setAlert} />
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  className="bg-smooth border border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  className="bg-smooth border border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blood hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blood dark:focus:ring-red-600"
              >
                Login
              </button>
              <div className="text-center text-md font-medium text-gray-500 dark:text-gray-300">
                Dont have an account? Click{" "}
                <Link to={location.pathname + "?a=register"}>
                  <button
                    type="button"
                    className="text-blood hover:underline dark:text-red-800"
                  >
                    Here
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
