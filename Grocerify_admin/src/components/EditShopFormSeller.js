import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditShopFormSeller = ({ onClose }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFileChange = (e) => {
    // Handle file change and update the state
    const file = e.target.files[0];

    // Set the image preview for visual verification
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }

    setProfileImage(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission (update seller profile)

    // Assuming you have an updateProfile function to handle the update
    try {
      // Call the function to update the profile
      // await updateProfile(formData); // Replace with your actual logic
      console.log("Profile updated successfully!");
      // Close the form after successful update
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className={`flex flex-col gap-8 pl-10 pr-10 pt-10 pb-10 ${
        isHovered ? "overflow-auto" : "overflow-hidden"
      }`}
      style={{ maxHeight: "600px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-row gap-4 text-2xl font-Gorditas items-center text-[#333333]">
        {" "}
        <Link to="/sellersettingsshop" className="text-3xl" onClick={onClose}>
          {" "}
          {" < "}{" "}
        </Link>
        EDIT DETAILS
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-10 pl-10 pr-10"
      >
        <div className="flex flex-row justify-between gap-20">
          {/* Edit data fields */}
          <div className="flex flex-col space-y-4 ">
            {/* Shop Name */}
            <div className="flex flex-col">
              <label htmlFor="shopName" className="text-[#979797] text-[18px]">
                Shop Name
              </label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label htmlFor="address" className="text-[#979797] text-[18px]">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label htmlFor="state" className="text-[#979797] text-[18px]">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label htmlFor="city" className="text-[#979797] text-[18px]">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            {/* Shop Services */}
            <div className="flex flex-col">
              <label htmlFor="shopServices" className="text-[#979797] text-[18px]">
                Shop Services
              </label>
              <input
                type="text"
                id="shopServices"
                name="shopServices"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="shopServices" className="text-[#979797] text-[18px]">
                Description
              </label>
              <input
                type="text"
                id="shopServices"
                name="shopServices"
                // Add value and onChange for controlled input
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            {/* Additional fields can be added similarly */}


            <div className="flex flex-col">
              <label htmlFor="profileImage" className="text-[#979797] text-[18px]">
                Profile Image
              </label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="profileImage" className="text-[#979797] text-[18px]">
                Shop Banner
              </label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
                className="border border-gray-300 p-1 rounded-md"
              />
            </div>

          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-[#58B310] text-white p-2 rounded-md cursor-pointer w-[200px]"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  )
}

export default EditShopFormSeller