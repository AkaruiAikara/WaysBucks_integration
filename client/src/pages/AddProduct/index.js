import product from '../../assets/img/product-big.png'
import attachment from '../../assets/img/attachment.svg'

export default function AddProduct() {
    return (
        <div className="mx-10 lg:mx-20">
            <div className="flex flex-col lg:flex-row gap-36 mt-20">
                <div className="flex-grow">
                    <h2 className="text-3xl text-blood font-bold">Product</h2>
                    <div className="space-y-8 mt-12">
                        <input type="text" name="name" id="name" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name Product" required />
                        <input type="number" name="price" id="price" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Price" required />
                        <div className="relative">
                            <div className="flex absolute inset-y-0 right-0 items-center pr-6 pointer-events-none">
                                <img src={attachment} alt="" />
                            </div>
                            <input type="file" name="name" id="name" className="bg-smooth border-2 border-blood text-gray-900 text-sm rounded-md focus:ring-red-800 focus:border-red-800 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white file:hidden" placeholder="Name Product" required />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center text-white bg-blood w-[90%] py-2.5 mt-20 rounded-md hover:bg-red-600 focus:bg-red-900 focus:ring-4 focus:ring-red-200">Add Product</button>
                    </div>
                </div>
                <img src={product} alt="" />
            </div>
        </div>
    )
}