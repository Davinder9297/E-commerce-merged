import React, { useState, useEffect } from 'react'
import styles from './maincontent.module.css'
import Heroimage from '../../Assets/Images/groceryBanner.png'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Products from '../Products/products';
import { newProducts, TopRatedProducts } from '../../Data/db';
import { ReactComponent as Dropdown } from '../../Assets/Icons/dropdown.svg'
import { ReactComponent as Hotdeals } from '../../Assets/Icons/hotdeals.svg'
import { ReactComponent as St } from '../../Assets/Icons/star.svg'
import banner3 from '../../Assets/Images/banner3.png'
import grocery2 from '../../Assets/Images/grocery2.png'
import electronicsBanner from '../../Assets/Images/electronicsBanner.png'
import serum from '../../Assets/Images/products/serum.png'
import banner_shirt from '../../Assets/Images/banner_shirt.jpg'
import { BASE_URL } from '../../Api/api';
import { Link, useNavigate } from 'react-router-dom';


const MainContent = () => {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate()
    // console.log(process.env.BASE_URL)

    const fetchData = async () => {
        try {
            const res = await fetch(`${BASE_URL}api/products`);
            const response = await res.json();
            console.log(response);
            setProductData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (

        <div className={styles.hero_carousel_main} style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px 40px", backgroundColor: "#F3F3F3" }} >
            <div className={styles.hero_image}>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 1,
                        pagination: false,
                        perMove: 1,
                        wheel: false,
                        arrows: false,
                        autoplay: true,
                        interval: 2000,
                        speed: 1000,
                        delay: 2,
                        pauseOnHover: false,
                        drag: true,
                        pauseOnHover: true,

                    }}>
                    <SplideSlide>
                        <img src={'/assets/Images/3.png'} alt="banner  not found" onClick={() => navigate('/store/65d87ed34331e28142b6190d')} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={'/assets/Images/2.png'} alt="banner  not found" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={'/assets/Images/1.png'} alt="banner not found" />
                    </SplideSlide>
                </Splide>
            </div>
            <div className={`${styles.newProducts_main} ${styles.products_main}`}>
                <div className={`${styles.newProducts_top} ${styles.products_top} `}>
                    <h1>New Products</h1>
                    {/* <span>
                        <h5>Show More </h5>
                        <Dropdown />

                    </span> */}
                </div>
                <Products data={productData.filter((val, id) => (id >= 2 && id <= 6) && val?.stores?.length > 0)} />

            </div>
            <div className={styles.banner_main}>

                <Link to={`/products?category=Health and Beauty`} className='w-[70%] sm:w-full sm:h-[200px]'>
                    <img className='w-full h-full' src={banner3} alt="banner not found" />
                    <div className='relative bottom-[50%] translate-y-[-50%] w-[35%] left-[7%] sm:w-[55%]'>
                        <p className='font-Gorditas  text-white text-[30px] sm:text-[20px] '>Get  ready to slay with our Stunning Makeup Collection!!</p>
                    </div>
                </Link>

                <Link to={`/products?category=Health and Beauty`} className={styles.hotdeals_main}>
                    <span className={styles.heading}>
                        <span>

                            <Hotdeals />
                            <h3>Hot Deals</h3>
                        </span>


                    </span>
                    <div className='h-[88%]'>
                        <Splide
                            className='h-[100%]'
                            options={{
                                type: "loop",
                                perPage: 1,
                                pagination: false,
                                perMove: 1,
                                wheel: false,
                                arrows: false,
                                autoplay: true,
                                interval: 2000,
                                speed: 1000,
                                delay: 4,
                                // duration:500,
                                pauseOnHover: false,
                                drag: true,

                            }}
                        >
                            <SplideSlide className='h-full'>
                                <div className={styles.product_card}>
                                    <div className={styles.details}>
                                        <h5>KDRFF Hair Serum</h5>

                                    </div>
                                    <div>
                                        <div className={styles.tag}>New</div>
                                        <img className='' src={serum} alt="" />
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide className='h-full'>
                                <div className={styles.product_card}>
                                    <div className={styles.details}>
                                        <h5>KDRFF Hair Serum</h5>

                                    </div>
                                    <div>
                                        <div className={styles.tag}>New</div>
                                        <img className='' src={serum} alt="" />
                                        <div className='flex'>
                                            {/* <img src='../../Assets/Icons/star.svg'/> */}
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </Link>

            </div>


            <div className={`${styles.featured_main} ${styles.products_main}`}>
                <div className={`${styles.featured_top} ${styles.products_top}`}>
                    <h1>Featured Products</h1>
                    {/* <span>
                        <h5>Show More </h5>
                        <Dropdown />

                    </span> */}
                </div>
                <div>
                    <Products data={productData.filter((val, id) => id <= 4 && val?.stores?.length > 0)} />
                </div>

            </div>

            <Link className="relative group h-[50vh] w-full" to={`/store/65d7338168bd195c22bc4bd0`}>
                <img
                    src={banner_shirt}
                    alt="what's new"
                    className=" group-hover:brightness-50 group-hover:blur-0 transition-all duration-300 h-[50vh] w-full object-cover"
                />
                <div className="absolute bottom-10 right-10 w-1/2 text-right space-y-1 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <p className="font-Gorditas text-[40px] text-[#FFFFFF] leading-10">
                        NEW SHIRT COLLECTION FOR MEN
                    </p>
                    <p className="font-Montserrat text-[#FFFFFF] text-[22px]">
                        SAVE UPTO 40% OFF
                    </p>
                </div>
            </Link>
            <div className={`${styles.featured_main} ${styles.products_main}`}>
                <div className={`${styles.featured_top} ${styles.products_top}`}>
                    <h1>Top Rated Products</h1>
                    {/* <span>
                        <h5>Show More </h5>
                        <Dropdown />

                    </span> */}
                </div>
                <Products data={productData.filter((val, id) => val?.stores?.length > 0)} />

            </div>
            <div className='flex flex-col gap-0'>
                <div className="flex flex-row justify-between bg-[#222222] font-Gorditas text-[#FFFFFF] pt-1 pb-1 pl-4 pr-4 hover:bg-[#58B310]">
                    <p className="flex flex-row">
                        <span className="pr-6">
                            <img
                                src="../assests/images/storeicon.svg"
                                className="text-[#FFFFFF]"
                            />
                        </span>
                        Stores Near Me
                    </p>
                    {/* <p className="flex flex-row">
                        Show More <span className="">&#9660;</span>
                    </p> */}
                </div>
                <div>
                    <img
                        src="../assests/images/map.png"
                        className="object-cover w-full h-[400px]"
                    />
                </div>
            </div>


            <div className="bg-[#FFFFFF]">
                <div className="flex flex-row justify-between font-Gorditas text-[#848484] text-lg pt-1 pb-1 pl-10 pr-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
                    <p>Rating</p>
                    {/* <p>
                        Show More <span className="cursor-pointer">&#9660;</span>
                    </p> */}
                </div>

                <div className="grid grid-cols-3 sm:grid sm:grid-cols-2 sm:justify-between">
                    <div className="p-4 hover:bg-[#f3f3f3] space-y-1 hover:scale-105">
                        <img
                            src="../assests/images/ratingimg1.svg"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between text-xl">
                            <h4 className="font-Gorditas text-[#000000]">Ritika Raj</h4>
                            <span className="text-[#FFB800]">
                                &#9733;&#9733;&#9733;&#9733;&#9734;
                            </span>
                        </div>
                        <p className="font-andika text-sm">
                            I've been using this online grocery store for months now, and I couldn't be happier with the service. The website is user-friendly, making it easy to find everything I need.
                        </p>
                    </div>
                    <div className="p-4 hover:bg-[#f3f3f3] space-y-1 hover:scale-105">
                        <img
                            src="../assests/images/ratingimg2.svg"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between text-xl">
                            <h4 className="font-Gorditas text-[#000000]">Anmol Sinha</h4>
                            <span className="text-[#FFB800]">
                                &#9733;&#9733;&#9733;&#9733;&#9734;
                            </span>
                        </div>
                        <p className="font-andika text-sm">
                            I've tried several online grocery stores, but this one stands out for its excellent selection and quality of produce.
                        </p>
                    </div>
                    <div className="p-4 pb-6 hover:bg-[#f3f3f3] space-y-1 hover:scale-105 sm:hidden">
                        <img
                            src="../assests/images/ratingimg3.svg"
                            className="w-full"
                        />
                        <div className="flex flex-row justify-between text-xl">
                            <h4 className="font-Gorditas text-[#000000]">Rahul Raj</h4>
                            <span className="text-[#FFB800]">
                                &#9733;&#9733;&#9733;&#9733;&#9734;
                            </span>
                        </div>
                        <p className="font-andika text-sm">
                            I had an issue with my order, and I must say, the customer service team went above and beyond to resolve it promptly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent