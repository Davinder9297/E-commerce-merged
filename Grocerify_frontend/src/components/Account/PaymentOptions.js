import React from "react";
import { Link } from "react-router-dom";

const PaymentOptions = () => {
  return (
    <div className="mt-4 ml-20 mr-20 mb-10 flex flex-col space-y-5 font-Montserrat">
      <div className="flex flex-row text-center">
        <Link to={"/account"} className="font-semibold text-[#848484]">
          Your Account {" >"}
        </Link>
        <p className="bg-light-green ml-2 text-[#55A813]">
          {" "}
          Manage Payment Options
        </p>
      </div>
      <div className="text-3xl text-[#848484] pt-6 pb-4">
        <h1>Your Payment Options</h1>
      </div>

      <div className="flex flex-col pt-6 pl-8 pb-6 rounded-md border space-y-6">
        <div className="flex flex-row space-x-8">
          <p className="text-3xl text-[#848484]">
            Your default purchase preference{" "}
          </p>
          <p className="text-[#55A813] pt-2">Change Preference</p>
        </div>
        <div className="text-[#848484]">
          <div>Address</div>
          <div className="font-semibold leading-5 font-Inter">
            <p>Abhishek sharma</p>
            <p> 3/11 Durga Niwas , Sector 20 </p>
            <p>Chandigarh 173098</p>
          </div>
        </div>
        <div className="flex flex-row text-[#848484] space-x-52">
          <div className="w-1/4">
            <p>Name</p>
            <p className="font-inter font-semibold">Abhishek sharma</p>
          </div>
          <div className="w-1/3">
            <div>Payment Method</div>
            <div className="flex flex-row">
              <img src="../assests/icons/visa.svg" />
              <p className="font-semibold font-Inter pl-2 pt-1">Visa Ending in 116</p>
            </div>
          </div>
          <div className="pl-64">
            <p className="w-full leading-4 text-sm pl-8">
              Use this page to set your preferred payment method, shipping
              address and shipping method.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-6 pl-8 pb-6 rounded-md border space-y-6">
        <div className="flex flex-row space-x-32">
          <p className="text-3xl text-[#848484]">
            Your purchase preference {" "}
          </p>
          <p className="text-[#55A813] pt-2">Set As Default Preference</p>
        </div>
        <div className="text-[#848484]">
          <div>Address</div>
          <div className="font-semibold leading-5 font-Inter">
            <p>Abhishek sharma</p>
            <p> 3/11 Durga Niwas , Sector 20 </p>
            <p>Chandigarh 173098</p>
          </div>
        </div>
        <div className="flex flex-row text-[#848484] space-x-52">
          <div className="w-1/4">
            <p>Name</p>
            <p className="font-inter">Abhishek sharma</p>
          </div>
          <div className="w-1/3">
            <div>Payment Method</div>
            <div className="flex flex-row">
              <img src="../assests/icons/visa.svg" />
              <p className="font-inter pl-2 pt-1">Visa Ending in 116</p>
            </div>
          </div>
          <div className="pl-64">
            <p className="w-full leading-4 text-sm pl-8">
              Use this page to set your preferred payment method, shipping
              address and shipping method.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-2 border rounded-md pl-4 text-[#848484] font-Inter font-semibold">
        <p className=" text-[#E1E1E1] text-5xl pb-2">+</p>
        <p className="pt-4">Add a purchase preference</p>
      </div>

      <div className="space-y-4 pt-24 pl-4">
        <div className="font-Gorditas text-3xl text-[#848484]">Your Browsing History</div>
        <div>
          Carousel
        </div>
      </div>

    </div>
  );
};

export default PaymentOptions;
