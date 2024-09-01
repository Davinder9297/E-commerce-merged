import React, { useEffect, useState, useContext } from 'react'
import styles from './cards.module.css'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'

import { Globalinfo } from '../../App';
import { BASE_URL } from '../../Api/api';


import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { cropString, isShopOpen } from '../../helpers/helper_function'
import { RWebShare } from 'react-web-share';
import { useLocation, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useCheckCart } from '../../hooks/useCheckCart';
import ConfirmCart from '../popUps/confirmCart';
import { CiHeart } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';
import { FaCartPlus } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import { BsCartCheckFill } from "react-icons/bs";


const ShopCard = (value) => {

    const location = useLocation()
    const params = useParams()
    console.log(params.id)

    const navigate = useNavigate()
    const { checkIfSameStore, emptyCart } = useCheckCart()

    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)
    console.log(wishListData[0])
    const [searchParams, setSearchParams] = useSearchParams();

    const Menus = [
        { name: "Like", icon: "Heart-outline", dis: "translate-x-0" },
        // { name: "Cart", icon: "basket-outline", dis: "translate-x-16" },
        { name: "Share", icon: "share-outline", dis: "translate-x-32" },
    ];

    const [shopData, setShopData] = useState(); // 1 for increasing, -1 for decreasing
    const [openDifferentStorePopUp, setopenDifferentStorePopUp] = useState(false)

    const [storeCart, setStoreCart] = useState({ id: "", storeid: "" })
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const fetchData = async () => {

        try {
            const res = await fetch(`${BASE_URL}api/productsbystore?shop=${params.id}`);
            const response = await res.json();
            console.log(response.shop);
            setShopData(response.shop)

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fetchData();
    }, [params.id])

    useEffect(() => {
        // console.log(wishListData[0]?.product?._id)
        const isWishlisted =
            wishListData.some(obj => obj?.product?._id === value?.value?._id)

        if (isWishlisted) {
            setIsWishlisted(true)
        }
        else {
            setIsWishlisted(false)
        }
        const isInCart = cartData.some(obj => obj.product?._id === value?.value?._id)
        if (isInCart) {
            setIsAddedToCart(true)
        }
        else {
            setIsAddedToCart(false)
        }

    }, [wishListData, cartData])


    // add to cart function

    const handleCart = (id, storeid) => {
        // console.log(id, storeid)
        let url = BASE_URL + 'api/addtocart'
        let bodydata = { mobile: userDetail?.mobile, productid: id, quantity: 1, shopID: storeid }
        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata)
        }).then((response) => { if (response) { toast.success('Added to Cart'); GetCart() } }).catch((err) => {
            console.log(err)
            toast.error("Failed to add Item ")
        })
    }



    const Addtocart = async (id, storeid) => {
        console.log(id, storeid)
        setStoreCart({ id: id, storeid: storeid })
        checkIfSameStore(id, storeid).then((res) => {
            console.log(res)
            if (res === true) {
                handleCart(id, storeid)
            }
            else {
                setopenDifferentStorePopUp(true)
            }
        }
        );
    }

    const handleCartOfDiffStore = () => {

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


    async function RemoveFromWishlist(id) {

        let url2 = BASE_URL + 'api/removefromwishlist'
        let bodydata2 = { mobile: userDetail?.mobile, productid: value?.value?._id }

        const data2 = await fetch(url2, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodydata2)
        });
        const response = await data2.json()
        toast.success('Removed from Wishlist')

        GetWishList()

    }

    const handleWishlist = () => {
        if (isWishlisted) {
            RemoveFromWishlist()
        }
        else {
            AddtoWishlist()
        }
    }


    async function AddtoWishlist(id = value?.value?._id, storeid = value?.value?.stores[0].store) {

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
                toast.success('Added to Wishlist')
            }
            GetWishList()
        } catch (error) {
            console.log(error)
            toast.error('Unable to add Item')
        }


    }

    console.log(shopData)
    if (shopData == undefined) {
        return <h1>Loading Shop Data...</h1>
    }
    return (
        <>
            <Toaster />
            <div onClick={() => navigate(`/product/${value.value.slug}`)}>
                <div className={styles.card_container} >

                    <div className={styles.inner_card_container}>

                        <div className={styles.image_container}>
                            <img src={value.value?.product_primary_image_url} alt="" />
                        </div>
                        <div className={styles.details}>
                            <span className={styles.about}>
                                <h5>{cropString(value.value.products_title, 10)}</h5>
                                <h5>{value?.value.variants1_weight} gm </h5>
                                {value.value.stores && <h5>₹ {value.value?.stores[0]?.variants1_mrp_price}</h5>}


                            </span>
                            <span className='flex flex-col items-center'>
                                <span className={styles.stars}>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </span>
                                <span className='mt-6 flex items-center justify-center gap-2 ' style={{ opacity: isShopOpen(shopData.openingHours.from, shopData.openingHours.to) ? "1" : "0.5", pointerEvents: isShopOpen(shopData.openingHours.from, shopData.openingHours.to) ? "unset" : "none" }} onClick={() => toast.warning('Store is Closed')} >
                                    <span onClick={(e) => { e.stopPropagation(); handleWishlist() }}>
                                        {isWishlisted ? <IoHeart size={24} color={"green"} /> : <CiHeart size={24} color={"black"} />}

                                    </span>
                                    <span onClick={(e) => { e.stopPropagation(); Addtocart(value.value._id, params.id) }}>


                                        {!isAddedToCart ? <FaCartPlus size={20} color={"green"} /> : <BsCartCheckFill size={20} color={"green"} />}

                                    </span>
                                </span>
                            </span>

                        </div>


                    </div>
                </div >
            </div >
            {openDifferentStorePopUp && (
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

        </>
    )
}

export default ShopCard
