import success from '../../assets/img/success.svg'
import cancel from '../../assets/img/cancel.svg'

export default function Transaction() {
    return (
        <div className="mx-10 lg:mx-20">
            <h1 className="text-3xl text-blood font-bold my-12">Income Transaction</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        No
                                        </th>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Name
                                        </th>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Address
                                        </th>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Post Code
                                        </th>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Income
                                        </th>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Status
                                        </th>
                                        <th scope="col" className="py-4 px-6 border text-xs font-bold tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border dark:bg-gray-800">
                                        <td className="py-4 px-6 border text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Sugeng No Pants
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Cileungsi
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        16820
                                        </td>
                                        <td className="py-4 px-6 border text-md text-blue-500 whitespace-nowrap dark:text-gray-400">
                                        69.000
                                        </td>
                                        <td className="py-4 px-6 border text-md text-yellow-300 whitespace-nowrap dark:text-gray-400">
                                        Waiting Approve
                                        </td>
                                        <td className="w-48 py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <div className="flex gap-2 justify-center">
                                                <button className="flex-1 px-4 py-1 bg-red-500 text-white hover:bg-red-800 rounded-xl">Cancel</button>
                                                <button className="flex-1 px-4 py-1 bg-green-500 text-white hover:bg-green-800 rounded-xl">Approve</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border dark:bg-gray-800">
                                        <td className="py-4 px-6 border text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        2
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Haris Gams
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Serang
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        42111
                                        </td>
                                        <td className="py-4 px-6 border text-md text-blue-500 whitespace-nowrap dark:text-gray-400">
                                        30.000
                                        </td>
                                        <td className="py-4 px-6 border text-md text-green-400 whitespace-nowrap dark:text-gray-400">
                                        Success
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <img className="mx-auto" src={success} alt="" />
                                        </td>
                                    </tr>
                                    <tr className="bg-white border dark:bg-gray-800">
                                        <td className="py-4 px-6 border text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        3
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Aziz Union
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Bekasi
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        13450
                                        </td>
                                        <td className="py-4 px-6 border text-md text-blue-500 whitespace-nowrap dark:text-gray-400">
                                        28.000
                                        </td>
                                        <td className="py-4 px-6 border text-md text-red-500 whitespace-nowrap dark:text-gray-400">
                                        Cancel
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <img className="mx-auto" src={cancel} alt="" />
                                        </td>
                                    </tr>
                                    <tr className="bg-white border dark:bg-gray-800">
                                        <td className="py-4 px-6 border text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        4
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Lae Tanjung Balai
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        Tanjung Balai
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        21331
                                        </td>
                                        <td className="py-4 px-6 border text-md text-blue-500 whitespace-nowrap dark:text-gray-400">
                                        30.000
                                        </td>
                                        <td className="py-4 px-6 border text-md text-blue-300 whitespace-nowrap dark:text-gray-400">
                                        On The Way
                                        </td>
                                        <td className="py-4 px-6 border text-md text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            <img className="mx-auto" src={success} alt="" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}