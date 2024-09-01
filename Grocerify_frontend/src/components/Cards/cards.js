import React, { useEffect, useState, useContext } from 'react'
import styles from './cards.module.css'
import { ReactComponent as Star } from '../../Assets/Icons/star.svg'

import { Globalinfo } from '../../App';
import { BASE_URL } from '../../Api/api';


import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { cropString } from '../../helpers/helper_function'
import { RWebShare } from 'react-web-share';
import { useLocation, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useCheckCart } from '../../hooks/useCheckCart';
import ConfirmCart from '../popUps/confirmCart';
import { CiHeart } from 'react-icons/ci';
import { IoHeart } from 'react-icons/io5';

const Cards = (value) => {
    const location = useLocation()
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
    const [active, setActive] = useState(0);
    const [showHeartPopup, setShowHeartPopup] = useState(false);
    const [showBasketPopup, setShowBasketPopup] = useState(false);
    const [heartSize, setHeartSize] = useState(0);
    const [basketSize, setBasketSize] = useState(0);
    const [heartDirection, setHeartDirection] = useState(1); // 1 for increasing, -1 for decreasing
    const [openDifferentStorePopUp, setopenDifferentStorePopUp] = useState(false)
    const [basketDirection, setBasketDirection] = useState(1);
    const [storeCart, setStoreCart] = useState({ id: "", storeid: "" })
    const [isWishlisted, setIsWishlisted] = useState(false);


    useEffect(() => {
        console.log(wishListData[0]?.product?._id)
        const isWishlisted =
            wishListData.some(obj => obj?.product?._id === value?.value?._id)

        if (isWishlisted) {
            setIsWishlisted(true)
        }
        else {
            setIsWishlisted(false)
        }
    }, [wishListData])


    // add to cart function

    const handleCart = (id, storeid) => {
        console.log(id, storeid)
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


    useEffect(() => {
        let heartInterval;
        if (showHeartPopup) {
            heartInterval = setInterval(() => {
                if (heartDirection === 1) {
                    // Increasing animation
                    setHeartSize((prevSize) => {
                        if (prevSize >= 250) {
                            setHeartDirection(-1); // Change direction to start decreasing
                        }
                        return prevSize + 1; // Increase size by 1
                    });
                } else {
                    // Decreasing animation
                    setHeartSize((prevSize) => {
                        if (prevSize <= 0) {
                            clearInterval(heartInterval); // Stop animation when size reaches 0
                            setShowHeartPopup(false); // Hide the heart after animation
                            setHeartDirection(1); // Reset direction for next animation
                        }
                        return prevSize - 3; // Decrease size by 1
                    });
                }
            }, 0.02); // Adjust the interval for smoother animation
        }

        let basketInterval;
        if (showBasketPopup) {
            basketInterval = setInterval(() => {
                if (basketDirection === 1) {
                    // Increasing animation
                    setBasketSize((prevSize) => {
                        if (prevSize >= 250) {
                            setBasketDirection(-1); // Change direction to start decreasing
                        }
                        return prevSize + 1; // Increase size by 1
                    });
                } else {
                    // Decreasing animation
                    setBasketSize((prevSize) => {
                        if (prevSize <= 0) {
                            clearInterval(basketInterval); // Stop animation when size reaches 0
                            setShowBasketPopup(false); // Hide the basket after animation
                            setBasketDirection(1); // Reset direction for next animation
                        }
                        return prevSize - 3; // Decrease size by 1
                    });
                }
            }, 0.02); // Adjust the interval for smoother animation
        }

        return () => {
            clearInterval(heartInterval); // Cleanup heart interval on unmount
            clearInterval(basketInterval); // Cleanup basket interval on unmount
        };
    }, [showHeartPopup, showBasketPopup, heartDirection, basketDirection]);

    const handleIconClick = (e, index) => {
        handleClickAction(e)
        e.preventDefault()
        setActive(index);
        if (Menus[index].name === "Like") {
            setShowHeartPopup(true);
        } else if (Menus[index].name === "Card") {
            setShowBasketPopup(true);
        }

    };

    const handleClick = (e) => {
        e.preventDefault();
    }

    const handleClickAction = (e) => {
        console.log(e)
        if (e.target.name === 'basket-outline') {

            if (localStorage.getItem('GROC_USER_TOKEN')) {

                Addtocart(value?.value?._id, value?.value?.stores[0].store);
            }
            else {
                navigate('/login')
            }

            // console.log('first')

        }
        if (e.target.name === 'Heart-outline') {
            if (localStorage.getItem('GROC_USER_TOKEN')) {

                AddtoWishlist(value?.value?._id, value?.value?.stores[0].store)
            }
            else {
                navigate('/login')
            }




        }

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
                                <span className='mt-6' onClick={(e) => { e.stopPropagation(); handleWishlist() }} >

                                    {isWishlisted ? <IoHeart size={24} color={"green"} /> : <CiHeart size={24} color={"black"} />}
                                </span>
                            </span>

                        </div>
                        {/* <div className={`relative max-h-[4.4rem] px-6 rounded-t-xl ${styles.actions}`}>
                            <ul className="flex relative">
                                <span
                                    className={` duration-500 ${Menus[active].dis}  h-16 w-16 absolute -top-5 rounded-full ${styles.rounded_div}`}
                                    onClick={handleClick}
                                >
                                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
                                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
                                </span>
                                 {Menus.map((menu, index) => (
                                    <li key={index} className="w-16" onClick={(e) => { handleIconClick(e, index) }}>
                                        <a
                                            className="flex flex-col text-center pt-6"

                                        >
                                            <span
                                                className={`text-xl cursor-pointer duration-500 ${index === active && "-mt-6 text-white"
                                                    }`}
                                                onMouseEnter={() => setActive(index)}
                                                onMouseLeave={() => setActive(active)}

                                            >
                                                {
                                                    menu.icon == 'share-outline' ? <RWebShare
                                                        data={{
                                                            text: "Web Share - Grocerify",
                                                            url: `${window.location.origin}/product/${value.value.slug}`,
                                                            title: "Grocerify",
                                                        }}

                                                    >
                                                        <ion-icon name={menu.icon}></ion-icon>

                                                    </RWebShare> : <ion-icon name={menu.icon}></ion-icon>
                                                }

                                            </span>
                                            <span
                                                className={`${active === index
                                                    ? "translate-y-4 duration-700 opacity-100"
                                                    : "opacity-0 translate-y-10"
                                                    }`}
                                            >
                                                {menu.name}
                                            </span>
                                        </a>
                                    </li>
                                ))} 
                            </ul>

                            {/* {showBasketPopup && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-200px]">
                                    <div
                                        className="p-4 rounded-lg border-gray-300"
                                        style={{ width: `${basketSize}px`, height: `${basketSize}px` }}
                                    >
                                        <img
                                            src="https://ongpng.com/wp-content/uploads/2023/09/Basket-icon.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )} */}
                        {/* {showHeartPopup && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-120px]">
                                    <div
                                        className="p-4 rounded-lg border-gray-300"
                                        style={{
                                            width: `${heartSize} px`, height: `${heartSize}px`,
                                        }}
                                    >
                                        <img src="/wish_lg.svg" alt="" />
                                    </div>
                                </div>
                            )}
                        </div> */}

                    </div>
                </div >
            </div >
            {/* {openDifferentStorePopUp && (
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
            )} */}
        </>
    )
}

export default Cards
