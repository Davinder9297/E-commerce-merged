import React, { useState, useEffect, useContext } from "react";
import { Menu } from "react-feather";
import axios from "axios";
import SideMenuSeller from "../components/SideMenuSeller";
import SearchBarSeller from "../components/SearchBarSeller";
import { cropString } from "../utils/utils";
import { BASE_URL } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalInfo } from "../App";
import ToggleButton from 'react-toggle-button'
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { getSeller } from "../helper/helper";

const SellerProduct = () => {
  const { sellerDetails } = useContext(GlobalInfo)
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState("");
  const [products, setProducts] = useState([]);
  const [toggleStates, setToggleStates] = useState({}); // State to manage toggle states for each product
  const [ownerName, setownerName] = useState()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}api/productsbystore`,
        {
          params: {
            shop: sellerDetails?.Shop?._id,
          },
        }
      );
      console.log(response);
      const productsData = response?.data?.shop?.products?.map(product => ({
        ...product,
        toggle: product?.isVisible // Add a toggle property to each product
      }));
      // Set the initial toggle state based on the isVisible parameter
      const initialToggleStates = productsData.reduce((acc, product) => {
        acc[product._id] = product.toggle;
        return acc;
      }, {});
      console.log(initialToggleStates);
      setToggleStates(initialToggleStates);
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (sellerDetails?.Shop?._id) {
      fetchProducts();
    }
  }, [sellerDetails?.Shop?._id]);

  async function Changevisibility(id){
    try {
      let token=localStorage.getItem('token')
      if(token){
        let decoded=jwtDecode(token)
        const data=await fetch(BASE_URL+'api/toogleproductvisibility',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
          },
          body:JSON.stringify({email:decoded.email,productIDs:[id]})
        })
        const response=await data.json()
        if(response.success){
          toast.success(response.msg)
        }
        else{
          toast.error(response.msg)
        }
      }
    } catch (error) {
      console.error("Error toggling product visibility:", error);
    }
  }

  const handleToggle = (productId) => {
    setToggleStates(prevState => ({
      ...prevState,
      [productId]: !prevState[productId] // Toggle the state for the specific product
    }));
    Changevisibility(productId)
  };
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
      <Toaster/>
      <div className="flex flex-row h-auto">
        <button
          onClick={toggleSidebar}
          className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
          style={{ height: "30px" }}
        >
          <Menu size={30} />
        </button>
        <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

        <div
          className={`flex flex-col pl-20 pr-16 pt-8 pb-40 space-y-2 ${isSidebarOpen ? "w-4/5" : "w-full"
            }`}
        >
          <SearchBarSeller />

          <div className="text-[#333333] space-y-1 py-10">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-Gorditas font-bold">Hello {ownerName}</p>
            <Link to='/requestproduct' className="py-1 px-2 rounded bg-[#e9fcd8] border border-[#58B310] text-[#58B310]">Request to add product</Link>
            </div>
            <p className="font-Gorditas ">Here are your products</p>
          </div>

          <div className="flex flex-col space-y-6 ">
            <div className="justify-center items-center bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-2" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 3fr 3fr 4fr 1.5fr 1fr", justifyContent: "center" }}>
              <p className="text-[12px] text-center w-1/6 ">Sr No.</p>
              <p className="text-[12px] text-center w-1/6 pl-4">Image</p>
              <p className="text-[12px] text-center w-2/6">Name</p>
              <p className="text-[12px] text-center w-1/6">ID</p>
              <p className="text-[12px] text-center w-3/6 pl-10">Description</p>
              <p className="text-[12px] text-center w-1/6">Price</p>
              <p className="text-[12px] text-center w-1/6">Action</p>
            </div>
            {products?.map((product, index) => (
              <div className="justify-between gap-2 text-[#000000] text-[14px] min-h-[150px] shadow-md pl-2" key={index} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 3fr 3fr 4fr 1.5fr 1fr" }}>
                <div className=" font-Montserrat flex flex-row items-center">
                  {index + 1}
                </div>
                <div className=" font-Montserrat flex items-center">
                  <img src={product?.product_primary_image_url} className="p-2 w-[auto]  h-[100px] object-contain" />
                </div>
                <div className=" font-Montserrat flex items-center">
                  {cropString(product?.products_title, 25)}
                </div>
                <div className=" font-Montserrat flex items-center">
                  {product?._id}
                </div>
                <div className=" font-Montserrat flex items-center">
                  {cropString(product?.products_description, 300)}
                </div>
                <div className=" font-Montserrat flex items-center">
                  Rs. {product?.stores[0]?.variants1_mrp_price}
                </div>
                <div className="font-Montserrat flex items-center">
                  <ToggleButton
                    value={toggleStates[product._id]} // Pass toggle state from state object
                    onToggle={() => handleToggle(product._id)} // Pass product id to handleToggle
                    activeLabel={'Show'} 
                    inactiveLabel={'Hide'}
                    activeColor={'#58B310'} // Custom color for active state
                    inactiveColor={'#CCCCCC'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProduct;
