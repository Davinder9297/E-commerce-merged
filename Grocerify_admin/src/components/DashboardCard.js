import React from "react";

const DashboardCard = ({ item }) => {
  return (
    <div className="card mt-5 top-35 left-10 rounded-lg lg:w-[350px] h-[8rem] bg-white-100 shadow-lg border cursor-pointer flex pt-8 gap-10">
      <div className="iconside ml-8 bg-gray-100 rounded-full w-[70px] h-[70px] flex justify-center items-center">
        <item.icon className="w-[50px] h-[50px] text-blue-900 rounded-md " />
      </div>
      <div className="title text-sm text-gray-500 uppercase">
        <p>{item.title}</p>
        <span className="amount text-black text-2xl ">
          {item.value}
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
