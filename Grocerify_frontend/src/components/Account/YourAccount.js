import React, { useContext } from "react";
import "./YourAccount.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";

const YourAccount = () => {
  const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails, clearCart, clearWishList } = useContext(Globalinfo)

  const navigate = useNavigate();
  const handleLogOut = async () => {
    localStorage.removeItem('GROC_USER_TOKEN')
    navigate('/')

    getUserDetails();
    clearCart();
    clearWishList();


  }

  return (
    <div className="main-div">
      <div className="heading">
        <h1 className="sm:text-[26px] " >YOUR ACCOUNT</h1>
        <button className="log_out" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
      <div className="cards">
        <Link className="w-full" to={'/account/myOrders'}>
          <div className="cd">
            <div className="image">
              <img
                src="../assests/icons/arcticons_parcel-tracker.svg"
                alt="Order"
              />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">Your Order</h5>
              <p className="cd-text">Track, return or buy</p>
            </div>
          </div>
        </Link>
        {/* </Link> */}
        <Link className="w-full" to={'/account/your_information'}>
          <div className="cd">
            <div className="image">
              <img
                src="../assests/icons/material-symbols-light_shield-locked-outline.svg"
                alt="Order"
              />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">Login & Security</h5>
              <p className="cd-text">Edit login, name & mobile number</p>
            </div>
          </div>
        </Link>
        <Link className="w-full" to={'/account/address'}>
          <div className="cd">
            <div className="image">
              <img
                src="../assests/icons/fluent_location-28-regular.svg"
                alt="Order"
              />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">Your Addresses</h5>
              <p className="cd-text">Edit addresses for order and gifts</p>
            </div>
          </div>
        </Link>
        <Link className="w-full" to={'/contact_us'}>
          <div className="cd">
            <div className="image">
              <img src="../assests/icons/contact.svg" alt="Order" />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">Contact Us</h5>
              {/* <p className="cd-text"></p> */}
            </div>
          </div>
        </Link>
        {/* <Link className="w-full" to={'/account/payment'}>
          <div className="cd">
            <div className="image">
              <img src="../assests/icons/Mask group.svg" alt="Order" />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">Payment option</h5>
              <p className="cd-text">Edit or add payment methods</p>
            </div>
          </div>
        </Link> */}
        {/* <Link className="w-full" to={'/account/coupons'}>
          <div className="cd">
            <div className="image">
              <img src="../assests/icons/ph_gift.svg" alt="Order" />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">COUPON</h5>
              
            </div>
          </div>
        </Link> */}
        <Link className="w-full" to={'/shop_registration'}>
          <div className="cd" style={{ border: "2px dashed #d9d9d9" }}>
            <div className="image">
              <img src="../assests/icons/addstore.svg" alt="Order" />
            </div>
            <div className="cd-body">
              <h5 className="cd-title">Become a seller</h5>
              {/* <p className="cd-text"></p> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default YourAccount;