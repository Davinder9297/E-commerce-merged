import { useContext, useState } from "react";
import styles from "./bottomNav.module.css";
import { ReactComponent as List } from '../../Assets/Icons/list.svg'
import { ReactComponent as Cart } from '../../Assets/Icons/cart.svg'
import { ReactComponent as Wishlist } from '../../Assets/Icons/wishlist_green.svg'

import { ReactComponent as Home } from '../../Assets/Icons/home.svg'
import { ReactComponent as User } from '../../Assets/Icons/user.svg'

import { ReactComponent as Account } from '../../Assets/Icons/account.svg'

import { useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";

const BottomNav = () => {
  const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)


  const router = useNavigate();



  return (
    <>
      <div className={styles.bottom_nav_main}>
        <div className={styles.icons_fixed}>
          <span onClick={() => router("/")}>
            <Home />
          </span>
          {/* <span onClick={() => router("/products")}>
            <List />
          </span> */}

          {userDetail?._id ? <span onClick={() => router("/cart")}>
            <Cart />
          </span> : <span onClick={() => router("/login")}>
            <Cart />
          </span>}
          {userDetail?._id ? <span onClick={() => router("/account")}>
            <Account />
          </span> : <span onClick={() => router("/login")}>
            <User />
          </span>}
        </div>
      </div>
    </>
  );
};

export default BottomNav;
