import React, { useEffect, useState } from 'react'
import { BASE_URl } from '../Apis/api';
import axios from 'axios';
import { getAllproducts,fetchAllSellerData } from '../Apis/api';
const AddStoreProduct = () => {
    const [id,setId]=useState('');
    const [allProducts,setAllProduct]=useState([]);
    const [merchants,setMerchants]=useState([])
    const [modal,setModal]=useState(false);
    const [productDetails,setProductDetails]=useState([{
        productId:'',
        mrpPrice:0,
        discount:0,
        stock:0
    }]);
    // fetch all products
    const fetchProducts = async () => {
        try {
          const res = await getAllproducts();
          setAllProduct(res.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
    //   fetch all merchants
      const fetchMerchants = async () => {
        try {
          const sellers = await fetchAllSellerData();
          setMerchants(sellers.sellers); // Initialize filteredMerchants with all merchants
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        fetchMerchants();
        fetchProducts();
      }, []);

  return (
    <div className='flex w-[500px] h-[400px] shadow-md mx-auto mt-[10rem] flex-col rounded-md p-3'>
        <h1 className='text-3xl text-center'>Add Product to merchants</h1>
      <form className='flex flex-col gap-3 shadow-md p-3 mt-4'>
        <label htmlFor="email" className=''>Id</label>
        <input className='shadow-md p-2 rounded-md focus:outline-none' type="text" name='id' value={id} id='id'  onChange={e=>setId(e.target.value)}/>
      </form>
    </div>
  )
}

export default AddStoreProduct
