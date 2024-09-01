import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="m-16 flex flex-col space-y-8 font-Montserrat">
      <div className="flex flex-row text-center">
        <Link to={"/account"} className="font-semibold ml-20 pl-36 text-[#333333]">
          Your Account {" >"}
        </Link>
        <p className="bg-light-green ml-2 text-[#55A813]">Contact Us</p>
      </div>

      <div>
        <h1 className="font-bold text-3xl text-center text-[#333333]">
          Want to chat now or get a call from us?
        </h1>
      </div>

      <div className="flex flex-row justify-center item-center space-x-4 ">
        <div className="flex flex-row w-96 h-full p-2 shadow-md rounded-md">
          <div className="w-1/2 mt-8 pr-2">
            <img src="../assests/icons/tabler_messages.svg" />
          </div>
          <div className="pt-2 pb-2 pr-2 pl-4 leading-5">
            <p className="font-bold text-lg text-[#333333]">Chat right now</p>
            <p style={{ color: "#848484" }}>
              Our messaging assistant can quickly solve many issues or direct
              you to the right person or place.
            </p>
            <p className="font-semibold text-[#848484]">
              Instant chat and always available.
            </p>
            <button
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              className="text-center mt-6 font-semibold ml-24 shadow-md rounded-md pt-1 pb-1 pl-2 pr-2 hover:bg-[#58B310] hover:text-white transition-all duration-300 text-[#848484]"
            >
              <Link to={"https://wa.me/qr/S3LVDB3Y3SB3H1"}>Start Chatting</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-row w-96 p-2 shadow-md rounded-md">
          <div className="w-1/2 mt-8 pr-2">
            <img src="../assests/icons/fluent_call-20-regular.svg" />
          </div>
          <div className="pt-2 pb-2 pr-2 pl-2 leading-5">
            <p className="font-bold text-lg text-[#333333]">Have us call you</p>
            <p className="text-[#848484]">
              We'll first get a few details about your issue and then someone
              will call you right away.
            </p>
            <button
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              className="text-center mt-20 font-semibold ml-24 shadow-md rounded-md p-1 w-2/5 hover:bg-[#58B310] hover:text-white transition-all duration-300 text-[#848484]"
            >
              <Link to={"tel:77177667030"}>Call Me</Link>
            </button>
          </div>
        </div>
      </div>



      {/* <div className="flex flex-row font-semibold justify-center item-center space-x-24">
        <div className="items-baseline text-center justify-center item-center">
          <img
            src="../assests/icons/arcticons_parcel-tracker.svg"
            className="ml-6"
          />
          <Link
            to={"/"}
            className="text-[#333333] hover:text-red hover:underline transition-all"
            style={{ color: "#333333" }}
            onMouseOver={(e) => (e.target.style.color = "red")}
            onMouseOut={(e) => (e.target.style.color = "#333333")}
          >
            Check on an Order
          </Link>
        </div>
        <div className="items-baseline text-center justify-center item-center">
          <img
            src="../assests/icons/ph_devices-thin.svg"
            className="ml-16 mt-2"
          />
          <Link
            to={"/"}
            className="text-[#333333] hover:text-red hover:underline transition-all"
            style={{ color: "#333333" }}
            onMouseOver={(e) => (e.target.style.color = "red")}
            onMouseOut={(e) => (e.target.style.color = "#333333")}
          >
            Manage Content & Devices
          </Link>
        </div>
        <div className="items-baseline text-center justify-center item-center">
          <img src="../assests/icons/payment.svg" className="ml-12 mt-4" />
          <Link
            to={"/"}
            className="text-[#333333] hover:text-red hover:underline transition-all"
            style={{ color: "#333333" }}
            onMouseOver={(e) => (e.target.style.color = "red")}
            onMouseOut={(e) => (e.target.style.color = "#333333")}
          >
            Update Payment Info
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;
