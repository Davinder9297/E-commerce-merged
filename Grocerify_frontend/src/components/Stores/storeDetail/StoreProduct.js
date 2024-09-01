import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../Api/api";
import Products from "../../Products/products";
import { useParams } from 'react-router-dom';
import Spinner from "../../Spinner";
import { cropString, isShopOpen } from "../../../helpers/helper_function";
import Cards from "../../Cards/cards";
import ShopCard from "../../Cards/shopCards";

const StoreProduct = () => {
  const params = useParams();
  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchvalue, setSearchValue] = useState('');
  const [shopProducts, setShopProducts] = useState([]);
  // console.log(process.env.BASE_URL)



  const fetchData = async () => {

    try {
      const res = await fetch(`${BASE_URL}api/productsbystore?shop=${params.id}`);
      const response = await res.json();
      console.log(response.shop);
      setShopData(response.shop)
      setShopProducts(response.shop.products);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [params.id])


  useEffect(() => {

    console.log(searchvalue)

    let temp = shopData?.products?.filter((val, ind) => {
      return val.slug.toLowerCase().includes(searchvalue.toLowerCase());

    })
    console.log(temp)
    setShopProducts(temp)
  }, [searchvalue])

  if (!shopData) {
    return (
      <div style={{ position: "fixed", top: "0px", left: "0px", height: "100vh", width: "100%", backgroundColor: "white" }}>
        <Spinner />
      </div>
    )
  }


  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value);

  }





  return (
    <div className="flex flex-row ">

      <div className="flex flex-col gap-4 pt-4 pb-6 pl-8 pr-8 bg-[#F3F3F3] w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2 w-full h-[50vh]">
            <img src={shopData?.shopImages[0]} className="w-3/5 h-full object-cover" />
            <div className="flex flex-col gap-2 w-1/5 h-[100%]">
              <img src={shopData?.shopImages[1]} className="h-[50%]" />
              <img src={shopData?.shopImages[2]} className="h-[50%]" />
            </div>
            <img src={shopData?.shopImages[3]} className="w-1/5" />
          </div>
          <div className="flex flex-col">
            {isShopOpen(shopData?.openingHours?.from, shopData?.openingHours?.to) ? <p className="text-[#000000] text-[40px] font-Gorditas">
              {shopData?.shopName}

            </p> : <><p className="text-[#000000] text-[40px] font-Gorditas">
              {shopData?.shopName}
              <span className="text-red-500 text-[30px]"> (Closed)</span>
            </p> </>}
            <p className="text-[#222222] text-[20px] font-Montserrat w-[400px]">
              {shopData?.ShopAddress}
            </p>
            {/* <p className="text-[#222222] text-[20px] font-Montserrat w-[400px]">
              Sector 7, Chandigarh
            </p> */}
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-[#58B310] text-[14px] font-Montserrat">
              Open at -
            </p>
            <p className="text-[#222222] text-[14px] font-Montserrat">
              {shopData?.openingHours?.from} am - {shopData?.openingHours?.to}pm(Today)
            </p>
          </div>
          {/* <div className="flex flex-row gap-2">
            <button className="flex flex-row items-center bg-[#D9D9D9] font-semibold text-[#000000] text-[14px] font-Montserrat rounded-md pl-2 pr-2 pt-1 pb-1 gap-1">
              {" "}
              <span>
                {" "}
                <img src="../assests/icons/direction.svg" />{" "}
              </span>{" "}
              Direction
            </button>
            <button className="flex flex-row items-center bg-[#D9D9D9] font-semibold text-[#000000] text-[14px] font-Montserrat rounded-md pl-2 pr-2 pt-1 pb-1 gap-1">
              {" "}
              <span>
                {" "}
                <img src="../assests/icons/bookmark.svg" />{" "}
              </span>{" "}
              Bookmark
            </button>
            <button className="flex flex-row items-center bg-[#D9D9D9] font-semibold text-[#000000] text-[14px] font-Montserrat rounded-md pl-2 pr-2 pt-1 pb-1 gap-1">
              {" "}
              <span>
                {" "}
                <img src="../assests/icons/share.svg" />{" "}
              </span>{" "}
              Share
            </button>
          </div> */}
        </div>
        <div>
          {" "}
          <hr className="border border-[#000000] border-[1px]" />{" "}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center">
            <p className="text-[#000000] text-[40px] font-Gorditas">
              Product Online
            </p>
            <div className="flex flex-row rounded-full gap-2 h-[26px] w-[286px] bg-[#58B310] items-center justify-between pl-2 pr-[1px]">
              <img
                src="../assests/icons/searchwhite.svg"
                className="w-[16px] h-[16px]"
              />
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="border border-gray-300 text-[#888888] font-Montserrat text-[16px] px-2 py-1 rounded-tr-full rounded-br-full h-[22px] w-[286px]"
              />
            </div>
          </div>
          {/* <div className="flex flex-row gap-4">
            <div className="w-[200px] bg-[#58B310] text-[#FFFFFF] text-[16px] pl-2 pt-1 pb-1 pr-2 rounded-md font-semibold font-Montserrat">
              30% OFF up to ₹75 use code FEAST
            </div>
            <div className="w-[200px] bg-[#58B310] text-[#FFFFFF] text-[16px] pl-2 pt-1 pb-1 pr-2 rounded-md font-semibold font-Montserrat">
              30% OFF up to ₹75 use code FEAST
            </div>
            <div className="w-[200px] bg-[#58B310] text-[#FFFFFF] text-[16px] pl-2 pt-1 pb-1 pr-2 rounded-md font-semibold font-Montserrat">
              30% OFF up to ₹75 use code FEAST
            </div>
            <div className="w-[200px] bg-[#58B310] text-[#FFFFFF] text-[16px] pl-2 pt-1 pb-1 pr-2 rounded-md font-semibold font-Montserrat">
              30% OFF up to ₹75 use code FEAST
            </div>
          </div> */}
        </div>

        {/* products */}
        {/* <div className="bg-[#FFFFFF] grid grid-cols-4 gap-10 p-8 border"> */}

        <div className="bg-[#FFFFFF] grid grid-cols-5 gap-10 p-8">
          {
            shopProducts?.map((val, ind) => {
              return (
                <>
                  <ShopCard value={val} />

                </>
              )
            })
          }
        </div>



        {/* </div> */}

        {/* ratings */}
        <div className="bg-[#FFFFFF] flex flex-col gap-2">
          <div className="flex flex-row justify-between font-Gorditas text-[#848484] text-lg pt-1 pb-1 pl-10 pr-10 hover:bg-[#58B310] hover:text-[#FFFFFF]">
            <p className="font-Gorditas text-[20px]">Rating</p>
            {/* <p className="font-Gorditas text-[20px]">
              Show More <span className="cursor-pointer">&#9660;</span>
            </p> */}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 hover:bg-[#f3f3f3] space-y-1 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img src="../assests/images/ratingimg1.svg" className="w-full" />
              <div className="flex flex-row justify-between text-xl">
                <h4 className="font-Gorditas text-[#000000]">Nemo Singh</h4>
                <span className="text-[#FFB800]">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
              </div>
              <p className="font-andika text-sm pb-4">
                “As a busy professional, I rely heavily on online shopping for my everyday needs, and this store has become my go-to destination. ”
              </p>
            </div>
            <div className="p-4 hover:bg-[#f3f3f3] space-y-1 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img src="../assests/images/ratingimg2.svg" className="w-full" />
              <div className="flex flex-row justify-between text-xl">
                <h4 className="font-Gorditas text-[#000000]">Anmol Sinha</h4>
                <span className="text-[#FFB800]">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
              </div>
              <p className="font-andika text-sm">
                “ I've been using this online store for a while now, and I'm always impressed with the wide selection of products available. Whether it's groceries, electronics, or household items, they seem to have everything I need. ”
              </p>
            </div>
            <div className="p-4 hover:bg-[#f3f3f3] space-y-1 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <img src="../assests/images/ratingimg3.svg" className="w-full" />
              <div className="flex flex-row justify-between text-xl">
                <h4 className="font-Gorditas text-[#000000]">Naina Sharma</h4>
                <span className="text-[#FFB800]">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
              </div>
              <p className="font-andika text-sm">
                “I recently had an issue with an order I placed, and I was pleasantly surprised by the exceptional customer service I received from this online store.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default StoreProduct;
