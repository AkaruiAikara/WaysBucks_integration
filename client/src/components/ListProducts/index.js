import list1 from '../../assets/img/list-1.png'
import list2 from '../../assets/img/list-2.png'
import list3 from '../../assets/img/list-3.png'
import list4 from '../../assets/img/list-4.png'

import { Link } from 'react-router-dom';

export default function ListProducts(props) {
    return (
        <div className="lg:mx-20">
            <h2 className="text-4xl font-black text-blood mt-16 mb-12">Let's Order</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Link to="/detail" className="bg-pinky rounded-xl">
                    <img className="w-full" src={list1} alt="list1" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Ice Coffee Palm Sugar</h3>
                        <span className="text-lg font-thin">Rp. 27.000</span>
                    </div>
                </Link>
                <div className="bg-pinky rounded-xl">
                    <img className="w-full" src={list2} alt="list2" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Ice Coffee Green Tea</h3>
                        <span className="text-lg font-thin">Rp. 31.000</span>
                    </div>
                </div>
                <div className="bg-pinky rounded-xl">
                    <img className="w-full" src={list3} alt="list3" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Hanami Latte</h3>
                        <span className="text-lg font-thin">Rp. 29.000</span>
                    </div>
                </div>
                <div className="bg-pinky rounded-xl">
                    <img className="w-full" src={list4} alt="list4" />
                    <div className="text-blood p-4">
                        <h3 className="text-2xl font-bold font-noto">Clepon Coffee</h3>
                        <span className="text-lg font-thin">Rp. 28.000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}