import profile from '../../assets/img/profile.png';
import product from '../../assets/img/product-small.png';
import logo from '../../assets/img/logo-small.png';
import qrcode from '../../assets/img/qrcode.png';

export default function Profile() {
    return (
        <div className="mx-10 lg:mx-20">
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
                <h1 className="my-6 text-3xl text-blood font-bold">My Profile</h1>
                <div className="flex">
                    <img src={profile} alt="" />
                    <div className="ml-10 space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-xl text-maroon font-bold">Full Name</h3>
                            <p className="text-lg">Egi Ganteng</p>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl text-maroon font-bold">Email</h3>
                            <p className="text-lg">egigans@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h1 className="my-6 text-3xl text-maroon font-bold">My Transactions</h1>
                <div className="flex flex-col md:flex-row justify-between px-8 py-4 bg-pinky rounded-lg">
                    <div className="flex-grow">
                        <div className="flex flex-col space-y-4">
                            <div className="flex gap-4">
                                <img className="mb-auto" src={product} alt="" />
                                <div>
                                    <h3 className="text-md text-blood font-bold">Ice Coffee Palm Sugar</h3>
                                    <h6 className="text-xs text-blood"><span className="font-black">Saturday: </span>5 March 2020</h6>
                                    <h5 className="text-sm text-blood mt-4"><span className="text-maroon">Topping : </span>Bill Berry Boba, Bubble Tea Gelatin</h5>
                                    <h5 className="text-sm text-maroon font-thin mt-2">Price : Rp. 33.000</h5>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img className="mb-auto" src={product} alt="" />
                                <div>
                                    <h3 className="text-md text-blood font-bold">Ice Coffee Palm Sugar</h3>
                                    <h6 className="text-xs text-blood"><span className="font-black">Saturday: </span>5 March 2020</h6>
                                    <h5 className="text-sm text-blood mt-4"><span className="text-maroon">Topping : </span>Bill Berry Boba, Manggo</h5>
                                    <h5 className="text-sm text-maroon font-thin mt-2">Price : Rp. 36.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img className="mx-auto" src={logo} alt="" />
                        <img className="mx-auto mt-4 w-2/3" src={qrcode} alt="" />
                        <h5 className="bg-blue-200 rounded-lg px-3 py-1 mt-2 text-blue-400">On The Way!</h5>
                        <h6 className="text-maroon text-sm text-center font-bold mt-2">Sub Total : 69.000</h6>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}