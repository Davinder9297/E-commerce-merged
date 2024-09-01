import React from "react";

const BilingDetails = () => {
  return (
    <div className="flex flex-row mt-6 ml-52 mr-44 mb-6 text-[#848484]">
      <div className="w-1/2 pt-4 pb-4 pl-16 pr-28 space-y-6">
        <div className="font-Gorditas text-2xl">Billing Details</div>

        <div className="font-Montserrat space-y-3">
          <div>
            <p className="text-sm">Username</p>
            <input
              type="text"
              placeholder=" "
              className="border border-[#D9D9D9] p-1 w-full"
            />
          </div>
          <div>
            <p className="text-sm">Email address</p>
            <input
              type="text"
              placeholder=" "
              className="border border-[#D9D9D9] p-1 w-full"
            />
          </div>
          <div>
            <p className="text-sm">Country</p>
            <input
              type="text"
              placeholder=" "
              className="border border-[#D9D9D9] p-1 w-full"
            />
          </div>
          <div className="flex flex-row space-x-6">
            <div>
              {" "}
              <p className="text-sm">State/Country</p>
              <input
                type="text"
                placeholder=" "
                className="border border-[#D9D9D9] p-1 w-full"
              />
            </div>
            <div>
              {" "}
              <p className="text-sm">Postal Code</p>
              <input
                type="text"
                placeholder=" "
                className="border border-[#D9D9D9] p-1 w-full"
              />
            </div>
          </div>
        </div>

        <div className="font-Gorditas text-2xl pt-6">Payment Method</div>

        <div className="space-y-4 font-Montserrat">
          <div className="position-relative">
            <input
              type="text"
              placeholder="Credit card"
              className="border border-[#D9D9D9] pl-6 pr-1 pt-2 pb-2 w-full bg-no-repeat bg-right"
              style={{
                backgroundImage:
                  'url("../assests/icons/Visa.svg"), url("../assests/icons/Creditcard.svg"), url("../assests/icons/Ellipse.svg")',
                backgroundPosition:
                  "right 40px top 50%, right 4px top 50%, left 6px top 50%",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Card Number"
              className="border border-[#D9D9D9] p-2 w-full"
            />
          </div>
          <div className="flex flex-row space-x-2">
            <div>
              <p className="text-sm">Expiration date</p>
              <input
                type="text"
                placeholder="Month"
                className="border border-[#D9D9D9] p-2 w-full bg-no-repeat bg-right"
                style={{
                  backgroundImage: 'url("../assests/icons/drop-down.svg")',
                  backgroundPosition: "right 6px top 50%",
                }}
              />
            </div>
            <div className="pt-5">
              <input
                type="text"
                placeholder="Year"
                className="border border-[#D9D9D9] p-2 w-full bg-no-repeat bg-right"
                style={{
                  backgroundImage: 'url("../assests/icons/drop-down.svg")',
                  backgroundPosition: "right 6px top 50%",
                }}
              />
            </div>
            <div>
              <p className="text-sm">CV Number</p>
              <input
                type="text"
                placeholder=""
                className="border border-[#D9D9D9] p-2 w-full"
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="UPI"
              className="border border-[#D9D9D9] pl-6 pr-1 pt-2 pb-2 w-full bg-no-repeat bg-right"
              style={{
                backgroundImage: 'url("../assests/icons/Ellipse.svg")',
                backgroundPosition: "left 6px top 50%",
              }}
            />
          </div>

          <div className="text-[12px] text-center pt-1">
            by clicking the button , you agree to terms & condition
          </div>

          <div>
            <button className="text-center text-white bg-[#58B310] w-full border border-[#D9D9D9] p-2">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <img src="../assests/images/biling2.png" className="w-[550px] mt-6" />
      </div>
    </div>
  );
};

export default BilingDetails;
