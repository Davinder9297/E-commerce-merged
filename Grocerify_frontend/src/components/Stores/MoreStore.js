import React from "react";


const MoreStore = () => {
  return (
    <div className="flex flex-row gap-x-8 pt-8 pb-8 pl-14 pr-14 font-Gorditas bg-[#F3F3F3]">
      <div className="w-1/4">
        CA
      </div>

      <div className="w-3/4 space-y-6">
        <div className="bg-[#EDF1E0] relative">
          <img
            src="../assests/images/ordernowleft.svg"
            className=" h-[450px]"
          />
          <img
            src="../assests/images/ordernowgp.svg"
            className="w-full h-[450px] absolute top-0"
          />
          <button className="absolute font-Montserrat bottom-5 left-[470px] bg-[#58B310] text-[#FFFFFF] rounded-2xl pt-1 pb-1 pr-4 pl-4 hover:bg-[#FFFFFF] hover:text-[#58B310] hover:text-bold hover:transition-all hover:scale-105">
            ORDER NOW
          </button>
        </div>

        <div className="bg-[#FFFFFF]">
          <div className="text-xl pt-1 pb-1 pl-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
            {" "}
            <p className=" font-Gorditas text-[#848484]">STORES IN <span className="text-[#222222]">1KM </span>{" "}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            <div className="relative group">
              <img
                src="../assests/images/chandigarhstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] font-Gorditas text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/ramgrocery.png"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] font-Gorditas text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] font-Gorditas text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                WOODEN LIFE STORE
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/shoestore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] font-Gorditas text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                SHOSE store
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/sonustore.png"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] font-Gorditas text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
                Sonu General Store
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] font-Gorditas text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>
          </div>
        </div>

        <div className="relative group">
          <img
            src="../assests/images/storeimg.svg"
            alt="what's new"
            className="w-full group-hover:brightness-50 group-hover:blur-0 transition-all duration-300"
          />
          <div className="absolute bottom-10 right-10 w-1/2 text-right space-y-1 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <p className="text-[44px] text-[#FFFFFF] leading-10">
              NEW FASHION STORE FOR GIRLS
            </p>
            <p className="font-Montserrat text-[#FFFFFF] text-[22px]">
              SAVE UPTO 40% OFF
            </p>
          </div>
        </div>

        <div className="bg-[#FFFFFF]">
          <div className="text-xl pt-1 pb-1 pl-10 font-Gorditas text-[#848484] hover:bg-[#58B310] hover:text-[#FFFFFF]">
            {" "}
            STORES IN <span className="text-[#222222]">2KM </span>{" "}
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>
          </div>
        </div>
        <div className="relative group">
          <img
            src="../assests/images/storeimg.svg"
            alt="what's new"
            className="w-full group-hover:brightness-50 group-hover:blur-0 transition-all duration-300"
          />
          <div className="absolute bottom-10 right-10 w-1/2 text-right space-y-1 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <p className="text-[44px] text-[#FFFFFF] leading-10">
              NEW FASHION STORE FOR GIRLS
            </p>
            <p className="font-Montserrat text-[#FFFFFF] text-[22px]">
              SAVE UPTO 40% OFF
            </p>
          </div>
        </div>
        <div className="bg-[#FFFFFF]">
          <div className="text-xl pt-1 pb-1 pl-10 font-Gorditas text-[#848484] hover:bg-[#58B310] hover:text-[#FFFFFF]">
            {" "}
            STORES IN <span className="text-[#222222]">10KM </span>{" "}
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>

            <div className="relative group">
              <img
                src="../assests/images/woodenstore.svg"
                className="w-full group-hover:brightness-50 transition-all duration-300"
              />
              <p className="text-[#FFFFFF] text-5xl text-center absolute top-32 left-0 w-full group-hover:text-[40px] transition-all duration-300">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreStore;
