import React, { useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";

// make buttons functional
// upload excel file

const SellerInventory = () => {
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
  
    // Your logic for handling file upload
    if (selectedFile) {
      console.log("File uploaded:", selectedFile);
      // Add your logic to send the file to the server or perform any necessary actions
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="flex flex-row h-auto">
      {/* side menu */}
      <button
        onClick={toggleSidebar}
        className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
        style={{ height: "30px" }}
      >
        <Menu size={30} />
      </button>
      <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 ${
          isSidebarOpen ? "w-4/5" : "w-full"
        }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="text-[#333333] space-y-1">
          <p className="text-3xl font-Gorditas ">Hello Seller</p>
          <p className="font-Gorditas ">Upload your Inventory</p>
        </div>

        {/* data cards */}
        <div className="flex flex-row justify-between shadow-md">
          <div className="w-1/3">
            <p className="text-[16px] text-[#333333] font-Montserrat pl-4 pr-6 pt-4">
              Please Download store data first before upload the excel file.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4 p-4">
            <button className="text-[14px] text-[#FFFFFF] font-Montserrat bg-[#58B310] w-[210px] h-[44px] rounded-lg">
              Update Product Prices
            </button>
            <button className="text-[14px] text-[#FFFFFF] font-Montserrat bg-[#58B310] w-[210px] h-[44px] rounded-lg">
              Download Store Inventory
            </button>
            <button className="text-[14px] text-[#FFFFFF] font-Montserrat bg-[#F90000] w-[210px] h-[44px] rounded-lg">
              Delete Store Inventory
            </button>
            <button className="text-[14px] text-[#FFFFFF] font-Montserrat bg-[#58B310] w-[210px] h-[44px] rounded-lg">
              Sample Store Inventory
            </button>
            <button className="text-[14px] text-[#FFFFFF] font-Montserrat bg-[#58B310] w-[210px] h-[44px] rounded-lg">
              Upload Store Inventory
            </button>
          </div>
        </div>

        <div className="flex flex-col shadow-md gap-2 pb-4">
          <div className="p-2">
            <p className="text-[#333333] text-[18px] font-Montserrat pt-4">
              Upload Product Excel File
            </p>
          </div>
          <div className="flex flex-row p-2">
            <p className="text-[#333333] text-[14px] font-Montserrat w-1/4">
              Upload Excel
            </p>
            <div className="flex flex-row gap-4">
              <label htmlFor="fileInput" className="cursor-pointer">
                <button className="text-[#333333] text-[14px] font-Montserrat bg-[#D9D9D9] pl-4 pr-4 rounded-md">
                  Choose File
                </button>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <p className="text-[#333333] text-[14px] font-Montserrat">
                {selectedFile ? selectedFile.name : "No File Choosen"}
              </p>
            </div>
            {/* <div className="flex flex-row gap-4">
              <button className="text-[#333333] text-[14px] font-Montserrat bg-[#D9D9D9] pl-4 pr-4 rounded-md">
                Choose File
              </button>
              <p className="text-[#333333] text-[14px] font-Montserrat">
                No File Choosen
              </p>
            </div> */}
          </div>
          <div className="p-2">
            <button onClick={handleUpload} className="text-[#FFFFFF] text-[14px] font-Montserrat bg-[#58B310] rounded-md pt-2 pb-2 pl-8 pr-8">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInventory;
