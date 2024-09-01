import React, { useContext, useEffect } from "react";
import styles from "./confirmCart.module.css";

import { Globalinfo } from "../../App";

const ConfirmCart = ({ close, handleCart }) => {
  const { cartData } = useContext(Globalinfo);



  return (
    <>
      <div className={styles.main_div} onClick={(e) => e.stopPropagation()}>
        <h2>
          The selected Product is from Different Store. <br /> If you Preceed Your Old
          Cart will be deleted and <br /> items will move to Your Wishlist.
        </h2>
        <div className={styles.btn_section}>
          <button onClick={() => { close(false); handleCart() }}>Procced</button>
          <button onClick={() => close(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default ConfirmCart;
