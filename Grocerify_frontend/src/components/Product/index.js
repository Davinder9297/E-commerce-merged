import { ReactComponent as Star } from '../../Assets/Icons/star.svg'
import { ReactComponent as Down } from '../../Assets/Icons/down.svg'
import { ReactComponent as Box } from '../../Assets/Icons/chatbox.svg'
import { ReactComponent as Emptystar } from '../../Assets/Icons/emptystar.svg'
import { FaAngleDown, FaAngleUp, FaPlus, FaUpDown } from "react-icons/fa6";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './product.css'
import { useEffect, useRef, useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { BASE_URL } from '../../Api/api';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Globalinfo } from '../../App';
import ProductImages from '../ProductImages/productCarousel';
import axios from 'axios';
import { ReactComponent as Starfilled } from '../../Assets/Icons/star.svg'
import { ReactComponent as Delete } from '../../Assets/Icons/delete.svg'
import { ReactComponent as Empty } from '../../Assets/Icons/emptystar.svg'
import { getDateAfterFiveDays, isShopOpen } from '../../helpers/helper_function';
import { useCheckCart } from '../../hooks/useCheckCart';
import ConfirmCart from '../popUps/confirmCart';


export default function Product() {
    const navigate = useNavigate();

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails, checkoutData, setCheckoutData } = useContext(Globalinfo)
    const params = useParams();
    const { checkIfSameStore, emptyCart } = useCheckCart();

    const [image, setimage] = useState('/mobile.png')
    const [show, setshow] = useState('h-[4rem]')
    const [reportshow, setreportshow] = useState('hidden')
    const [reportValue, setreportValue] = useState('')
    const [showdelivery, setshowdelivery] = useState('hidden')
    const [Data, setData] = useState([])
    const [actualprice, setactualprice] = useState()
    const [images, setimages] = useState([])
    const [video, setvideo] = useState([])
    const [store, setstore] = useState([])
    const [Ratings, setRatings] = useState([])
    const [storeCart, setStoreCart] = useState({ id: "", storeid: "" })
    const [openDifferentStorePopUp, setopenDifferentStorePopUp] = useState(false)
    const [quantity, setQuantity] = useState({})

    const primaryRef = useRef(null);
    const secondaryRef = useRef(null);

    const slug = params.slug;
    let price = 0;
    useEffect(() => {
        async function Fetchdata() {
            try {
                let url = BASE_URL + 'api/product/' + slug
                const data = await axios.get(url)
                const response = data.data;
                // console.log(response)

                price = response[0].stores[0].variants1_mrp_price - (response[0]?.stores[0]?.variants1_mrp_price * (response[0].stores[0]?.variants1_discount_per / 100))

                const data1 = await fetch(BASE_URL + 'api/reviews/' + response[0]._id)
                const response1 = await data1.json()

                setRatings(response1?.reviews)
                console.log(response[0].stores)
                setstore(response[0].stores)
                setactualprice(price)
                setimage(response[0].product_primary_image_url)
                setData(response[0])
                setimages(response[0].product_images_url)
                setvideo(response[0].product_videos_url[0])
                if (primaryRef.current) {
                    // @ts-ignore
                    primaryRef.current.sync(secondaryRef.current.splide);
                }
            } catch (error) {
                console.log(error)
            }
        }

        Fetchdata()
    }, [primaryRef.current, secondaryRef.current])




    function ShowDeliveryContent() {
        if (showdelivery == 'hidden') {
            setshowdelivery('')
        }
        else {
            setshowdelivery('hidden')
        }
    }


    const handleCart = async (id, storeid) => {
        if (localStorage.getItem('GROC_USER_TOKEN')) {
            let id = Data._id;
            try {
                let url = BASE_URL + 'api/addtocart'
                let bodydata = { mobile: userDetail?.mobile, productid: id, quantity: quantity[storeid], shopID: storeid }
                const data = await fetch(url, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bodydata)
                });
                console.log(data)
                GetCart()
                toast.success('Added To Cart')
            } catch (error) {
                console.log(error)
                toast.error('Error Adding To Cart');
            }
        }
        else {
            navigate('/login')
        }
    }

    async function addToCart(storei) {
        let storeid = storei._id
        console.log(storeid)
        setStoreCart({ id: Data._id, storeid: storeid })
        checkIfSameStore(Data._id, storeid).then((res) => {

            if (res === true) {

                handleCart(Data._id, storeid)

            }
            else {
                setopenDifferentStorePopUp(true)
            }


        })
    };

    const handleBuy = async (storeid) => {
        // console.log(Data)
        let temp = [];
        temp.push({ productid: Data._id, price: Data.stores[0].variants1_mrp_price, discount: Data.stores[0].variants1_discount_per, quantity: 1, shopid: storeid._id })

        console.log(temp)
        localStorage.setItem('CHECKOUT_DATA', JSON.stringify(temp))
        navigate('/checkout');
    }

    function StarPrint(count) {
        let con = []
        for (let index = 0; index < count; index++) {
            con.push(<span><Starfilled /></span>)
        }
        for (let index = 0; index < 5 - count; index++) {
            con.push(<span className=''><Empty className='h-[20px] w-[20px]' /></span>)
        }
        return con;
    }


    async function AddtoWishlist(id, storeid) {
        console.log(id, storeid)
        try {
            let url = BASE_URL + 'api/addtowishlist'
            let bodydata = { mobile: userDetail?.mobile, productid: id, shopID: storeid }
            const data = await fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodydata)
            });
            console.log(data);
            if (data) {
                // toast.success('Added to Wishlist')
            }
            GetWishList()
        } catch (error) {
            console.log(error)
            toast.error('Unable to add Item')
        }


    }


    const handleCartOfDiffStore = () => {
        console.log(cartData)
        cartData.forEach((val) => {
            AddtoWishlist(val?.product._id, val.shopID._id)
        })


        emptyCart().then((res) => {
            console.log(res)
            if (res.success) {
                handleCart(storeCart.id, storeCart.storeid)
            }
            else {
                toast.error("Error in Adding product to cart")
            }
        }).catch((err) => {
            console.log(err)
            toast.error("Error in Adding product to cart")
        })


    }

    function isEmpty(obj) {
        for (const prop in obj) {
            if (Object.hasOwn(obj, prop)) {
                return false;
            }
        }

        return true;
    }

    useEffect(() => {
        let temp = {};
        store?.forEach((val, ind) => {
            temp[val.store._id] = 1

        })
        setQuantity({ ...temp })
    }, [store])

    console.log(quantity)
    if (isEmpty(quantity)) {
        return <>Loading...</>
    }


    const updateQuantity = (e, id, method) => {
        e.stopPropagation()
        console.log(id, method)
        if (method == 'increase') {
            let temp = { ...quantity }
            temp[id] = temp[id] + 1
            setQuantity({ ...temp })

        }
        else {
            if (quantity[id] > 1) {
                let temp = { ...quantity };
                temp[id] = temp[id] - 1
                setQuantity({ ...temp })

            }
        }
    }

    return (<>
        {/* <Extra /> */}

        <div className="flex  pb-5  justify-center px-16">
            <div className="">
                {/* image */}
                <div className='flex w-full sm:flex-col'>
                    <div className='w-[55%]   sm:w-full '>
                        <div className="flex  border-r-2 border-b-2 py-5 pr-4 sm:px-4  ">
                            <ProductImages
                                data={Data?.product_images_url?.map(
                                    (val) => val
                                )}

                            />

                        </div>
                        {/* title */}
                        <div className='text-[#848484] text-[20px] space-y-2 mt-2 sm:px-4 fontmont'>
                            <div className='text-[#848484] text-[20px]'>
                                {
                                    Data.products_title
                                }
                            </div>



                        </div>
                        {/* custom */}
                        <div className='border-t-2 pt-3 mt-4 sm:px-4 space-y-2 fontmont'>
                            <div className='text-[#848484] text-[16px] '>Colour - Midnight Grey</div>
                            {/* <div className='flex space-x-3'>
                                <button className='h-5 w-5 bg-black rounded-full'></button>
                                <button className='h-5 w-5 bg-[#FEE4FF] rounded-full'></button>
                                <button className='h-5 w-5 bg-[#F9EDCE] rounded-full'></button>
                                <button className='h-5 w-5 bg-[#E70000] rounded-full'></button>
                            </div>
                            <div className='flex space-x-8 mt-4 text-[#848484]'>
                                <div>Size : </div>
                                <div className='flex space-x-4 text-[#848484]'>
                                    <button className='bg-[#f3f3f3] px-2 rounded'>512 GB</button>
                                    <button className='bg-[#f3f3f3] px-2 rounded'>258 GB</button>
                                    <button className='bg-[#f3f3f3] px-2 rounded'>128 GB</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className='w-[45%] pl-8 pt-4 sm:px-4 sm:w-full'>
                        <div className='text-[#848484] text-[20px] fontgo'>Nearest Stores</div>
                        <div className='w-full space-y-5'>

                            {
                                store.length > 0 && store.map((item) => {
                                    // console.log(item)
                                    return (
                                        <>
                                            <div className='flex rounded-lg w-full border bg-[#FAFAF5] py-4 space-x-5 px-3 mt-4 h-full' onClick={() => navigate('/store/' + item.store._id)}>
                                                <div className=' flex items-center justify-center relative'>
                                                    {item?.variants1_discount_per > 0 && <div div className='absolute bg-[#58B310] h-8 w-8 rounded-full -top-2 -left-2  text-center fontgo text-white flex flex-col pt-[2px]'>
                                                        <div className='text-[10px]'>{item?.
                                                            variants1_discount_per}%</div>
                                                        <div className='text-[8px]'>off</div>
                                                    </div>}
                                                    <img className='max-h-52 max-w-32' src={item?.store?.shopImages[0]} />

                                                </div>
                                                <div className='flex flex-col w-full fontmont text-[#848484] gap-2'>
                                                    <div className='flex justify-between  font-bold fontmont text-[16px] text-[#848484]'>
                                                        <div>{item?.store?.shopName}</div>
                                                        <div className='flex '>
                                                            <div>₹ {item?.variants1_mrp_price - (item?.variants1_mrp_price * (item?.variants1_discount_per / 100))}</div>
                                                            <div className='txtc text-[10px]'>₹ {item?.variants1_mrp_price}</div>
                                                        </div>
                                                    </div>
                                                    <div className='text-sm'>{item?.store?.ShopAddress}</div>
                                                    {/* <div>Delivery by Sun, 12 Feb</div> */}
                                                    {/* <div>2.1km</div> */}
                                                    <div className='flex justify-between items-center'>

                                                        {isShopOpen(item?.store?.openingHours?.from, item?.store?.openingHours?.to)
                                                            ? <div div className='text-[14px] text-[#58B310] font-semibold'>{item.store.openingHours.from}- {item?.store?.openingHours?.to}</div> : <div className='flex flex-col opacity-[0.5]'> <div div className='text-[14px] text-red-500 font-semibold'>{item?.store?.openingHours?.from}- {item?.store?.openingHours?.to}</div> <div className='text-[14px] text-red-500 font-semibold' >Closed</div>  </div>}
                                                        <div className='actions'>


                                                            <div className='quantity_container' >
                                                                <div onClick={(e) => updateQuantity(e, item.store._id, "decrease")}>-</div>
                                                                <div className='qc_value'>
                                                                    {quantity[item.store._id]}
                                                                </div>
                                                                <div
                                                                    className='qc_increase'
                                                                    onClick={(e) => updateQuantity(e, item.store._id, "increase")}>
                                                                    +
                                                                </div>
                                                            </div>




                                                        </div>
                                                        <div className='flex gap-3'>
                                                            <button className='border border-[var(--primary)] rounded-sm px-3 py-1' onClick={(e) => { e.stopPropagation(); addToCart(item.store) }} style={{ opacity: isShopOpen(item?.store?.openingHours?.from, item?.store?.openingHours?.to) ? "1" : "0.5", pointerEvents: isShopOpen(item.store.openingHours.from, item.store.openingHours.to) ? "unset" : "none" }} >Add To Cart</button>


                                                        </div>

                                                    </div>
                                                </div>
                                            </div >
                                        </>)
                                })

                            }

                        </div>

                    </div>
                </div>
                {/* Add Here */}

                <div className='w-[55%] sm:w-full'>
                    <div className=' fontmont text-[#848484] space-y-1 mt-5 sm:px-4'>
                        <div className='flex justify-between'>
                            <div>Brand</div>
                            <div className='text-end'>{Data?.brand}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Category</div>
                            <div className='text-end'>{Data?.parent_category_name}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Weight</div>
                            <div className='text-end'>{Data?.variants1_weight}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>sub category</div>
                            <div className='text-end'>{Data?.sub_category_name}</div>
                        </div>

                    </div>

                    <div className='fontmont text-[#848484] mt-4 py-2 sm:px-4 border-t-2'>
                        <div className='font-semibold'>About this item</div>
                        <ul className={`pl-8 space-y-1  overflow-y-hidden ${show}`} >
                            <li className="list-disc"> {
                                Data.products_description
                            }</li>

                        </ul>
                        {show === "h-[4rem]" && (Data.products_description?.length > 150) &&
                            <button className='flex items-center space-x-1' onClick={() => setshow('h-auto')}>
                                <FaAngleDown />
                                <div className='font-semibold'>Show more</div>
                            </button>
                        }
                        {show === "h-auto" &&
                            <button className='flex items-center space-x-1' onClick={() => setshow('h-[4rem]')}>
                                <FaAngleUp />
                                <div className='font-semibold'>Show Less</div>
                            </button>
                        }


                    </div>


                    <div onClick={ShowDeliveryContent} className='flex w-full justify-between py-4 border-t-2 mt-4 fontmont  text-[#848484] text-[16px] cursor-pointer  sm:px-4'>
                        <div>Delivery & Returns</div>
                        <Down />
                    </div>

                    <div className={`fontmont text-[#848484] pl-5  sm:px-4 ${showdelivery}`}>
                        <div className='font-semibold'>This product will delivered to you</div>
                        <ul className='pl-8'>
                            <li className='list-disc'>By {getDateAfterFiveDays()}</li>
                        </ul>
                        <div>
                            <div className='font-semibold'>This product is not refundable</div>
                            <ul className='pl-8'>
                                <li className='list-disc'>Only replaceable</li>
                                <li className='list-disc'>Not refundable</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex w-full justify-between py-4  border-t-2 fontmont  text-[#848484] text-[16px]  sm:px-4'>
                        <div>Reviews</div>
                        {/* <div className='flex'>
                            <Emptystar />
                            <Emptystar />
                            <Emptystar />
                            <Emptystar />

                        </div> */}
                    </div>

                    <div className='flex justify-between mt-2 w-full  sm:px-4 '>
                        {/* <div className='flex flex-col gap-2 w-[40%]'>
                            <div className='flex w-full justify-between   '>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                            </div>
                            <div className='flex w-full justify-between  items-center  mt-2'>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>
                                <div className='w-[47%] border' data-bs-toggle="modal" href="#exampleModalToggle" role="button"><img className='w-full h-full' src='/apple.png' /></div>

                            </div>
                        </div> */}
                        {
                            Ratings?.map((item) => {
                                return (<>
                                    <div className=' fontmont w-full'>
                                        <div className='flex justify-between'>
                                            <div className='flex space-x-3 items-center'>
                                                <div className='rounded-full h-8 w-8 border bg-slate-400 flex justify-center items-center'>
                                                    <img src='/logo192.png' />
                                                </div>
                                                <div>{item?.reviewBy?.firstName} {item?.reviewBy?.lastName}</div>
                                            </div>
                                            <div className='flex '>
                                                {
                                                    StarPrint(item?.rating)
                                                }
                                            </div>
                                        </div>

                                        <div className='text-left mt-2 text-sm'>“{item?.review}”</div>
                                    </div>
                                </>)
                            })
                        }

                    </div>
                </div>


            </div>

            {/* PickThis *************************************************************************************************************************** */}

        </div >
        <Toaster />
        {
            openDifferentStorePopUp && (
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
                    onClick={() => setopenDifferentStorePopUp(false)}
                >
                    <ConfirmCart close={setopenDifferentStorePopUp} handleCart={handleCartOfDiffStore} />{" "}
                </div>
            )
        }
    </>)
}
