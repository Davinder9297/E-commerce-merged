import './addtocart.css'
import { ReactComponent as Arrow } from '../../Assets/Icons/arrow.svg'
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../Api/api'
import { useContext } from 'react';
import { Globalinfo } from '../../App';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Addtocart() {

    const navigate = useNavigate();
    const [Data, setData] = useState([])
    const [items, setitems] = useState([])
    const [quantities, setquantities] = useState([{}])
    const [subtotal, setsubtotal] = useState()
    const [totalitems, settotalitems] = useState()
    const [total, settotal] = useState()
    const [deliverycharges, setdeliverycharges] = useState()
    const [show, setshow] = useState(false)
    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails, checkoutData, setCheckoutData } = useContext(Globalinfo)
    // console.log(Cntxt)



    useEffect(() => {

        setCheckoutData(cartData);
        OrderSummery()
    }, [cartData])

    console.log(cartData);





    async function OrderSummery() {
        try {
            const final = cartData;
            let subttotal_amount = 0
            let total_items = 0


            final?.forEach((item) => {
                if (item?.product) {

                    let price = item.product.stores[0].variants1_mrp_price - (item.product.stores[0].variants1_mrp_price * (item.product.stores[0].variants1_discount_per / 100));

                    subttotal_amount += price * item.quantity;
                    total_items += item.quantity;
                }
            })
            setsubtotal(subttotal_amount)
            settotalitems(total_items)
        } catch (error) {
            console.log(error)


        }
    }




    async function NegativeButtonhandle(id) {
        setshow(true)

        let url2 = BASE_URL + 'api/removefromcart'
        let bodydata2 = { mobile: userDetail?.mobile, productid: id, operation: "removeOne" }

        const data2 = await fetch(url2, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata2)
        });
        const response = await data2.json()

        OrderSummery()
        setData(response.data)
        GetCart()
        setshow(false)

        // console.log(response)
        // setData(response)
    }
    // It is used to apply operation on increasing the quantity of items

    async function PositiveButtonhandle(id) {
        setshow(true)
        let url2 = BASE_URL + 'api/addtocart'
        let bodydata2 = { mobile: userDetail?.mobile, productid: id }

        const data2 = await fetch(url2, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata2)
        });
        const response = await data2.json()
        setData(response.data)
        OrderSummery()
        GetCart()
        setshow(false)

        // console.log(response)

    }
    async function DeleteItem(id) {
        setshow(true)

        let url2 = BASE_URL + 'api/removefromcart'
        let bodydata2 = { mobile: userDetail?.mobile, productid: id, operation: "removeAll" }

        const data2 = await fetch(url2, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata2)
        });
        const response = await data2.json()
        OrderSummery()

        GetCart()
        setshow(false)

    }

    const handleCheckout = () => {
        console.log(cartData);
        let temp = [];
        // cartData.forEach((val) => {
        //     temp.push({ productid: val.product._id, price: val.product.stores[0].variants1_mrp_price, discount: val.product.stores[0].variants1_discount_per, quantity: val.quantity, shopid: val.shopID })
        // })

        localStorage.setItem('CHECKOUT_DATA', JSON.stringify(cartData));
        navigate('/checkout')
    }

    return (<>
        <div className="w-full px-14 text-[#848484] space-y-4 py-5 sm:px-4">
            <div className="text-[24px] fontcart">YOUR CART ({cartData?.length} Items)</div>
            <div className='h-[2px] w-full bg-[#848484] '></div>
            <div className='flex justify-between sm:flex-col'>

                <div className="leftside w-3/5  sm:w-full  space-y-5">

                    {
                        cartData.map((item) => {
                            // console.log(item)
                            // setquantities({...quantities,id:item.product._id})
                            if (item?.product) {

                                var price = item?.product?.stores[0]?.variants1_mrp_price - (item?.product?.stores[0].variants1_mrp_price * (item.product.stores[0].variants1_discount_per / 100))
                            }
                            return (<>
                                <div className='flex rounded-lg w-full border bg-[#FAFAF5] space-x-3 pl-2 items-center sm:flex-col sm:w-full '>
                                    <div className='w-[20vw] h-28  flex justify-center items-center '>
                                        <img className='max-h-full max-w-full mix-blend-multiply' src={item?.product?.product_primary_image_url} />
                                    </div>
                                    <div className='flex flex-col fontorder max-h-auto w-full'>
                                        <div className='flex justify-between pr-5 font-medium text-[16px] gap-[5vw]'>
                                            <div>{item?.product?.products_title} </div>

                                            <div className='text-[#426B1F] fontcart text-[14px] mt-2' >₹{price * item.quantity}</div>
                                        </div>
                                        <h4> SHOP - {item.shopID?.shopName}</h4>
                                        {/* <div className='text-[#426B1F] fontcart text-[14px] mt-2'>₹{price * item.quantity}</div> */}
                                        <div className='flex justify-between pr-5  items-center mt-4'>
                                            <div className='flex  items-center space-x-2  w-fit mb-2'>
                                                <button value="minus" onClick={() => NegativeButtonhandle(item.product._id)} className={`flex items-center ${items[0]?.disable}`}><FaMinus /></button>
                                                <div className='min-w-7 min-h-6 bg-white border border-[rgb(175,175,175)] text-center'>{item.quantity}</div>
                                                <button name="plus" onClick={() => PositiveButtonhandle(item.product._id)}><FaPlus /></button>
                                            </div>
                                            <button onClick={() => DeleteItem(item.product._id)}><Delete /></button>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })
                    }

                </div>
                {cartData?.length > 0 ? <div className='ordersummery w-[30%] bg-[#FAFAF5] rounded-lg border px-4 space-y-3 py-4 h-fit sm:w-full sm:mt-4'>
                    <div className='fontcart font-bold'>Order Summery</div>
                    <div className='flex justify-between fontorder'>
                        <div>Subtotal</div>
                        <div>₹{subtotal}</div>
                    </div>
                    <div className='flex justify-between fontorder'>
                        <div>Total items</div>
                        <div>{totalitems}</div>
                    </div>


                    <div className='flex justify-between fontorder'>
                        <div>Delivery charges</div>
                        <div className='flex space-x-1'>
                            <div className='txt'>₹40</div>
                            <div>Free</div>
                        </div>
                    </div>
                    <div className='flex justify-between fontorder font-bold'>
                        <div>Total</div>
                        <div>₹{subtotal}</div>
                    </div>
                    <button className='flex fontorder bg-[#426B1F] text-white items-center w-full  rounded-lg justify-around h-10 font-semibold' onClick={handleCheckout}>
                        <div >
                            Continue to payments
                        </div>
                        <Arrow />
                    </button>

                </div> : <div style={{ width: "100%" }}> <h2 style={{ fontSize: "1.6rem" }} > No Item in cart </h2> </div>}
            </div>
            {show ? <div className='w-full h-screen fixed -top-4 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
        </div>

    </>)
}