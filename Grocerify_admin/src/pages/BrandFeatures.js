import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";



const TextSwitch = (props) => {
  return (
    <div className="grid grid-cols-6">
      <div className="flex aligns-center mt-5 ">
        <span>
          {props.text} <b style={{ color: "red" }}>*</b>
        </span>
      </div>
      <div className="flex aligns-center">
        <ToggleSwitch />
      </div>
    </div>
  );
};

const BrandFeatures = () => {
  const [selectedOption, setSelectedOption] = useState('whatsapp');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container">
      <TextSwitch text={"Review Rating Display"} />
      <TextSwitch text={"Social Login"} />
      <TextSwitch text={"COD"} />
      <TextSwitch text={"Display Distance"} />
      <TextSwitch text={"Display Store Rating"} />
      <TextSwitch text={"Display Preperation Time"} />
      <TextSwitch text={"Display Store Location"} />
      <TextSwitch text={"Image Animation"} />
      <TextSwitch text={"Web Bottom Navigation"} />
      <TextSwitch text={"Product Scroll View"} />

      <div className="flex aligns-center gap-2 flex-col mt-2">
        <p>Display Number On App Home Page <i style={{ fontSize: '12px', marginLeft: '10px' }}>(Leave blank if you don't want to display)</i> </p>
        <div className="flex aligns-center flex-row gap-10">
          <input type="text" className="border border-gray-500 p-2 rounded rounded-lg focus:outline-none" placeholder="Mobile No. or Phone cell" required />
          <div className="mt-2">
            <input
              type="radio"
              id="whatsapp"
              name="cellType"
              value="whatsapp"
              className="w-[15px] h-[15px]"
              checked={selectedOption === 'whatsapp'}
              onChange={() => handleOptionChange('whatsapp')}
            />
            <label className="ml-3 text-gray-100 rounded rounded-lg py-1 px-4 bg-green-600" htmlFor="whatsapp" style={{ backgroundColor: selectedOption === 'whatsapp' ? '#ff4500' : 'green' }}>
              WhatsApp
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="phoneno"
              name="celltype"
              value="phoneno"
              className="w-[15px] h-[15px]"
              checked={selectedOption === 'phoneno'}
              onChange={() => handleOptionChange('phoneno')}
            />
            <label className="ml-3 text-gray-100 rounded rounded-lg py-1 px-4 bg-green-600" htmlFor="phoneno" style={{ backgroundColor : selectedOption === 'phoneno' ? '#ff4500' : 'green' }}>
              Phone Cell
            </label>
          </div>
        </div>
        <p className="text-red-500 font-medium">Note : Please add number with country code</p>
      </div>

      <div className="flex aligns-center gap-20 mt-3">
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
          Save
        </button>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default BrandFeatures;
