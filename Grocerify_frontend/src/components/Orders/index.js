import { Link } from 'react-router-dom'
import { ReactComponent as Search } from '../../assests/search.svg'
import './orders.css'
import Orders from './orders'
import Slider from './slider'
import BuyAgain from './buyagain'
import NotYetShipped from './notyetshipped'
import Cancelled from './cancelled'
import { useState } from 'react'
export default function MyOrders() {

    const [ShowComponent, setShowComponent] = useState('orders')
    return (<>
        <div className="px-20 w-full pt-3">
            <div className="flex fontmons">
                <Link to={'/account'} className='text-[#848484] fontmons font-semibold'>Your Account &gt;</Link>
                <div className='text-[#58B310] fontmons'>Your Orders</div>
            </div>

            <div className='flex justify-between items-center fontmons text-[#848484]'>
                <div className='text-[32px]'>Your Orders</div>
                {/* <div className="flex  items-center space-x-5">
                    <Search className='relative left-11 ' />
                    <input placeholder='Search all orders' className='py-[2px] w-[300px] rounded-lg outline-none pl-7 border focus-within:border-gray-50' />
                   
                </div> */}
            </div>

            <div className='fontmons flex space-x-10 text-[#848484] pl-1 font-[500px]'>
                {/* <button onClick={() => setShowComponent('orders')} style={{ color: ShowComponent == 'orders' ? "#58B310" : "#848484" }}>Orders</button> */}
                {/* <button onClick={() => setShowComponent('buyagain')} style={{ color: ShowComponent == 'buyagain' ? "#58B310" : "#848484" }}>Buy Again</button> */}
                {/* <button onClick={() => setShowComponent('notyetshipped')} style={{ color: ShowComponent == 'notyetshipped' ? "#58B310" : "#848484" }}>Not Yet Shipped</button> */}
                {/* <button onClick={() => setShowComponent('cancelled')} style={{ color: ShowComponent == 'cancelled' ? "#58B310" : "#848484" }}>Cancelled Orders</button> */}
            </div>
            <div className='h-[2px] w-full bg-[#848484] mt-1'></div>
            {
                ShowComponent == 'orders' ? <Orders /> : ShowComponent == 'buyagain' ? <BuyAgain /> : ShowComponent == 'notyetshipped' ? <NotYetShipped /> : <Cancelled />
            }
            {/* <Slider /> */}
        </div>
    </>)
}