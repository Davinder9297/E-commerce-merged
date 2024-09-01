import React from "react";

const YourAccount = () => {
  return (
    <div className="pl-20 pr-20 pt-8 pb-14 space-y-12 text-[#848484]">
      <div className="text-3xl font-Gorditas">YOUR ACCOUNT</div>

      <div className="grid grid-cols-3 gap-y-14 gap-x-24">
        <div className="rounded-xl border border-[#D9D9D9] flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:shadow-lg hover:transform hover:scale-105 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/arcticons_parcel-tracker.svg"
              className="w-full p-1"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">Your Order</p>
            <p className="font-Montserrat">Track, return or buy</p>
          </div>
        </div>
        <div className="rounded-xl border border-[#D9D9D9] flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:shadow-lg hover:transform hover:scale-105 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/security.svg"
              className="w-full p-5"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">Login & Security</p>
            <p className="font-Montserrat">Edit login ,name &mobile number</p>
          </div>
        </div>
        <div className="rounded-xl border border-[#D9D9D9] flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:shadow-lg hover:transform hover:scale-105 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/location.svg"
              className="w-full p-5"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">Your Addresses</p>
            <p className="font-Montserrat">
              Edit addresses for order and gifts
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-[#D9D9D9] flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:shadow-lg hover:transform hover:scale-105 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/contact.svg"
              className="w-full p-5"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">Contact Us</p>
            <p className="font-Montserrat"></p>
          </div>
        </div>
        <div className="rounded-xl border border-[#D9D9D9] flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:shadow-lg hover:transform hover:scale-105 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/payment.svg"
              className="w-full p-5"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">Payment option</p>
            <p className="font-Montserrat">Edit or add payment methods</p>
          </div>
        </div>
        <div className="rounded-xl border border-[#D9D9D9] flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:shadow-lg hover:transform hover:scale-105 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/coupon.svg"
              className="w-full p-5"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">COUPON</p>
            <p className="font-Montserrat"></p>
          </div>
        </div>
        <div className="rounded-xl border border-[#D9D9D9] border-dashed border-2 flex flex-row h-full pl-4 pr-4 pt-10 pb-10 hover:cursor-pointer">
          <div className="w-1/2">
            <img
              src="../assests/icons/addstore.svg"
              className="w-full p-5"
            />
          </div>
          <div className="w-full flex flex-col justify-center pl-2">
            <p className="font-Gorditas text-xl">Add Your store</p>
            <p className="font-Montserrat">Become a seller</p>
          </div>
        </div>
      </div>

      <div>
        <hr className="border-t-1 border-[#58B310]" />
      </div>

      <div className="grid grid-cols-3 gap-y-14 gap-x-20">
        <div className="w-full h-[270px] border border-[#848484] rounded-xl p-5 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer">
          <div className="font-Gorditas text-2xl">
            Email alerts , messages& ads
          </div>
          <div className="font-Montserrat flex flex-col gap-y-1">
            <p className="hover:transform hover:scale-105">Communication preference</p>
            <p className="hover:transform hover:scale-105">SMS alert prefereces</p>
            <p className="hover:transform hover:scale-105">Message Centre</p>
            <p className="hover:transform hover:scale-105">Notification</p>
          </div>
        </div>
        <div className="w-full h-[270px] border border-[#848484] rounded-xl p-5 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer">
          <div className="font-Gorditas text-2xl">More options to pay</div>
          <div className="font-Montserrat flex flex-col gap-y-1">
            <p className="hover:transform hover:scale-105">Default Purchase Setting</p>
            <p className="hover:transform hover:scale-105">Coupons</p>
          </div>
        </div>
        <div className="w-full h-[270px] border border-[#848484] rounded-xl p-5 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer">
          <div className="font-Gorditas text-2xl">
            Order & Shopping preference
          </div>
          <div className="font-Montserrat flex flex-col gap-y-1">
            <p className="hover:transform hover:scale-105">Leave packaging feedback</p>
            <p className="hover:transform hover:scale-105">Lists</p>
            <p className="hover:transform hover:scale-105">Manage and save IDs</p>
            <p className="hover:transform hover:scale-105">Profile</p>
          </div>
        </div>
        <div className="w-full h-[270px] border border-[#848484] rounded-xl p-5 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer">
          <div className="font-Gorditas text-2xl">Other accounts</div>
          <div className="font-Montserrat flex flex-col gap-y-1">
            <p className="hover:transform hover:scale-105">Account Linking</p>
            <p className="hover:transform hover:scale-105">Seller account</p>
            <p className="hover:transform hover:scale-105">Login with amazon</p>
          </div>
        </div>
        <div className="w-full h-[270px] border border-[#848484] rounded-xl p-5 flex flex-col gap-y-4 hover:shadow-lg hover:cursor-pointer">
          <div className="font-Gorditas text-2xl">Data & Privacy</div>
          <div className="font-Montserrat flex flex-col gap-y-1">
            <p className="hover:transform hover:scale-105">Request Your Information</p>
            <p className="hover:transform hover:scale-105">Close Your account</p>
            <p className="hover:transform hover:scale-105">Privacy Notice</p>
          </div>
        </div>
      </div>

      <div>
        <hr className="border-t-1 border-[#58B310]" />
      </div>

      <div>
        <div>Your Browsing History</div>
        <div>carousel</div>
      </div>
    </div>
  );
};

export default YourAccount;
