import { Link } from 'react-router-dom';

import cartproduct from '../../assets/img/cart-product.png'
import bin from '../../assets/img/bin.svg'
import invoice from '../../assets/img/invoice.svg'

export default function Cart() {
    return (
        <div className="mx-5 lg:mx-20">
            <div className="flex flex-col lg:flex-row gap-24 justify-center">
                <div className="flex-1">
                    <h2 className="text-3xl text-blood font-bold">My Cart</h2>
                    <h5 className="text-xl text-blood mt-5">Review Your Order</h5>
                    <hr className="w-full my-4 border border-blood"></hr>
                    <div className="flex items-center">
                        <img src={cartproduct} alt="" />
                        <div className="flex flex-col ml-4 w-full space-y-2">
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-xl text-blood font-bold">Ice Coffee Palm Sugar</h5>
                                <span className="text-lg text-blood">Rp. 33.000</span>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-lg text-maroon">Toping : <span className="text-blood">Bill Berry Boba, Bubble Tea Gelatin</span></h5>
                                <a href="#">
                                    <img src={bin} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-5">
                        <img src={cartproduct} alt="" />
                        <div className="flex flex-col ml-4 w-full space-y-2">
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-xl text-blood font-bold">Ice Coffee Palm Sugar</h5>
                                <span className="text-lg text-blood">Rp. 36.000</span>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-lg text-maroon">Toping : <span className="text-blood">Bill Berry Boba, Manggo</span></h5>
                                <a href="#">
                                    <img src={bin} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full my-4 border border-blood"></hr>
                    <div className="flex-grow flex mt-6 gap-2 lg:gap-32">
                        <div className="flex flex-col w-full space-y-2">
                            <hr className="w-full mt-4 border-0.5 border-blood"></hr>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-lg text-blood">Subtotal</h5>
                                <span className="text-lg text-blood">Rp. 69.000</span>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-lg text-blood">Qty</h5>
                                <span className="text-lg text-blood">2</span>
                            </div>
                            <hr className="w-full my-4 border-0.5 border-blood"></hr>
                            <div className="flex flex-row justify-between items-center">
                                <h5 className="text-lg text-blood font-bold">Total</h5>
                                <span className="text-lg text-blood font-bold">Rp. 69.000</span>
                            </div>
                        </div>
                        <Link to="/transaction" className="border-2 border-blood bg-smooth text-center justify-center py-3 px-8 rounded-md whitespace-nowrap">
                            <img className="mx-auto p-2" src={invoice} alt="" />
                            <h5 className="text-md text-blood">Attache of Transaction</h5>
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <div>
                        <input type="text" name="name" id="name" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full lg:w-80 p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full lg:w-80 p-4 mt-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                    </div>
                    <div>
                        <input type="number" name="phone" id="phone" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full lg:w-80 p-4 mt-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone" required />
                    </div>
                    <div>
                        <input type="number" name="poscode" id="poscode" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full lg:w-80 p-4 mt-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Pos Code" required />
                    </div>
                    <div>
                        <textarea name="address" id="address" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full lg:w-80 p-4 mt-6 h-32 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Address" required></textarea>
                    </div>
                    <button className="text-center text-white bg-blood w-full py-2.5 mt-10 rounded-md hover:bg-red-600 focus:bg-red-900 focus:ring-4 focus:ring-red-200">Pay</button>
                </div>
            </div>
        </div>
    )
}