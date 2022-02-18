import { Link, useNavigate } from 'react-router-dom'
import profileicon from '../../assets/img/profileicon.svg';
import logouticon from '../../assets/img/logouticon.svg';

export default function Dropdown(props) {
    const navigate = useNavigate()
    const Logout = () => {
        props.setIsLogin(() => {
            localStorage.removeItem('token')
        })
        navigate('/')
    }
    return (
        <div className="absolute right-0 z-30 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-3">
                <li>
                    <Link to="/add-product">
                        <div href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex items-center gap-4">
                                <i className="bi bi-plus-square"></i>
                                <span>Add Product</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/add-topping">
                        <div href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex items-center gap-4">
                                <i className="bi bi-plus-circle"></i>
                                <span>Add Topping</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/transaction">
                        <div href="#" className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex items-center gap-4">
                                <i className="bi bi-cash-coin"></i>
                                <span>Transaction</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <hr />
                </li>
                <li>
                    <Link to="/profile">
                        <div className="block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            <button href="/profile" className="flex items-center gap-4">
                                <i className="bi bi-person"></i>
                                <span>Profile</span>
                            </button>
                        </div>
                    </Link>
                </li>
                <li>
                    <a onClick={() => Logout()} className="cursor-pointer block py-4 px-4 text-md text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        <div className="flex items-center gap-4">
                            <i className="bi bi-box-arrow-right"></i>
                            <span>Logout</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}