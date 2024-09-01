import { BASE_URL } from '../../Api/api'
import { useQuery, useIsFetching } from '@tanstack/react-query'
import { ReactComponent as Down } from '../../assests/down.svg'
import Spinner from '../Spinner'
import { formatDate } from '../../helpers/helper_function'

export default function Cancelled() {

    const isFetching = useIsFetching()

    const { data: OrderData, isError } = useQuery({
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

    console.log(OrderData)



    return (<>
        <div className='flex space-x-4 text-[#848484] text-[16px] mt-4'>
            {/* <div>1 order placed in</div>
            <select className='bg-[#F3F3F3] outline-none px-2'>
                <option>Past 1 months</option>
                <option>Past 3 months</option>
                <option>Past 6 months</option>
            </select> */}
        </div>

        {OrderData?.orders.filter((val) => val.status === 'cancelled').map((val, ind) => {
            return (
                <>
                    <div className='w-full text-[15px] border rounded-t-xl mt-3' key={ind} >
                        <div className="flex justify-between fontmons bg-[#D9D9D9] pt-4 rounded-t-xl px-3 text-[#848484]">
                            <div className="flex space-x-40">
                                <div className="flex flex-col">
                                    <div className="">Order placed</div>
                                    <div className="">{formatDate(val.ordered_on)}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="">Total</div>
                                    <div className="">Rs. {val.order_price}</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="">Shipped To</div>
                                    <div className="">{val.shipping_address.full_name}</div>
                                </div>
                            </div>

                            <div className="flex flex-col ">
                                <div> #{val.order_id}</div>
                                <div className="flex space-x-5">
                                    {/* <div>View Order Details</div> */}
                                    {/* <div className='flex items-center'>Inovoice <Down className='ml-1' /></div> */}
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center px-3 fontmons pt-3 text-[#848484]'>
                            <div className='flex items-center'>
                                <div className='flex flex-col'>
                                    {/* <div className='text-[20px]'>Arriving Today</div>
                                    <div className='text-[14px]'>Not Yet Dispatched</div> */}
                                    <div className='h-36 w-36 flex justify-center items-center '>
                                        <img className='h-[70px] w-auto' src={val.products[0].productid.product_primary_image_url} />
                                    </div>
                                </div>
                                <div className='fontgob text-[14px] w-[50vw]'>{val.product.products_title}</div>
                            </div>

                            <div className='flex flex-col space-y-10'>
                                {/* <button className='bg-[#58B310] px-3 py-[2px] text-white rounded'>Track Order</button> */}
                                <button className='border border-red-500 px-3 py-[2px] text-red-500 rounded'>Cancelled</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-full fontmons bg-[#D9D9D9] py-3 pl-3 rounded-b-xl'>
                            <button className='text-[#58B310]'>Archieve Order</button>
                        </div> */}
                </>
            )
        })}



    </>)
}