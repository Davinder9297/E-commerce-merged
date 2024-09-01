import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Sidebar from "../Sidebar/sidebar";
import { BASE_URL } from "../../Api/api";
import { isShopOpen } from "../../helpers/helper_function";

const FeaturedStore = () => {
    const [index, setIndex] = useState(0);
    const [ShopData, setShopData] = useState()
    const totalSlides = 3;
    const handleWheel = (event) => {
        const scrollDirection = Math.sign(event.deltaY);

        setIndex((prevIndex) => {
            const newIndex = prevIndex + scrollDirection;
            return Math.max(0, Math.min(newIndex, totalSlides - 1));
        });
    };

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            const res = await fetch(`${BASE_URL}api/shops`);
            const response = await res.json();
            console.log(response.data)
            setShopData(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    const slideStyle = {
        transform: `translateY(-${index * 50}%)`,
        transition: "transform 1.5s ease",
        height: "100%",
    };

    const options = {
        items: 2,
        rewind: true,
        dots: false,
        autoplay: true,
    };

    console.log(ShopData)

    return (
        <div className=" bg-[#F3F3F3]">

            <div className="flex flex-col pb-[20px]">
                {/* map */}
                <div className="pr-1 space-y-6">
                    <div>


                        {/* <div className="relative">
                            <img
                                src="../assests/images/map.png"
                                className="object-cover w-full h-[600px]"
                            />
                            <div className="absolute top-4 left-6 w-[400px] h-[570px] pt-3 pl-4 pr-4 space-y-2 text-[#FFFFFF] bg-[#222222] flex flex-col">
                                <p className="font-Gorditas text-4xl">Store</p>
                                <p className="font-Gorditas text-sm">
                                    Search by store name or distance
                                </p>
                                <div className="flex flex-row justify-between gap-x-3">
                                    <input className="rounded-lg bg-[#D9D9D9] w-2/3 text-[#222222] pl-4" />
                                    <button className="w-1/3 pl-8 pr-8 pt-1 pb-1 text-[#FFFFFF] text-md rounded-lg bg-[#58B310] font-Montserrat hover:bg-[#D9D9D9] hover:text-[#222222]">
                                        Search
                                    </button>
                                </div>
                                <div className="font-Montserrat text-sm underline flex flex-row justify-between">
                                    <a href="https://www.google.com/maps">Use My Location</a>
                                    <a href="http://www.google.com/maps" className="">
                                        Browse Directory
                                    </a>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between font-Gorditas text-sm items-center">
                                    <p>15 results naer “tukwila, wa, us” </p>
                                    <p>
                                        Filter By{" "}
                                        <span className="text-lg pl-1 cursor-pointer">+</span>
                                    </p>
                                </div>
                                <hr className="pb-3" />

                                <div
                                    style={{
                                        overflow: "hidden",
                                        height: "330px",
                                        position: "relative",
                                        scrollBehavior: "smooth",
                                    }}
                                    onWheel={handleWheel}
                                >
                                    <div
                                        style={{
                                            ...slideStyle,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <div className="p-4 m-2 space-y-1 font-Montserrat bg-[#FFFFFF] text-[#333333] flex flex-col h-[330px] hover:bg-[#f3f3f3]">
                                            <img
                                                src="../assests/images/woodenstore.svg"
                                                className="w-full h-[190px] object-cover hover:scale-105 transition-all duration-300"
                                            />
                                            <div className="text-[#222222] flex flex-row gap-x-1">
                                                <p className="text-[#090707]">1.</p>
                                                <p className="font-Gorditas text-sm">
                                                    Macy’s Redmond Furniture and mattress gallery
                                                </p>
                                                <p className="text-[#958585] text-xs w-1/6">12 km</p>
                                            </div>
                                            <p className="text-[#333333] text-sm font-semibold pl-3">
                                                Closed - Opens 10AM
                                            </p>
                                            <p className="text-[#333333] text-[12px] font-semibold pl-3">
                                                15340 N.e. 24th Street redmond, WA 98052
                                            </p>
                                            <div className="flex flex-row justify-between pl-3 pr-3 text-[#222222] font-Montserrat text-sm font-semibold underline">
                                                <p>98123-12354</p>
                                                <p>Store details</p>
                                                <a href="https://www.google.com/maps">Direction</a>
                                            </div>
                                        </div>
                                        <div className="p-4 m-2 space-y-1 font-Montserrat bg-[#FFFFFF] text-[#333333] flex flex-col h-[330px] hover:bg-[#f3f3f3]">
                                            <img
                                                src="../assests/images/woodenstore.svg"
                                                className="w-full h-[190px] object-cover hover:scale-105 transition-all duration-300"
                                            />
                                            <div className="text-[#222222] flex flex-row gap-x-1">
                                                <p className="text-[#090707]">1.</p>
                                                <p className="font-Gorditas text-sm">
                                                    Macy’s Redmond Furniture and mattress gallery
                                                </p>
                                                <p className="text-[#958585] text-xs w-1/6">12 km</p>
                                            </div>
                                            <p className="text-[#333333] text-sm font-semibold pl-3">
                                                Closed - Opens 10AM
                                            </p>
                                            <p className="text-[#333333] text-[12px] font-semibold pl-3">
                                                15340 N.e. 24th Street redmond, WA 98052
                                            </p>
                                            <div className="flex flex-row justify-between pl-3 pr-3 text-[#222222] font-Montserrat text-sm font-semibold underline">
                                                <p>98123-12354</p>
                                                <p>Store details</p>
                                                <a href="https://www.google.com/maps">Direction</a>
                                            </div>
                                        </div>
                                        <div className="p-4 m-2 space-y-1 font-Montserrat bg-[#FFFFFF] text-[#333333] flex flex-col h-[330px] hover:bg-[#f3f3f3]">
                                            <img
                                                src="../assests/images/woodenstore.svg"
                                                className="w-full h-[190px] object-cover hover:scale-105 transition-all duration-300"
                                            />
                                            <div className="text-[#222222] flex flex-row gap-x-1">
                                                <p className="text-[#090707]">1.</p>
                                                <p className="font-Gorditas text-sm">
                                                    Macy’s Redmond Furniture and mattress gallery
                                                </p>
                                                <p className="text-[#958585] text-xs w-1/6">12 km</p>
                                            </div>
                                            <p className="text-[#333333] text-sm font-semibold pl-3">
                                                Closed - Opens 10AM
                                            </p>
                                            <p className="text-[#333333] text-[12px] font-semibold pl-3">
                                                15340 N.e. 24th Street redmond, WA 98052
                                            </p>
                                            <div className="flex flex-row justify-between pl-3 pr-3 text-[#222222] font-Montserrat text-sm font-semibold underline">
                                                <p>98123-12354</p>
                                                <p>Store details</p>
                                                <a href="https://www.google.com/maps">Direction</a>
                                            </div>
                                        </div>{" "}
                                    </div>{" "}
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="pr-8 pl-8 space-y-6">
                        {/* order now */}
                        <div className="bg-[#EDF1E0] relative border h-fit">
                            <img
                                src="/assets/Images/shopBanner.png"
                                className=" h-auto object-cover  w-full"

                            />


                        </div>

                        {/* all stores */}
                        <div className="bg-[#FFFFFF] ">
                            <div className="flex flex-row justify-between font-Gorditas text-[#848484] text-3xl pt-3 pb-1 pl-10 pr-10 mt-3 hover:bg-[#58B310] hover:text-[#FFFFFF]">
                                <p>Stores Nearby</p>

                            </div>

                            <div className="grid grid-cols-3 gap-[2rem] px-10 py-4">
                                {
                                    ShopData?.map((val, ind) => {
                                        return (
                                            <div className="group hover:scale-[0.97]" key={ind}>
                                                <Link to={"/store/" + val._id}>
                                                    <img
                                                        src={val.shopImages[0]}
                                                        className="w-full h-[30vh]  transition-all duration-300 rounded-[15px] shadow-md"
                                                    />
                                                    <p className="font-Gorditas  text-2xl  mt-2 top-32 left-0 w-full">
                                                        {val.shopName}
                                                    </p>
                                                    <div className="text-sm font-Montserrat">
                                                        <h4 className="font-Gorditas text-sm truncate">
                                                            {val.ShopAddress}
                                                        </h4>

                                                        <p>1km</p>
                                                        {/* <p>{ }</p> */}
                                                        <span className="text-2xl text-center text-[#FFB800]">
                                                            &#9733;&#9733;&#9733;&#9733;&#9734;
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }



                            </div>
                        </div>

                        {/* whats new */}
                        <Link className="relative group" to={`/store/65d7338168bd195c22bc4bd0`}>
                            <img
                                src="../assests/images/storeimg.svg"
                                alt="what's new"
                                className="w-full group-hover:brightness-50 group-hover:blur-0 transition-all duration-300"
                            />
                            <div className="absolute bottom-10 right-10 w-1/2 text-right space-y-1 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <p className="font-Gorditas text-[44px] text-[#FFFFFF] leading-10">
                                    NEW FASHION STORE FOR GIRLS
                                </p>
                                <p className="font-Montserrat text-[#FFFFFF] text-[22px]">
                                    SAVE UPTO 40% OFF
                                </p>
                            </div>
                        </Link>

                        {/* top rated store */}
                        {/* <div className="bg-[#FFFFFF]">
                            <div className="flex flex-row justify-between font-Gorditas text-[#848484] text-lg pt-1 pb-1 pl-10 pr-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
                                <p>TOP RATED STORE</p>
                                <p>
                                    {" "}
                                    <Link to={"/view_store"}>
                                        Show More <span className="cursor-pointer">&#9660;</span>
                                    </Link>
                                </p>
                            </div>
                            <div className="p-4">
                                <ReactOwlCarousel {...options}>
                                    <div className="relative group mr-3">
                                        <Link to={"/view_store"}>
                                            <img
                                                src="../assests/images/chandigarhstore.svg"
                                                className="w-full group-hover:brightness-50 transition-all duration-300"
                                            />
                                            <p className="font-Gorditas text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                                                Chandigarh store
                                            </p>
                                            <div className="grid grid-cols-2 absolute pl-6 text-[#FFFFFF] text-sm font-Montserrat bottom-6 gap-x-28 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                                <h4 className="font-Gorditas text-xl">
                                                    Shop No, 2284/3, Mariwala Town
                                                </h4>
                                                <h6 className="text-center pt-8">FURNITURE STORE</h6>
                                                <p>1km</p>
                                                <span className="text-2xl text-center text-[#FFB800]">
                                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="relative group mr-3">
                                        <Link to={"/view_store"}>
                                            <img
                                                src="../assests/images/ramgrocery.png"
                                                className="w-full group-hover:brightness-50 transition-all duration-300"
                                            />
                                            <p className="font-Gorditas text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                                                RAM GROCERY STORE
                                            </p>
                                            <div className="grid grid-cols-2 absolute pl-6 text-[#FFFFFF] text-sm font-Montserrat bottom-6 gap-x-28 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                                <h4 className="font-Gorditas text-xl">
                                                    Shop No, 2284/3, Mariwala Town
                                                </h4>
                                                <h6 className="text-center pt-8">FURNITURE STORE</h6>
                                                <p>1km</p>
                                                <span className="text-2xl text-center text-[#FFB800]">
                                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="relative group mr-3">
                                        <Link to={"/view_store"}>
                                            <img
                                                src="../assests/images/chandigarhstore.svg"
                                                className="w-full group-hover:brightness-50 transition-all duration-300"
                                            />
                                            <p className="font-Gorditas text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                                                Chandigarh store
                                            </p>
                                            <div className="grid grid-cols-2 absolute pl-6 text-[#FFFFFF] text-sm font-Montserrat bottom-6 gap-x-28 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                                <h4 className="font-Gorditas text-xl">
                                                    Shop No, 2284/3, Mariwala Town
                                                </h4>
                                                <h6 className="text-center pt-8">FURNITURE STORE</h6>
                                                <p>1km</p>
                                                <span className="text-2xl text-center text-[#FFB800]">
                                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="relative group mr-3">
                                        <Link to={"/view_store"}>
                                            <img
                                                src="../assests/images/ramgrocery.png"
                                                className="w-full group-hover:brightness-50 transition-all duration-300"
                                            />
                                            <p className="font-Gorditas text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                                                RAM GROCERY STORE
                                            </p>
                                            <div className="grid grid-cols-2 absolute pl-6 text-[#FFFFFF] text-sm font-Montserrat bottom-6 gap-x-28 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                                <h4 className="font-Gorditas text-xl">
                                                    Shop No, 2284/3, Mariwala Town
                                                </h4>
                                                <h6 className="text-center pt-8">FURNITURE STORE</h6>
                                                <p>1km</p>
                                                <span className="text-2xl text-center text-[#FFB800]">
                                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="relative group mr-3">
                                        <Link to={"/view_store"}>
                                            <img
                                                src="../assests/images/chandigarhstore.svg"
                                                className="w-full group-hover:brightness-50 transition-all duration-300"
                                            />
                                            <p className="font-Gorditas text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                                                Chandigarh store
                                            </p>
                                            <div className="grid grid-cols-2 absolute pl-6 text-[#FFFFFF] text-sm font-Montserrat bottom-6 gap-x-28 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                                <h4 className="font-Gorditas text-xl">
                                                    Shop No, 2284/3, Mariwala Town
                                                </h4>
                                                <h6 className="text-center pt-8">FURNITURE STORE</h6>
                                                <p>1km</p>
                                                <span className="text-2xl text-center text-[#FFB800]">
                                                    &#9733;&#9733;&#9733;&#9733;&#9734;
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </ReactOwlCarousel>
                            </div>
                        </div> */}

                        {/* ratings */}
                        <div className="bg-[#FFFFFF]">
                            <div className="flex flex-row justify-between font-Gorditas text-[#848484] text-lg pt-1 pb-1 pl-10 pr-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
                                <p>Rating</p>
                                {/* <p>
                                    Show More <span className="cursor-pointer">&#9660;</span>
                                </p> */}
                            </div>

                            <div className="grid grid-cols-3">
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
                                        I've tried several online grocery stores, but this one stands out for its excellent selection and quality of produce
                                    </p>
                                </div>
                                <div className="p-4 pb-6 hover:bg-[#f3f3f3] space-y-1 hover:scale-105">
                                    <img
                                        src="../assests/images/ratingimg3.svg"
                                        className="w-full"
                                    />
                                    <div className="flex flex-row justify-between text-xl">
                                        <h4 className="font-Gorditas text-[#000000]">Sameer</h4>
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
                </div>
            </div>
        </div>
    );
};

export default FeaturedStore;
