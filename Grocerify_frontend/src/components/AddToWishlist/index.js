import './addtowishlist.css'
import { ReactComponent as Share } from '../../Assets/Icons/share.svg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg'
import { ReactComponent as Empty } from '../../Assets/Icons/emptystar.svg'
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import Spinner from '../Spinner';
import { RWebShare } from 'react-web-share';
import { Link, useNavigate } from 'react-router-dom';

export default function AddToWishlist() {
    const [Data, setData] = useState([])
    const navigate = useNavigate()
    const [Subtotal, setSubtotal] = useState(0)
    const [show, setshow] = useState(false)
    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)

    // console.log(wishListData)
    // It is used to apply operation on decreasing the quantity of items

    function StarPrint(count) {
        let con = []
        for (let index = 0; index < count; index++) {
            con.push(<span><Star /></span>)
        }
        for (let index = 0; index < 5 - count; index++) {
            con.push(<span className=''><Empty className='h-[20px] w-[20px]' /></span>)
        }
        return con;
    }

    async function Addtocart(id) {
        setshow(true)
        let url = BASE_URL + 'api/addtocart'
        let bodydata = { mobile: userDetail?.mobile, productid: id }
        const data = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata)
        });

        RemoveFromWishlist(id)

        setshow(false)
    }

    async function RemoveFromWishlist(id) {
        setshow(true)
        let url2 = BASE_URL + 'api/removefromwishlist'
        let bodydata2 = { mobile: userDetail?.mobile, productid: id }

        const data2 = await fetch(url2, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata2)
        });
        const response = await data2.json()
        setData(response.data)
        GetCart()
        GetWishList()
        setshow(false)
    }
    return (<>
        <div className="w-full px-20 text-[#848484] space-y-4 py-5">
            <div className="text-[24px] fontcart">My Wishlist ({wishListData.length} Items)</div>
            <div className='h-[2px] w-full bg-[#848484] '></div>
            <div className='flex justify-start '>
                <div className="w-[70%] space-y-5 ">
                    {
                        wishListData.map((item, index) => {
                            let price = item.product.stores[0].variants1_mrp_price - (item.product.stores[0].variants1_mrp_price * (item.product.stores[0].variants1_discount_per / 100))
                            let starcount = item.product.rating;

                            return (<div>
                                <div onClick={() => navigate(`/product/${item.product.slug}`)} className='flex rounded-lg w-full border bg-[#FAFAF5] space-x-3 pl-2 items-center cursor-pointer ' key={index}>
                                    <div className='w-28 h-28  flex justify-center items-center '>
                                        <img className='max-h-full max-w-full mix-blend-multiply' src={item.product.product_primary_image_url} />
                                    </div>
                                    <div className='flex flex-col w-full space-y-2 py-3'>
                                        <div className='flex justify-between pr-5 font-semibold font2 text-[16px] gap-[8vw]'>
                                            <div>{item.product.products_title}</div>
                                            <div className='flex space-x-5 items-start' >
                                                <RWebShare
                                                    data={{
                                                        text: "Web Share - Grocerify",
                                                        url: `https://hopingminds.co.in/product/${item.product.slug}`,
                                                        title: "Grocerify",
                                                    }}

                                                >
                                                    <button className='' onClick={(e) => e.stopPropagation()
                                                    }><Share onClick={(e) => e.stopPropagation()} /> </button>

                                                </RWebShare>
                                                <button className='' onClick={(e) => { e.stopPropagation(); RemoveFromWishlist(item.product._id) }}><Delete /></button>
                                            </div>

                                        </div>
                                        <div className='flex items-center   w-fit'>
                                            {
                                                StarPrint(starcount)
                                            }

                                        </div>
                                        <div className='text-[#426B1F] fontcart text-[14px] mt-3 flex justify-between pr-2 items-center'>
                                            <div>₹{price}</div>
                                            <div className='flex space-x-3 font2'>
                                                {item.product.stores[0].stock && <button className='bg-grey px-3 py-1 text-[16px] '>In Stock</button>}
                                                {/* <button className='bg-white px-3 py-1 text-[16px] shadow-lg' onClick={() => Addtocart(item.product._id, item.product.stores[0].store)}>Add To Cart</button> */}
                                            </div>
                                        </div>

                                    </div>
                                </div >
                            </div >)
                        })
                    }






                </div >

            </div >
            {show ? <div className='w-full h-screen fixed -top-4 left-0 bg-[#b4cca1] opacity-80'>
                < Spinner className='' />

            </div > : ''}
        </div >

    </>)
}