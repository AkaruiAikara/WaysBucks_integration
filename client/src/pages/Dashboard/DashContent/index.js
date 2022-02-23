import { useEffect, useState } from "react";
import { API } from "../../../config/api";

export default function DashContent() {
  document.title = "Dashboard | WaysBucks";
  const [total, setTotal] = useState({
    users: 0,
    products: 0,
    toppings: 0,
    transactions: 0,
  });
  // get total data
  const getTotal = async () => {
    const users = await API.get("/users");
    const products = await API.get("/products");
    const toppings = await API.get("/toppings");
    const transactions = await API.get("/transactions");
    setTotal({
      users: users.data.data.users.length,
      products: products.data.data.products.length,
      toppings: toppings.data.data.toppings.length,
      transactions: transactions.data.data.transactions.length,
    });
  };
  useEffect(() => {
    getTotal();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm py-24 text-center">
          <div className="text-xl">
            Total Users: <span className="text-6xl">{total.users}</span>
          </div>
        </div>
        <div className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-xl text-sm py-24 text-center">
          <div className="text-xl">
            Total Products: <span className="text-6xl">{total.products}</span>
          </div>
        </div>
        <div className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm py-24 text-center">
          <div className="text-xl">
            Total Toppings: <span className="text-6xl">{total.toppings}</span>
          </div>
        </div>
        <div className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-xl text-sm py-24 text-center">
          <div className="text-xl">
            Total Transactions:{" "}
            <span className="text-6xl">{total.transactions}</span>
          </div>
        </div>
      </div>
    </>
  );
}
