import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64">
      <div className="px-3 py-4 overflow-y-auto rounded-lg dark:bg-gray-800 shadow-xl">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard/index"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="toppings"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Toppings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="transactions"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Transactions
              </span>
            </NavLink>
          </li>
        </ul>
        <div
          id="dropdown-cta"
          className="p-4 mt-6 rounded-lg bg-red-50 dark:bg-red-900"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="bg-orange-200 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
              Alpha
            </span>
          </div>
          <p className="mb-3 text-sm text-red-900 dark:text-red-400">
            WaysBucks Dashboard Panel is currently in Alpha, and is not ready
            for use. Please do not use it for production. This panel is for
            testing purposes only. If you have any questions, please contact us
            at 911
          </p>
        </div>
      </div>
    </aside>
  );
}
