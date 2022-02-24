import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import Alert from "../../components/Alert";
import Preloader from "../../components/Preloader";

import product from "../../assets/img/product-big.png";
import attachment from "../../assets/img/attachment.svg";

export default function AddProduct() {
  const params = useParams();
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(true);
  // store data with useState as form
  const [form, setForm] = useState({
    title: null,
    price: null,
    image: null,
  });
  // get product data if on update page
  useEffect(() => {
    if (params.id) {
      API.get(`/products/${params.id}`).then((res) => {
        setForm({ ...res.data.data, image: null });
        setPreview(res.data.data.image);
      });
    }
    setLoading(false);
  }, []);
  const { title, price, image } = form;
  const [preview, setPreview] = useState(image);
  // handle input change
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set Content-Type to multipart/form-data into headers as config
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    // store data with FormData
    const data = new FormData();
    data.set("title", title);
    data.set("price", price);
    if (image && !(image === preview)) {
      data.set(
        "image",
        document.getElementById("image").files[0],
        document.getElementById("image").files[0].name
      );
    }
    // update or insert product data to API
    if (params.id) {
      API.patch(`/products/${params.id}`, data, config)
        .then((res) => {
          setAlert({
            status: "success",
            message: "Product has been updated",
          });
        })
        .catch((err) => {
          if (err.response) {
            setAlert(err.response.data);
          }
        });
    } else {
      API.post("/products", data, config)
        .then((res) => {
          setAlert({
            status: "success",
            message: "Product has been added",
          });
          setForm({
            title: null,
            price: null,
            image: null,
          });
        })
        .catch((err) => {
          if (err.response) {
            setAlert(err.response.data);
          }
        });
    }
  };

  return loading ? (
    <Preloader />
  ) : (
    <>
      <div className="flex flex-col lg:flex-row gap-36">
        <div className="flex-grow">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-blood font-bold">
              {params.id ? "Update" : "Add"} Product
            </h2>
            <Alert alert={alert} setAlert={setAlert} />
            <div className="space-y-8 mt-12">
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={handleChange}
                className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Title Product"
                required
              />
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={handleChange}
                className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Price"
                required
              />
              <div className="relative">
                <div className="flex absolute inset-y-0 right-0 items-center pr-6 pointer-events-none">
                  <img src={attachment} alt="" />
                </div>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleChange}
                  className="cursor-pointer bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white file:hidden"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-center text-white bg-blood w-[90%] py-2.5 mt-20 rounded-md hover:bg-red-600 focus:bg-red-900 focus:ring-4 focus:ring-red-200">
                {params.id ? "Update" : "Add"} Product
              </button>
            </div>
          </form>
        </div>
        <img
          className="w-[436px] h-[555px] object-cover rounded-lg"
          src={preview ?? product}
          alt=""
        />
      </div>
    </>
  );
}
