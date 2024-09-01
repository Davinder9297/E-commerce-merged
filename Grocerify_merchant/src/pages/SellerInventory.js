import React, { useContext, useEffect, useState } from "react";
import { Menu } from "react-feather";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import axios from "axios";
import { BASE_URL } from "../api/api";
import { cropString } from "../utils/utils";
import { GlobalInfo } from "../App";
import toast, { Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { getSeller } from "../helper/helper";


// make buttons functional
// upload excel file

const SellerInventory = () => {
  const { sellerDetails } = useContext(GlobalInfo)
  console.log(sellerDetails)

  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchOutputData, setSearchOutputData] = useState();
  const [selectedProduct, setSelectedProduct] = useState({})
  const [price, setPrice] = useState(null)
  const [discount, setDiscount] = useState(null)
  const [stock, setStock] = useState(null)
  const [ownerName, setownerName] = useState()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  const handleSearchChange = (e) => {
    // console.log(e.target.value)
    setSearchInput(e.target.value)
  }
  const fetchSearchData = async () => {
    try {
      if (searchInput?.length >= 2) {
        // console.log(searchInput)
        const res = await axios.get(`${BASE_URL}api/products?search=` + searchInput);
        // console.log(res.data);
        setSearchOutputData(res.data)

      }
    } catch (error) {
      console.log(error)



    }
  }

  useEffect(() => {
    fetchSearchData()

  }, [searchInput]);


  const handleSelectData = (product) => {
    // console.log(product)
    setSelectedProduct(product);
    setSearchInput("")
  }

  const handleSaveProduct = async () => {

    if (!price) {
      toast.error('Enter Price')
      return;
    }
    else if (!discount) {
      toast.error("Enter Discount")
    }
    else if (!stock) {
      toast.error("Enter Stock")
    }

    try {
      const res = await axios.post(`${BASE_URL}api/addstoreproducts`,
        {
          email: sellerDetails.OwnerEmail,
          products: [
            {
              "productID": selectedProduct?._id,
              "variants1_mrp_price": price,
              "variants1_discount_per": discount,
              "stock": stock
            },

          ]

        })
      console.log(res);
      if (res.data.success) {
        toast.success('Product Added to Your Shop')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const cancelSelected = () => {
    // toast.error('Product')
    setSearchOutputData();
    setSelectedProduct({})
  }
  useEffect(() => {
    async function Fetchusername(){
      let token=localStorage.getItem('token')
    if(token){
      let decoded=jwtDecode(token)
    const details=await getSeller(decoded)
    setownerName(details?.data?.data?.OwnerName)
    }
    }
    Fetchusername()
  }, [])
  

  return (

    <>
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
          className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 ${isSidebarOpen ? "w-4/5" : "w-full"
            }`}
        >
          {/* Search bar */}
          <SearchBarSeller />

          {/* description */}
          <div className="text-[#333333] space-y-1">
            <p className="text-3xl font-Gorditas font-bold">Hello {ownerName}</p>
            <p className="font-Gorditas ">Upload your Inventory</p>
          </div>

          {/* data cards */}
          <div className=" shadow-md h-fit py-5 px-5">
            <input type="search" name="search" id="" placeholder="Search from Inventory" className="w-[100%] h-12 border px-5" onChange={handleSearchChange} />
            {searchInput.length > 2 && <div className={""}>
              {
                searchOutputData?.map((val, ind) => {
                  return (
                    <>
                      <p className="hover:bg-green-600 py-3 px-3 cursor-pointer" onClick={() => handleSelectData(val)}>{cropString(val.products_title, 277)}</p>
                    </>
                  )
                })
              }
            </div>}
          </div>
          {selectedProduct?._id ? <div className="h-auto w-[100%] shadow-md p-5">
            <ul className="flex flex-col gap-2">
              <li>id : {selectedProduct?._id}</li>
              <li>Title : {selectedProduct?.products_title}</li>
              <li>Description : {selectedProduct?.products_description}</li>
              <li>Brand : {selectedProduct?.brand}</li>
              <li>Category : {selectedProduct?.parent_category_name}</li>
              <li>Sub-Category : {selectedProduct?.sub_category_name}</li>
              <li>Weight : {selectedProduct?.variants1_weight} gm</li>
              <li>
                Price : <input type="number" className="border w-auto px-3 h-8" placeholder="Enter Your Price" onChange={(e) => setPrice(e.target.value)} />
              </li>
              <li>
                Discount : <input type="number" className="border w-auto px-3 h-8" placeholder="Enter Your Discount" onChange={(e) => setDiscount(e.target.value)} />
              </li>
              <li>
                Stock : <input type="number" className="border w-auto px-3 h-8" placeholder="Enter Your Stock" onChange={(e) => setStock(e.target.value)} />
              </li>
            </ul>
            <div className="flex justify-end gap-5 w[100%] ">
              <button className="text-green-400 hover:text-white border border-green-400 hover:bg-green-600 px-8 py-2" onClick={handleSaveProduct}>Save</button>
              <button className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white px-8 py-2" onClick={cancelSelected}> Cancel</button>
            </div>

          </div> : <img src={'/assests/images/inventorybanner.png '} alt="Inventory Usage Details" />}


        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default SellerInventory;
