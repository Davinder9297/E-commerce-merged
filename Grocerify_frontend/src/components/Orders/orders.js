import { BASE_URL } from '../../Api/api'
import { ReactComponent as Down } from '../../assests/down.svg'
import { useQuery, useIsFetching } from '@tanstack/react-query'
import { formatDate } from '../../helpers/helper_function'
import Spinner from '../Spinner'
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import './orders.css'
import { useNavigate } from 'react-router-dom'
import Stepper from '../trackOrder/trackOrder'
import TracKOrder from '../trackOrder/trackOrder'


export default function Orders() {
    const [product, setproduct] = useState('')
    const navigate = useNavigate()
    const isFetching = useIsFetching()
    const [btnLoader, setBtnLoader] = useState(false)
    const [openModal, setopenModal] = useState(false)
    const [openTrackOrderModal, setopenTrackOrderModal] = useState()



    const { data: OrderData, isError, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            fetch(`${BASE_URL}api/getorders`, {
                headers: {
                    'Authorization': ` Bearer ${localStorage.getItem('GROC_USER_TOKEN')}`
                }
            }).then((res) =>
                res.json()
            ),


    })

    if (isFetching) {
        return <div style={{ backgroundColor: "white", opacity: "0.95", position: "fixed", height: "100vh", width: "100%", top: "0px", left: "0px", zIndex: "999" }}> <Spinner /></div>
    }
    if (isError) {
        return <h2>Some Error Occured whle Fetching</h2>
    }

    const CancelOrder = async (id) => {
        setBtnLoader(true);
        try {
            const res = await axios.post(`${BASE_URL}api/cancelorder`,
                { orderID: id }, {
                headers: {
                    'Authorization': ` Bearer ${localStorage.getItem('GROC_USER_TOKEN')}`
                }
            })
            // console.log(res)
            setBtnLoader(false)
            refetch()
            toast.success("Order Cancelled");

        } catch (error) {
            setBtnLoader(false)
            toast.error("Unable to cancel Order");
        }
    }

    // console.log(OrderData)


    function ReviewModal() {
        const [review, setreview] = useState('')
        const [rating, setrating] = useState(0)
        const [spinner, setspinner] = useState(false)
        let navigate = useNavigate()
        async function SubmitReview() {
            try {
                const body = { product, review, rating }
                setspinner(true)
                const data = await fetch(BASE_URL + 'api/addreview', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': ` Bearer ${localStorage.getItem('GROC_USER_TOKEN')}`,
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                const response = await data.json()
                if (!response.error) {
                    toast.success(response.message)
                    setspinner(false)
                    setTimeout(() => {
                        setopenModal(false)
                    }, 1000);
                }
                else {
                    toast.error(response.message)
                    setTimeout(() => {
                        setopenModal(false)
                    }, 1000);

                }
                // console.log(response);

            } catch (error) {

            }
        }
        return (<>
            <div id="rating" className={`h-[100vh] w-[100vw]   justify-center items-center bg-[#00000099] z-10 fixed  top-0 right-0 ${openModal ? 'flex' : 'hidden'}`}>
                <div className="h-[70%] w-[30%] z-50 bg-white rounded-xl ">
                    <div className="w-full flex justify-end p-3">
                        <RxCross1 className="text-2xl cursor-pointer" onClick={() => setopenModal(false)} />
                    </div>

                    <div className="flex w-full justify-center ">
                        <div className=" w-[80%] flex flex-col space-y-2">
                            <div className="">
                                <p className="text-xl font-semibold text-center">Rating</p>
                                <div className="flex justify-center w-full">
                                    <div class="rating">
                                        <input value="5" onClick={() => setrating(5)} name="rating" id="star5" type="radio" />
                                        <label for="star5"></label>
                                        <input value="4" name="rating" onClick={() => setrating(4)} id="star4" type="radio" />
                                        <label for="star4"></label>
                                        <input value="3" name="rating" onClick={() => setrating(3)} id="star3" type="radio" />
                                        <label for="star3"></label>
                                        <input value="2" name="rating" onClick={() => setrating(2)} id="star2" type="radio" />
                                        <label for="star2"></label>
                                        <input value="1" name="rating" onClick={() => setrating(1)} id="star1" type="radio" />
                                        <label for="star1"></label>
                                    </div>

                                </div>
                            </div>

                            <div className="">
                                <p className="text-xl font-semibold text-center">Add a review</p>
                                <textarea value={review} onChange={(e) => setreview(e.target.value)} placeholder="write a review.." className="w-full p-3 focus:outline-none border h-[200px] resize-none overflow-y-auto text-wrap" />
                            </div>

                            <div className="w-full flex justify-center mb-2 items-center gap-2">
                                <button className="bg-[#58B310] text-white py-2 px-4 rounded-xl" onClick={SubmitReview}>Submit</button>
                                {spinner ? <span className='ratingloader'></span> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
    function Openfun(id) {
        setopenModal(true)
        setproduct(id)
    }

    console.log(OrderData)
    return (<>

        <Toaster />
        <div className='my-4 relative '>
            {
                openModal ? <ReviewModal /> : ''
            }
            <div className='flex space-x-4 text-[#848484] text-[16px] mt-4'>

            </div>

            {Array.isArray(OrderData?.orders) && OrderData?.orders?.reverse((value) => { return value }).map((val, ind) => {
                return (
                    <>
                        <div className='border rounded-t-xl my-4'>
                            <div className="flex justify-between fontmons bg-[#D9D9D9] pt-4 rounded-t-xl px-3 text-[#848484]">
                                <div className="flex space-x-40">
                                    <div className="flex flex-col">
                                        <div className="">Order placed</div>
                                        <div className="">{formatDate(val?.ordered_on)}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">Total</div>
                                        <div className="">Rs. {val.order_price}</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="">Shipped To</div>
                                        <div className="">{val?.shipping_address?.full_name}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col ">
                                    <div> #{val.order_id}</div>
                                    <div className="flex space-x-5">

                                    </div>
                                </div>
                            </div>


                            <span className='flex border justify-between items-center px-5'>
                                <div>
                                    {val.products.map((order, inde) => {
                                        return (
                                            <>
                                                <div className='w-full text-[15px] ' key={ind} >

                                                    <div className='flex justify-between items-center px-3 fontmons pt-3 text-[#848484]'>
                                                        <div className='flex items-center gap-4'>
                                                            <div className='flex flex-col '>
                                                                {/* <div className='text-[20px]'>Arriving Today</div> */}

                                                                <div className='h-36 w-36 flex justify-center items-center '>
                                                                    <img className='h-[70px] w-auto' src={order.productid.product_primary_image_url} />
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col justify-start items-start gap-y-2'>
                                                                <span className='flex flex-col'>
                                                                    <div className='fontgob text-[14px] w-[50vw]'>{order.productid.products_title}</div>
                                                                    {(val.status == "delivered" || val.status == "cancelled") ? <button className='w-[10vw] border border-[#58B310] my-4 px-3 py-[2px] text-[#58B310] rounded' onClick={() => { navigate(`/product/${order.productid.slug}`) }} >Buy Again</button> : <></>}
                                                                </span>

                                                                {(val.status == "delivered") ? <button onClick={() => Openfun(val?.product?._id)} className='text-[#58B310]'>Write a review</button> : ''}
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                            </>
                                        )
                                    })
                                    }
                                </div>
                                <span className='flex flex-col justify-between gap-5'>
                                    <div>
                                        {(val.status == "shipped" || val.status == "ordered") || val.status == "pickuped" || val.status == 'processed' ? <button className=' px-3 py-[2px] text-[#58B310] rounded' onClick={() => setopenTrackOrderModal(val)}>Track Order</button> : <></>}
                                    </div>
                                    <div className='flex flex-col space-y-10 items-center '>
                                        {/* <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Track Order</button> */}
                                        {(val.status == "shipped" || val.status == "ordered") || val.status == "pickuped" ? <button className='border border-[#58B310] px-3 py-[2px] text-[#58B310] rounded' onClick={() => CancelOrder(val._id)}>Cancel Order</button> : val.status === "cancelled" ? <button className='border border-red-700 px-3 py-[2px] text-red-700 rounded pointer-events-none cursor-not-allowed'>Cancelled</button> : <button className='border border-[#58B310] px-3 py-[2px] text-[#58B310] rounded' >Delivered</button>}
                                    </div>

                                </span>
                            </span>
                        </div>

                    </>
                )
            })}

        </div>

        {openTrackOrderModal && (
            <div
                style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    height: "100vh",
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "grid",
                    placeItems: "center",
                    zIndex: "9999"
                }}
                onClick={() => setopenTrackOrderModal('')}
            >
                <TracKOrder close={setopenTrackOrderModal} data={openTrackOrderModal} />{" "}
            </div>
        )}


    </>)
}