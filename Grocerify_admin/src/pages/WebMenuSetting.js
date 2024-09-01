import React from "react";
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

const WebMenuSetting = () => {
  return (
    <div className="container">
      <TextSwitch text={"Home"}/>
      <TextSwitch text={"Latest Offers"}/>
      <TextSwitch text={"Partners"}/>
      <TextSwitch text={"About"}/>
      <TextSwitch text={"Contact"}/>

      <button className="bg-orange-500 hover:bg-orange-700 text-white p-2 font-bold rounded">
        Button
      </button>
    </div>
  );
};

export default WebMenuSetting;