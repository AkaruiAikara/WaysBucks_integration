import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { API } from "../../config/api";

import Jumbotron from "../../components/Jumbotron";
import ListProducts from "../../components/ListProducts";

export default function Home() {
  document.title = "Landing Page | WaysBucks";
  const [state, dispatch] = useContext(UserContext);
  // get more user data
  useEffect(() => {
    if (state.user.id) {
      API.get(`/users/${state.user.id}`).then((res) => {
        dispatch({
          type: "SET_USER",
          payload: res.data.data.user,
        });
      });
    }
  }, []);
  return (
    <div className="mx-10 lg:mx-0">
      <Jumbotron />
      <ListProducts />
    </div>
  );
}
