import React, { useEffect, useState } from "react";
import shop from "../assets/shop.png";
import { Link } from "react-router-dom";
import { getAllShops } from "../Apis/api";

const SwitchMerchants = () => {
  const [Shops, setShops] = useState();
  const [selectedStore, setSelectedStore] = useState();
  useEffect(() => {
    fetchShop();
  }, []);

  const fetchShop = async () => {
    const res = await getAllShops();
    console.log(res.data.data);

    setShops(res.data.data);
  };

  const handleStore = (e) => {
    console.log(e.target.value);
    setSelectedStore(e.target.value);
  };

  console.log(Shops);
  return (
    <div className="container flex items-center justify-center flex-col">
      <img src={shop} alt="store" className="w-[300px]" />
      <div className="mt-4 flex gap-4 items-center ">
        <label htmlFor="shops" className="text-gray-500">
          Switch Shop
        </label>
        <select
          name="shops"
          id="shop"
          className="bg-white w-[300px] outline-none border border-gray-300 rounded text-gray-500"
          onChange={(e) => handleStore(e)}
        >
          <option value="switchMerchats">Select Shops</option>{" "}
          {/* Closing tag moved here */}
          {Shops?.map((val, ind) => {
            return (
              <option value={val._id} key={ind}>
                {val.shopName}
              </option>
            );
          })}
        </select>
        <Link to={"/runner-dashboard?id=" + selectedStore}>
          <button className="bg-orange-500 hover:bg--700 text-white font-bold py-1 px-4 rounded">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SwitchMerchants;
