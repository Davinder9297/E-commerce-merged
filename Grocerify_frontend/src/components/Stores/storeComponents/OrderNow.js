import React from "react";
import { MoreStore } from "../MoreStore";
import { Link } from "react-router-dom";
import "../FeaturedStore.css";

const OrderNow = () => {
  return (
    <div className="order-now">
      <img src="../assets/Images/ordernow.svg" />
      <Link to={"/morestore"} >
        <button className="order-now-btn">ORDER NOW</button></Link>
    </div>
  );
};

export default OrderNow;
