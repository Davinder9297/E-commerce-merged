// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { BASE_URl, getAllShops } from "../Apis/api";
// // import AllShopModels from "./AllShopModals";
// import logo from '../assets/images/sellerpic.png'
// const AddMerchant = () => {
// //   const [ShopDetails, setShopDetails] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
// //   const [selectedShopFromModal, setSelectedShopFromModal] = useState("");
// //   const [selectedModal, setSelectedModal] = useState("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
//   const initialData = {
//     // Shop: "",
//     OwnerEmail: "",
//     password: "",
//     OwnerName: "",
//     OwnerMobile: 24841522548,
//     OwnerAddress: "",
//     OwnerDOB: "",
//     OwnerProfile: "",
//     Aadhar: 125454258,
//     Pancard: "",
//   };
//   const [formData, setFormData] = useState(initialData);
// //   const fetchShopDetails = async () => {
// //     const response = await getAllShops();
// //     console.log(response.data.data);
// //     setShopDetails(response.data.data);
// //   };

// //   useEffect(() => {
// //     fetchShopDetails();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     console.log(e);
// //     console.log("Input changed:", e.target.name, e.target.value);
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //     // Display the alert with the input name and value
// //     window.alert(`Input changed: ${e.target.name}, ${e.target.value}`);
// //     // Close the modal
// //     setIsModalOpen(false);
// //   };

// //   useEffect(() => {
// //     setFormData({
// //       ...formData,
// //       Shop: selectedShopFromModal,
// //     });
// //   }, [selectedShopFromModal]);

// //   console.log(selectedShopFromModal);

// //   const openModal = () => {
// //     setIsModalOpen(true);
// //   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         // After the file is loaded, you can get the data URL
//         const imageURL = reader.result;
//         setFormData((prevData) => ({
//           ...prevData,
//           OwnerProfile: imageURL,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(null); // Reset any previous error

//     try {
//       const response = await axios.post(`${BASE_URl}/registerseller`, formData);

//       if (response.status !== 201) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       toast.success("Merchant added successfully");
//       setFormData(initialData);
//     } catch (error) {
//       console.error("Error adding formData:", error);
//       setError(error.message); // Display error message to the user
//     } finally {
//       setLoading(false);
//     }
//   };
import React, { useState, useEffect } from "react";
import logo from '../assets/images/sellerpic.png'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URl } from "../Apis/api"; // Assuming BASE_URl is defined correctly
import * as yup from 'yup';

const AddMerchant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const initialData={
    OwnerEmail: "",
    password: "",
    OwnerName: "",
    OwnerMobile: null, // Assuming 10-digit phone number
    OwnerAddress: "",
    OwnerDOB: new Date().toISOString().slice(0, 10), // Assuming YYYY-MM-DD format
    OwnerProfile: "", // Assuming profile image URL or data
    Aadhar: null, // Assuming Aadhar format matches server expectation
    Pancard: "",
  }
  const [formData, setFormData] = useState(initialData);

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
  
    // **Client-side Validation (using example with yup):**
  // Install yup if you haven't already
  
    const schema = yup.object().shape({
      OwnerEmail: yup.string().email("Invalid email address").required("Email is required"),
      password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
      OwnerName: yup.string().required("Name is required"),
      OwnerMobile: yup.string().matches(/^\d{10}$/, "Invalid phone number (10 digits)"), // Assuming 10-digit phone number format
      OwnerAddress: yup.string().required("Address is required"),
      // Add validation for other fields as needed (e.g., Aadhar format)
    });
  
    try {
      await schema.validate(formData, { abortEarly: false }); // Validate all fields at once, returning an array of errors if any
  
      // If validation passes, proceed with the API request
      setLoading(true); // Set loading state to indicate submission in progress
      setError(null); // Clear any previous errors
  
      const response = await axios.post(`${BASE_URl}/registerseller`, formData, {
        headers: { "Content-Type": "application/json" }, // Set Content-Type header if needed
      });
  
      if (response.status === 201) {
        // Handle successful response (e.g., clear form, show success message)
        console.log("Merchant added successfully:", response.data);
        setFormData({
          OwnerEmail: "",
          password: "",
          OwnerName: "",
          OwnerMobile: 24841522548,
          OwnerAddress: "",
          OwnerDOB: new Date().toISOString().slice(0, 10),
          OwnerProfile: "",
          Aadhar: 125454258,
          Pancard: "",
        });
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
      setLoading(false); // Reset loading state regardless of success or failure
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
        {/* <div>
          {isModalOpen && (
            <AllShopModels
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              ShopDetails={ShopDetails}
              setSelectedShopFromModal={setSelectedShopFromModal}
              type={selectedModal}
            />
          )}
        </div> */}

        {/* <fieldset className="grid grid-cols-2 rounded-md gap-4 border-2 shadow-md p-4 ">
          <legend className="text-gray-500 font-bold">Shop Details</legend>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="Shop">
              Shop Id
            </label>

            <div className="flex gap-3 items-center">
              <input
                type="text"
                name="Shop"
                id="Shop"
                value={selectedShopFromModal}
                onChange={(e) => handleInputChange(e)}
                placeholder="d867567s6756s7cbjh"
                disabled
                className="p-2 outline-none bg-none shadow-md w-full"
              />

              <div
                className="p-2.5 m-2 hover:bg-blue-500   rounded-md shadow-md border-2"
              >
                <button
                  className=" text-black rounded-md hover:text-white hover:font-semibold "
                  onClick={() => {
                    openModal();
                    setSelectedModal("instructor");
                  }}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
        </fieldset> */}

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

export default AddMerchant;
