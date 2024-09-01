import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/shopregister.module.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// import { BASE_URL_PRODUCTS } from "../../Api/api";
import CircularProgress from "@mui/joy/CircularProgress";

const ShopRegistration = () => {
  /* ed-o-neil-AvvdZlhDowA-unsplash 1 */

  const [btnLoader, setBtnLoader] = useState(false);
  const [shopDetails, setShopDetails] = useState({
    shopName: "",
    OwnerName: "",
    OwnerNumber: 12342567,
    OwnerEmail: "",
    OwnerAdd: "",
    BusinessLicenceNumber: "",
    BusinessRegistrationNumber: "",
    TaxIdentificationNumber: "",
    TypeOfProductSold: "",
    openingHours: {
      from: "10:00",
      to: "3:00",
    },
    workingDays: 7,
    deliveryInfo: {
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: false,
      sun: false,
    },
    isProvideDeliveryService: false,
    deliveryArea: "",
    deliveryCharges: 200,
    paymentType: "cod",
    shopImage:
      "https://img.restaurantguru.com/w312/h280/r9f6-Sahil-Chicken-Centre-interior.jpg",
    termsAndCondition: "",
    privacyPolicy: "",
    returnPolicy: "",
    refundPolicy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopDetails({
      ...shopDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setBtnLoader(true);

    console.log(shopDetails);

    if (
      shopDetails.shopName === "" ||
      shopDetails.OwnerName === "" ||
      shopDetails.OwnerNumber === "" ||
      shopDetails.OwnerEmail === "" ||
      shopDetails.OwnerAdd === "" ||
      shopDetails.BusinessLicenceNumber === "" ||
      shopDetails.BusinessRegistrationNumber === "" ||
      shopDetails.TaxIdentificationNumber === "" ||
      shopDetails.TypeOfProductSold === "" ||
      shopDetails.deliveryArea === "" ||
      shopDetails.deliveryCharges === "" ||
      shopDetails.shopImage === "" ||
      shopDetails.termsAndCondition === "" ||
      shopDetails.privacyPolicy === "" ||
      shopDetails.returnPolicy === "" ||
      shopDetails.refundPolicy === ""
    ) {
      toast.error("Enter valid Credentials");
      setBtnLoader(false);
    } else {
      try {
        const res = await axios.post(`/api/addshop`, {
          ...shopDetails,
        });
        const response = res.json();
        console.log(response);
        toast.success("Shop Registered Successfully");
        setBtnLoader(false);
      } catch (error) {
        console.log(error);
        toast.error("Some Error Occured");
        setBtnLoader(false);
      }
    }
  };

  return (
    <>
      <div>
        <div className={styles.shop_register_main}>
          <div className={styles.bg_image}>
            <img src="../assests/images/registration.png" alt="not found" />
          </div>
          <div className={styles.form_main}>
            <div className={styles.form_top}>
              <Link to={"/"} className="pl-4 text-3xl text-[#58B310]"> {" < "} </Link>
              <h2>SHOP REGISTRATION FORM</h2>
            </div>
            <div className="">
            <div className={styles.scrollable_form}>
              <span className={styles.inputs}>
                <div>
                  <span>
                    <p>Shop Name</p>
                    <input
                      type="text"
                      name="shopName"
                      value={shopDetails.shopName}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Owner/Manager Name</p>
                    <input
                      type="text"
                      name="OwnerName"
                      value={shopDetails.OwnerName}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Owner/Manager Contact Number</p>
                    <input
                      type="text"
                      name="OwnerNumber"
                      value={shopDetails.OwnerNumber}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Owner/manager Email Address</p>
                    <input
                      type="text"
                      name="OwnerEmail"
                      value={shopDetails.OwnerEmail}
                      onChange={handleChange}
                    />
                  </span>

                  <span>
                    <p>Owner/manager Physical Address</p>
                    <input
                      type="text"
                      name="OwnerAdd"
                      value={shopDetails.OwnerAdd}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div>
                  <h4> Business Registration Form </h4>

                  <span>
                    <p>Business Licence/Permit Number</p>
                    <input
                      type="text"
                      name="BusinessLicenceNumber"
                      value={shopDetails.BusinessLicenceNumber}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Business Registration Number</p>
                    <input
                      type="text"
                      name="BusinessRegistrationNumber"
                      value={shopDetails.BusinessRegistrationNumber}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Tax Identification Number</p>
                    <input
                      type="text"
                      name="TaxIdentificationNumber"
                      value={shopDetails.TaxIdentificationNumber}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div>
                  <h4>Product Information </h4>
                  <span>
                    <p>Types OF Product Sold</p>
                    <input
                      type="text"
                      name="TypeOfProductSold"
                      value={shopDetails.TypeOfProductSold}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Opening Hours</p>
                    <input
                      type="text"
                      name="openingHours"
                      value={shopDetails.openingHours}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Working Days</p>
                    <input
                      type="text"
                      name="workingDays"
                      value={shopDetails.workingDays}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div className={styles.deliery_info}>
                  <p>Delivery Information(If Applicable)</p>
                  <div className={styles.checkbox_div}>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Monday"} />
                         <p>Monday</p>
                    </span>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Tuesday"} />
                      <p>Tuesday</p>
                    </span>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Wednesday"} />
                      <p>Wednesday</p>
                    </span>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Thursday"} />
                      <p>Thursday</p>
                    </span>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Friday"} />
                      <p>Friday</p>
                    </span>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Saturday"} />
                      <p>Saturday</p>
                    </span>
                    <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                      <input type="checkbox"value={"Sunday"} />
                      <p>Sunday</p>
                    </span>
                  </div>
                </div>
                <div className={styles.delivery_service}>
                  <p>Do you provide delivery services</p>

                  <div className={styles.d_service}>
                    <span>
                      <input type="radio" name="" id="" />
                      <h5>Yes</h5>
                    </span>
                    <span>
                      <input type="radio" name="" id="" />
                      <h5>No</h5>
                    </span>
                  </div>
                </div>
                <span>
                  <p>Delivery Areas</p>
                  <input
                    type="text"
                    name="deliveryArea"
                    value={shopDetails.deliveryArea}
                    onChange={handleChange}
                  />
                </span>

                <span>
                  <p>Delivery Charges</p>
                  <input
                    type="text"
                    name="deliveryCharges"
                    value={shopDetails.deliveryCharges}
                    onChange={handleChange}
                  />
                </span>
                <div className={styles.payment_method}>
                  <p>Payment Methods Accepted</p>
                  <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                    <input type="checkbox"value={"Cash"} />
                    <p>Cash</p>
                  </span>
                  <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                    <input type="checkbox"value={"Online Payment"} />
                    <p>Online Payment</p>
                  </span>
                  <span style={{ position: "relative", display:"flex",gap:"8px" }}>
                    <input type="checkbox"value={"Credit/Debit Card"} />
                    <p>Credit/Debit Card</p>
                  </span>
                </div>

                <div>
                  <span>
                    <p>Shop Logo or Image Option (Upload Option)</p>
                    <input
                      type="text"
                      name="shopImage"
                      value={shopDetails.shopImage}
                      onChange={handleChange}
                    />
                  </span>
                </div>

                <span>
                  <span>
                    <p>Terms and Condition</p>
                    <textarea
                      type="text"
                      name="termsAndCondition"
                      rows={5}
                      cols={50}
                      value={shopDetails.termsAndCondition}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Privacy Policy</p>
                    <textarea
                      type="text"
                      name="privacyPolicy"
                      rows={5}
                      cols={50}
                      value={shopDetails.privacyPolicy}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Refund Policy</p>
                    <textarea
                      type="text"
                      name="refundPolicy"
                      rows={5}
                      cols={50}
                      value={shopDetails.refundPolicy}
                      onChange={handleChange}
                    />
                  </span>
                  <span>
                    <p>Return Policy</p>
                    <textarea
                      type="text"
                      name="returnPolicy"
                      rows={5}
                      cols={50}
                      value={shopDetails.returnPolicy}
                      onChange={handleChange}
                    />
                  </span>
                </span>
              </span>
              <div className={styles.submit}>
                <button onClick={handleSubmit}>
                  {btnLoader ? (
                    <CircularProgress size="sm" color="success" />
                  ) : (
                    "Register Shop"
                  )}
                </button>
              </div>
            </div></div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default ShopRegistration;
