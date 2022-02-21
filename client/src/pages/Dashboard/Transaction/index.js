import { useEffect, useState } from "react";
import { API } from "../../../config/api";

import success from "../../../assets/img/success.svg";
import cancel from "../../../assets/img/cancel.svg";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  // get all transactions
  useEffect(() => {
    API.get("/transactions").then((res) => {
      setTransactions(res.data.data.transactions);
    });
  }, []);
  // update transaction status to failed or success
  const updateTransaction = (id, status) => {
    API.patch(`/transactions/${id}`, {
      status,
    }).then((res) => {
      setTransactions(
        transactions.map((transaction) => {
          if (transaction.id === id) {
            return {
              ...transaction,
              status,
            };
          }
          return transaction;
        })
      );
    });
  };
  // function that separate every 3 digits with dot
  const dot = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
      <h1 className="text-3xl text-blood font-bold my-12">
        Income Transaction
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Post Code
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Income
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={transaction.id}
                      className="bg-white border dark:bg-gray-800"
                    >
                      <td className="py-4 px-6 border text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {transaction.user.fullName}
                      </td>
                      <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {transaction.user.profile.address}
                      </td>
                      <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {transaction.user.profile.postCode}
                      </td>
                      <td className="py-4 px-6 border text-md text-blue-500 whitespace-nowrap dark:text-gray-400">
                        Rp. {dot(transaction.totalPrice)}
                      </td>
                      <td className="py-4 px-6 border text-md whitespace-nowrap dark:text-gray-400">
                        {transaction.status === "pending" && (
                          <div className="text-yellow-300">Pending</div>
                        )}
                        {transaction.status === "success" && (
                          <div className="text-green-500">Success</div>
                        )}
                        {transaction.status === "failed" && (
                          <div className="text-red-500">Failed</div>
                        )}
                      </td>
                      <td className="w-48 py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                        {transaction.status === "pending" && (
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() =>
                                updateTransaction(transaction.id, "failed")
                              }
                              className="flex-1 px-4 py-1 bg-red-500 text-white hover:bg-red-800 rounded-xl"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() =>
                                updateTransaction(transaction.id, "success")
                              }
                              className="flex-1 px-4 py-1 bg-green-500 text-white hover:bg-green-800 rounded-xl"
                            >
                              Approve
                            </button>
                          </div>
                        )}
                        {transaction.status === "success" && (
                          <img src={success} alt="success" />
                        )}
                        {transaction.status === "failed" && (
                          <img src={cancel} alt="cancel" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
