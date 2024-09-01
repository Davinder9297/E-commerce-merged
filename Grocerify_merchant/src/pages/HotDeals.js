import React from "react";
import HotDealsCard from "../components/HotDealsCard";
import HotDealsCarousel from "../components/HotDealsCarousel";

const HotDeals = () => {
  return (
    <div className="mt-6 mb-32 ml-20 mr-20 text-[#848484] space-y-5">
      <div className="font-Gorditas text-3xl">Top Categories</div>

      <div className="flex flex-row justify-around">
        <img src="../assests/images/vegetable.svg" className="hover:scale-105 transition-all duration-300" />
        <img src="../assests/images/phone.svg" className="hover:scale-105 transition-all duration-300" />
        <img src="../assests/images/lipstick.svg" className="hover:scale-105 transition-all duration-300" />
        <img src="../assests/images/lamp.svg" className="hover:scale-105 transition-all duration-300" />
        <img src="../assests/images/icecream.svg" className="hover:scale-105 transition-all duration-300" />
        <img src="../assests/images/food.svg" className="hover:scale-105 transition-all duration-300" />
        <img src="../assests/images/clothes.svg" className="hover:scale-105 transition-all duration-300" />
      </div>

      <HotDealsCarousel />

      <div className="font-Gorditas text-3xl pt-6 pb-4">Hot Deals</div>

      <HotDealsCard />

      <div className="flex flex-row justify-between pt-16">
        <div className="relative w-[850px]">
          <img src="../assests/images/grading.svg" className="w-full" />
          <img
            src="../assests/images/Gadget-PNG-Pic.svg"
            className="absolute top-14 right-0"
          />
          <p className="absolute top-20 left-4 text-[#FFFFFF] font-Gorditas text-3xl w-1/2">Lowest price of the year on electrronics</p>
          <p className="absolute top-40 left-4 text-[#FFFFFF] font-Gorditas text-xl">Upto 50% off</p>
          <button className="absolute top-52 left-4 pl-5 pr-5 rounded-md font-semibold text-[#333333] bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#55A813]">Add to Cart</button>
        </div>
        <div className="relative w-[430px]">
          <p className="absolute top-32 right-0 font-Gorditas text-2xl w-1/2">
            Best Beauty Deals For You
          </p>
          <img src="../assests/images/beautydeals.svg" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
