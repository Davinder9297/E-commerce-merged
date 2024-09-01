import React, { useState, useEffect } from "react";
import logo from '../assets/images/sellerpic.png'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URl } from "../Apis/api"; // Assuming BASE_URl is defined correctly
import { getToken } from "../Apis/api";
import { useSearchParams } from "react-router-dom";

const EditMerchant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id,setId]=useState("");
  const adminToken=getToken();
  

  setId(useSearchParams("id"));
  useEffect(()=>{
    console.log(id);
  },[])
  const initialData={
    OwnerEmail: "",
    password: "",
    OwnerName: "",
    OwnerMobile: 1234, // Assuming 10-digit phone number
    OwnerAddress: "",
    OwnerDOB: new Date().toISOString().slice(0, 10), // Assuming YYYY-MM-DD format
    OwnerProfile: "", // Assuming profile image URL or data
    Aadhar: 12545425, // Assuming Aadhar format matches server expectation
    Pancard: "",
  }
  const [formData, setFormData] = useState({
    OwnerEmail: "",
    password: "",
    OwnerName: "",
    OwnerMobile: 1234, // Assuming 10-digit phone number
    OwnerAddress: "",
    OwnerDOB: new Date().toISOString().slice(0, 10), // Assuming YYYY-MM-DD format
    OwnerProfile: "", // Assuming profile image URL or data
    Aadhar: 12545425, // Assuming Aadhar format matches server expectation
    Pancard: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Add validation logic for each field here (e.g., using yup)
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        console.error("Invalid file type. Please select an image file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        // Assuming server accepts base64 encoded image data
        const imageData = reader.result; // data URL
        setFormData((prevData) => ({
          ...prevData,
          OwnerProfile: imageData,
        }));
      };
      reader.onerror = (error) => {
        console.error("Error reading image file:", error);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  

  
    try {

  
      const response = await axios.put(`${BASE_URl}/updateseller:${id}`, formData, {
        headers: { "Content-Type": "application/json" }, // Set Content-Type header if needed
      });
  
      if (response.status === 201) {
        // Handle successful response (e.g., clear form, show success message)
        console.log("Merchant added successfully:", response.data);
        setFormData(initialData);
        toast.success("Merchant added successfully");
      } else {
        // Handle server-side errors (e.g., display error message from response)
        console.error("Error adding merchant:", response.data);
        const errorMessage = response.data?.message || "Error adding merchant"; // Extract specific error message from response if available
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      // Handle validation errors
      console.error("Validation errors:", error);
      if (error?.inner) {
        // Assuming yup validation errors are returned in an `inner` array
        const validationErrors = error.inner.map((err) => err.message);
        setError(validationErrors.join("\n")); // Combine error messages for display
      } else {
        setError("An error occurred. Please try again."); // Generic error message for non-validation errors
      }
    } finally {
      setLoading(false); 
      setFormData(initialData)
      // Reset loading state regardless of success or failure
    }
  };
  

  return (
    <div>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-md gap-5 w-[60rem] mx-auto border shadow-md py-8 px-20"
      >
        {/* Shop Details */}
        <h1 className="text-3xl text-center rounded-md font-semibold">
          Add Merchant
        </h1>
        <fieldset className="flex flex-col gap-5 shadow-md rounded-md border-2 p-4">
          <legend className="text-gray-500 font-bold">
            Authentication Details
          </legend>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="OwnerEmail">
                Email
              </label>
              <input
                type="email"
                id="OwnerEmail"
                name="OwnerEmail"
                value={formData.OwnerEmail}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col rounded-md gap-4 border-2 shadow-md p-4 ">
          <legend className="font-bold text-gray-500">Owner Details</legend>
          <div className="grid grid-cols-2 gap-5">
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
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="OwnerMobile">
                Owner Number
              </label>
              <input
                type="tel"
                id="OwnerMobile"
                name="OwnerMobile"
                value={formData.OwnerMobile}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="OwnerDOB">
                Date of Birth
              </label>
              <input
                type="date"
                id="OwnerDOB"
                name="OwnerDOB"
                value={formData.OwnerDOB}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="OwnerAddress">
              Owner Address
            </label>
            <textarea
              id="OwnerAddress"
              name="OwnerAddress"
              value={formData.OwnerAddress}
              onChange={handleChange}
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="Aadhar">
                Aadhar Number 
              </label>
              <input
                type="number"
                id="Aadhar"
                name="Aadhar"
                value={formData.Aadhar}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="PanCard">
                PAN Number
              </label>
              <input
                type="text"
                id="PanCard"
                name="PanCard"
                value={formData.PanCard}
                onChange={handleChange}
                className="shadow-md rounded-md focus:outline-none p-2 text-gray-500 "
              />
            </div>
          </div>
          {/* 
          
          
          */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="OwnerProfile">
              Profile Image
            </label>
            <div className="flex  items-center gap-5">

            <img src={formData.OwnerProfile || logo} alt="profile" className="w-[8rem] h-[8rem] object-cover rounded-full" />
            <input
              type="file"
              id="OwnerProfile"
              name="OwnerProfile"
              onChange={handleImageFileChange}
              accept="image/*"
              className="shadow-md rounded-md focus:outline-none p-2 text-gray-500"
            />
            </div>
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

export default EditMerchant;
