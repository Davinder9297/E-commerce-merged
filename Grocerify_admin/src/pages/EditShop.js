import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URl } from "../Apis/api";
import { useSearchParams } from "react-router-dom";
import { getShopById } from "../Apis/api";

const EditShop = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const [merchant, setMerchant] = useState([]);
  const id = searchParams.get("id");
  console.log(id);
  // Fetch merchants data
  // Set initial formData to an empty object

  const [formData, setFormData] = useState([]);

  // Fetch merchants data

  useEffect(() => {
    setLoading(true);
    const fetchMerchants = async () => {
      try {
        const shops = await getShopById(id);
        console.log(shops.data.shopdata);
        setMerchant(shops.data.shopdata);
        setLoading(false); // Set formData after merchant has been fetched
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };
    fetchMerchants();
  }, []);

  // Ensure useEffect runs again when id changes

  // console.log(merchant);

  useEffect(() => {
    setFormData({
      shopName: merchant?.shopName,
      OwnerEmail: merchant?.OwnerEmail,
      OwnerName: merchant.OwnerName,
      OwnerNumber: merchant.OwnerNumber,
      ShopAddress: merchant.ShopAddress,
      BusinessLicenceNumber: merchant.BusinessLicenceNumber,
      BusinessRegistrationNumber: merchant.BusinessRegistrationNumber,
      TaxIdentificationNumber: merchant.TaxIdentificationNumber,
      TypeOfProductSold: merchant.TypeOfProductSold,
      openingHours: {
        from: merchant?.openingHours?.from,
        to: merchant?.openingHours?.to,
      },
      deliveryInfo: merchant.deliveryInfo,
      workingDays: merchant.workingDays,
      isProvideDeliveryService: merchant.isProvideDeliveryService,
      deliveryArea: merchant.deliveryArea,
      deliveryCharges: merchant.deliveryCharges,
      shop_primary_image_url: merchant.shop_primary_image_url,
      shopImages: merchant.shopImages,
      termsAndCondition: merchant.termsAndCondition,
      privacyPolicy: merchant.privacyPolicy,
      returnPolicy: merchant.returnPolicy,
      refundPolicy: merchant.refundPolicy,
    });
  }, [merchant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpeningHoursChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      openingHours: {
        ...prevData.openingHours,
        [name]: value,
      },
    }));
  };

  const handleDeliveryInfoChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      deliveryInfo: {
        ...prevData.deliveryInfo,
        [name]: checked,
      },
    }));
  };

  const handleImageURLChange = (index, e) => {
    const updatedImages = [...formData.shopImages];
    updatedImages[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      shopImages: updatedImages,
    }));
  };

  const addImageURLField = () => {
    setFormData((prevData) => ({
      ...prevData,
      shopImages: [...prevData.shopImages, ""],
    }));
  };

  const removeImageURL = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      shopImages: prevData.shopImages.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null); // Reset any previous error

    try {
      const response = await axios.post(`${BASE_URl}/addshop`, formData);

      if (response.status !== 201) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Merchant added successfully");
      //       setFormData(initialData);
    } catch (error) {
      console.error("Error adding formData:", error);
      setError(error.message); // Display error message to the user
    } finally {
      setLoading(false);
    }
  };

  //   console.log(formData)

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-md gap-5 w-[60rem] mx-auto border shadow-md p-4"
      >
        {/* Shop Details */}
        <h1 className="text-3xl text-center rounded-md font-semibold">
          Add Merchant
        </h1>
        <fieldset className="flex flex-col gap-5 shadow-md rounded-md border-2 p-4">
          <legend className="text-gray-500 font-bold">Shop Details</legend>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="shopName">
                Shop Name
              </label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                value={formData.shopName}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="TypeOfProductSold">
                Type Of Product
              </label>
              <input
                type="text"
                id="TypeOfProductSold"
                name="TypeOfProductSold"
                value={formData.TypeOfProductSold}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="ShopAddress">
              Shop Address
            </label>
            <textarea
              id="ShopAddress"
              name="ShopAddress"
              value={formData.ShopAddress}
              onChange={handleChange}
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
        </fieldset>

        <fieldset className="grid grid-cols-2 rounded-md gap-4 border-2 shadow-md p-4 ">
          <legend className="font-bold text-gray-500">
            Shop Owner Details
          </legend>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="OwnerName">
              Owner Name
            </label>
            <input
              type="text"
              id="OwnerName"
              name="OwnerName"
              value={formData.OwnerName}
              onChange={handleChange}
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="OwnerNumber">
              Owner Number
            </label>
            <input
              type="tel"
              id="OwnerNumber"
              name="OwnerNumber"
              value={formData.OwnerNumber}
              onChange={handleChange}
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="OwnerEmail">
              Owner Email
            </label>
            <input
              type="email"
              id="OwnerEmail"
              name="OwnerEmail"
              value={formData.OwnerEmail}
              onChange={handleChange}
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="BusinessLicenceNumber">
              Business Licence Number
            </label>
            <input
              type="text"
              id="BusinessLicenceNumber"
              name="BusinessLicenceNumber"
              value={formData.BusinessLicenceNumber}
              onChange={handleChange}
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold"
              htmlFor="BusinessRegistrationNumber"
            >
              Business Registration Number
            </label>
            <input
              type="text"
              id="BusinessRegistrationNumber"
              name="BusinessRegistrationNumber"
              value={formData.BusinessRegistrationNumber}
              onChange={handleChange}
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="TaxIdentificationNumber">
              Tax Identification Number
            </label>
            <input
              type="text"
              id="TaxIdentificationNumber"
              name="TaxIdentificationNumber"
              value={formData.TaxIdentificationNumber}
              onChange={handleChange}
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
        </fieldset>

        {/* Add other fields similarly */}

        {/* Opening Hours */}
        <fieldset className="grid grid-cols-2 gap-5 border-2 rounded-md shadow-lg p-4">
          <legend className="text-gray-500 font-bold ">Opening Hours</legend>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="from">
              From
            </label>
            <input
              type="time"
              id="from"
              name="from"
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.openingHours?.from}
              onChange={handleOpeningHoursChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="to">
              To:
            </label>
            <input
              type="time"
              id="to"
              name="to"
              className="border rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.openingHours?.to}
              onChange={handleOpeningHoursChange}
            />
          </div>
        </fieldset>

        {/* Delivery Info */}
        <fieldset className="flex flex-col gap-3 border-2 p-4 shadow-md justify-between rounded-md ">
          <legend className="font-bold mx-5 text-gray-500">
            Delivery Info
          </legend>
          <div className="flex items-center justify-between gap-4">
            {Object?.entries(formData?.deliveryInfo || {})?.map(
              ([day, value]) => (
                <div key={day} className="flex gap-2 ">
                  <input
                    type="checkbox"
                    id={day}
                    name={day}
                    checked={value}
                    onChange={handleDeliveryInfoChange}
                    className="w-[20px]"
                  />
                  <label className="font-semibold" htmlFor={day}>
                    {day}
                  </label>
                </div>
              )
            )}
          </div>
          <br />
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="workingDays">
              Working days
            </label>
            <input
              type="number"
              id="workingDays"
              name="workingDays"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.workingDays}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <fieldset className="grid grid-flow-col gap-5 border-2 shadow-md rounded-md p-3">
          <legend className="font-bold mx-4 text-gray-500">
            Delivery Details
          </legend>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="isProvideDeliveryService">
              Provide Delivery Service
            </label>
            <select
              name="isProvideDeliveryService"
              id="isProvideDeliveryService"
              value={formData.isProvideDeliveryService}
              className="shadow-md rounded-md focus:outline-none p-2"
              onChange={handleChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          {formData.isProvideDeliveryService && (
            <>
              {" "}
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="deliveryArea">
                  Delivery Area
                </label>
                <input
                  type="text"
                  id="deliveryArea"
                  name="deliveryArea"
                  className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
                  value={formData.deliveryArea}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="deliveryCharges">
                  Delivery Charges
                </label>
                <input
                  type="number"
                  id="deliveryCharges"
                  name="deliveryCharges"
                  className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
                  value={formData.deliveryCharges}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </fieldset>
        <fieldset className="p-4  border-2 shadow-md rounded-md">
          <legend className="flex gap-6 items-center mb-3 text-gray-500 font-bold"></legend>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="shop_primary_image_url">
              Shop Primary Image
            </label>
            <input
              type="text"
              id="shop_primary_image_url"
              name="shop_primary_image_url"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.shop_primary_image_url}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mt-2 gap-4">
              <label
                htmlFor="shopImages"
                className="font-semibold text-gray-600"
              >
                Add Image URL
              </label>
              <button
                type="button"
                className="text-blue-500 text-3xl font-bold"
                onClick={addImageURLField}
              >
                +
              </button>
            </div>
            {/* <div className="grid grid-cols-2 gap-5">
              {Array.isArray(formData?.shopImages) &&
                formData.shopImages.map((url, index) => (
                  <div key={index} className="flex  gap-4 mt-2">
                    <input
                      type="text"
                      value={url}
                      className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
                      onChange={(e) => handleImageURLChange(index, e)}
                      placeholder="Enter Image URL"
                    />
                    <button
                      type="button"
                      className="text-red-500 font-bold text-3xl"
                      onClick={() => removeImageURL(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
            </div> */}
            <div className="grid grid-cols-2 gap-5">
              {formData?.shopImages?.map((url, index) => (
                <div key={index} className="flex items-center gap-4 mt-2">
                  <input
                    type="text"
                    value={url}
                    className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md focus:ring"
                    onChange={(e) => handleImageURLChange(index, e)}
                    placeholder="Enter Image URL"
                  />
                  <button
                    type="button"
                    className="text-red-500 font-bold text-3xl"
                    onClick={() => removeImageURL(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-2 gap-5 border-2 shadow-md rounded-md p-3">
          <legend className="font-bold mx-4 text-gray-500">
            Terms and Condition with Policies
          </legend>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="isProvideDeliveryService">
              Terms And Condition
            </label>
            <input
              type="text"
              id="termsAndCondition"
              name="termsAndCondition"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.termsAndCondition}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="deliveryArea">
              Privacy Policy
            </label>
            <input
              type="text"
              id="privacyPolicy"
              name="privacyPolicy"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.privacyPolicy}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="deliveryCharges">
              Return Policy
            </label>
            <input
              type="text"
              id="returnPolicy"
              name="returnPolicy"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.returnPolicy}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="deliveryCharges">
              Refund Policy
            </label>
            <input
              type="text"
              id="refundPolicy"
              name="refundPolicy"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              value={formData.refundPolicy}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="self-center mt-4 w-[10rem] p-2 rounded border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
        >
          {" "}
          {loading ? (
            <span>
              Submitting... <i className="fa fa-spinner fa-spin"></i>
            </span>
          ) : (
            "Submit"
          )}
        </button>
        {error && toast.error(error)}
      </form>
    </div>
  );
};

export default EditShop;
