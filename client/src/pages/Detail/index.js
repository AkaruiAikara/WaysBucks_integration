import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import product from '../../assets/img/product-big.png'
import toping1 from '../../assets/img/toping-1.png'
import toping2 from '../../assets/img/toping-2.png'
import toping3 from '../../assets/img/toping-3.png'
import toping4 from '../../assets/img/toping-4.png'
import toping5 from '../../assets/img/toping-5.png'
import toping6 from '../../assets/img/toping-6.png'
import toping7 from '../../assets/img/toping-7.png'
import toping8 from '../../assets/img/toping-8.png'

export default function Detail(props) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.isLogin) {
            navigate('/?a=login')
        }
    })
    return (
        <div className="lg:mx-20">
            <div className="flex flex-col md:flex-row gap-24">
                <img className="mb-auto" src={product} alt="" />
                <div className="flex flex-col">
                    <h1 className="text-6xl font-black text-blood font-">Ice Coffee Palm Sugar</h1>
                    <span className="text-xl text-maroon mt-4">Rp. 27.000</span>
                    <div className="mt-8">
                        <h3 className="text-3xl text-maroon font-black">Toping</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-x-10 gap-y-10 mt-5">
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping1" id="toping1" />
                                <img className="mx-auto" src={toping1} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Bubble Tea Gelatin</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping2" id="toping2" />
                                <img className="mx-auto" src={toping2} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Mango</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping3" id="toping3" />
                                <img className="mx-auto" src={toping3} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Green Coconut</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping4" id="toping4" />
                                <img className="mx-auto" src={toping4} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Boba Mango</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping5" id="toping5" />
                                <img className="mx-auto" src={toping5} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Berry Boba</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping6" id="toping6" />
                                <img className="mx-auto" src={toping6} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Kiwi Poping Perl</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping7" id="toping7" />
                                <img className="mx-auto" src={toping7} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Matcha Cantaloupe</h5>
                            </label>
                            <label className="relative">
                                <input className="absolute hidden checked:flex bottom-10 right-10 rounded-full text-blood w-6 h-6 transition-all focus:ring-blood" type="checkbox" name="toping8" id="toping8" />
                                <img className="mx-auto" src={toping8} alt="toping" />
                                <h5 className="text-lg text-blood text-center">Strawberry Popping</h5>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h3 className="text-3xl text-maroon font-bold">Total</h3>
                        <h3 className="text-3xl text-maroon font-bold">Rp. 27.000</h3>
                    </div>
                    <button className="text-center text-white bg-blood px-auto py-2.5 rounded-md hover:bg-red-600 focus:bg-red-900 focus:ring-4 focus:ring-red-200 mt-6">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}