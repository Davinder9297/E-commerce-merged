import React, { useState } from "react";
import axios from "axios"; 
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../api/api";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const AddProduct = () => {
  const initialData = {
    products_title: "",
    products_description: "",
    brand: "",
    product_primary_image_url: "",
    product_images_url: [""],
    product_videos_url: [""],
    tags: "",
    parent_category_name: "",
    sub_category_name: "",
    productVariants: { type: "", varients: [] },
  };

  const [product, setProduct] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const variantTypes = ["Size", "Color", "Weight"]; // Array of variant types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageURLChange = (index, e) => {
    const updatedImages = [...product.product_images_url];
    updatedImages[index] = e.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_images_url: updatedImages,
    }));
  };

  const handleVideoURLChange = (index, e) => {
    const updatedVideos = [...product.product_videos_url];
    updatedVideos[index] = e.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_videos_url: updatedVideos,
    }));
  };

  const addImageURLField = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_images_url: [...prevProduct.product_images_url, ""],
    }));
  };

  const addVideoURLField = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_videos_url: [...prevProduct.product_videos_url, ""],
    }));
  };

  const removeImageURL = (index) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_images_url: prevProduct.product_images_url.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const removeVideoURL = (index) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_videos_url: prevProduct.product_videos_url.filter(
        (_, i) => i !== index
      ),
    }));
  };

  // handle varients
  const handleVariantChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      productVariants: {
        ...prevProduct.productVariants,
        type: e.target.value,
      },
    }));
  };

  const addVarients = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      productVariants: {
        ...prevProduct.productVariants,
        varients: [...prevProduct.productVariants.varients, ""],
      },
    }));
  };

  const removeVarients = (index) => {
    const updatedVariants = { ...product.productVariants };
    updatedVariants.varients.splice(index, 1);
    setProduct((prevProduct) => ({
      ...prevProduct,
      productVariants: updatedVariants,
    }));
  };

  const handleVarientValueChange = (index, e) => {
    const { value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      productVariants: {
        ...prevProduct.productVariants,
        varients: prevProduct.productVariants.varients.map((variant, i) =>
          i === index ? value : variant // Update only the variant at the specified index
        ),
      },
    }));
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!product.brand || !product.parent_category_name || !product.productVariants || !product.product_images_url || !product.product_primary_image_url || !product.product_videos_url || !product.products_description || !product.products_title || !product.sub_category_name || !product.tags){
      toast.error('All fields are required')
    }
    else{
    setLoading(true);
    setError(null); // Reset any previous error
// console.log(product);
    try {
      let token =localStorage.getItem('token')
      const response = await axios.post(`${BASE_URL}api/reqaddproduct`, product,{
        headers: {
          Authorization: `Bearer ${token}`
        }});

      if (response.status === 201) {
        toast.success("Product added successfully");
        console.log("Product added successfully:", response.data);
        setProduct(initialData);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setError(error.message); // Display error message to the user
    } finally {
      setLoading(false);
    }
  }
  };

  return (
    <div>
      <Toaster />
        <Link to='/sellerproduct' className="absolute left-[20%] top-2"><IoArrowBackSharp className="text-2xl"/></Link>
        <h1 className="text-3xl font-bold text-center text-orange-500 underline mb-3">
          ADD Products
        </h1>
      <form
        
        className="flex border-2 flex-col w-[50rem] mx-auto my-auto shadow-md p-10 gap-3 rounded-md"
      >
        <label htmlFor="products_title">Product Title</label>
        <input
          type="text"
          name="products_title"
          value={product.products_title}
          onChange={handleChange}
          className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
          required
        />
        <label htmlFor="products_description">Product Description</label>
        <textarea
          name="products_description"
          value={product.products_description}
          onChange={handleChange}
          className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
          required
        />
        <div className="grid grid-cols-2 gap-7">
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="mt-2 w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring "
            />
          </div>

          <div>
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              className="mt-2 w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
            />
          </div>
        </div>
        <label htmlFor="product_primary_image_url">Primary Image</label>
        <input
          type="text"
          name="product_primary_image_url"
          value={product.product_primary_image_url}
          onChange={handleChange}
          className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
        />
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="flex gap-6 items-center mb-3">
              <label htmlFor="product_images_url">Product Images</label>
              <button
                type="button"
                className="text-blue-500 text-3xl font-bold"
                onClick={addImageURLField}
              >
                +
              </button>
            </div>
            <div>
              {product.product_images_url.map((url, index) => (
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
            </div>
          </div>
          <div>
            <div className="flex gap-5  items-center mb-3">
              <label htmlFor="product_videos_url">Product Videos</label>
              <button
                type="button"
                className="text-green-500 text-3xl font-bold"
                onClick={addVideoURLField}
              >
                +
              </button>
            </div>
            <div>
              {product.product_videos_url.map((url, index) => (
                <div key={index} className="flex gap-5">
                  <input
                    type="text"
                    value={url}
                    className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
                    onChange={(e) => handleVideoURLChange(index, e)}
                    placeholder="Enter Video URL"
                  />
                  <button
                    type="button"
                    className="text-red-500 text-3xl font-bold"
                    onClick={() => removeVideoURL(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="parent_category_name">Category</label>
            <input
              type="text"
              name="parent_category_name"
              value={product.parent_category_name}
              onChange={handleChange}
              className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
            />
          </div>
          <div>
            <label htmlFor="sub_category_name">Sub-category</label>
            <input
              type="text"
              name="sub_category_name"
              value={product.sub_category_name}
              onChange={handleChange}
              className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="varients">Varients Weight</label>
            <input
              type="text"
              name="varients"
              value={product.varients}
              onChange={handleChange}
              className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
            />
          </div>
          <div>
            <label htmlFor="type">Varients Unit Type</label>
            <input
              type="text"
              name="type"
              value={product.type}
              onChange={handleChange}
              className="w-full py-2 px-3 shadow-md focus:outline-none rounded-md  focus:ring"
            />
          </div>
        </div> */}
        {/* Dropdown menus for variant types */}
        <div>
          <label>Product Variants:</label>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <select
                name={`type`}
                value={product.productVariants.type} // Corrected value assignment
                onChange={handleVariantChange} // Removed unnecessary event argument
                className="py-2 px-3 w-full shadow-md focus:outline-none rounded-md focus:ring"
              >
                <option value="">Select Unit Type</option>
                <option value="Size">Size</option>
                <option value="Color">Color</option>
                <option value="Weight">Weight</option>
              </select>

              <button
                type="button"
                onClick={addVarients} // Removed unnecessary function call brackets
                className="text-green-500 font-bold text-3xl"
              >
                +
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.productVariants.varients.map((varient, weightIndex) => (
                <div key={weightIndex} className="flex gap-2 ">
                  <input
                    type="text"
                    value={varient}
                    onChange={(e) => handleVarientValueChange(weightIndex, e)} // Pass the event object (e)
                    placeholder="Varient"
                    className="py-2 px-3 shadow-md focus:outline-none rounded-md focus:ring"
                  />

                  <button
                    type="button"
                    onClick={() => removeVarients(weightIndex)}
                    className="text-red-500 font-bold"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
        onClick={handleSubmit}
          type="submit"
          className="self-center mt-4 w-[10rem] p-2 rounded border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
        >
          {" "}
          {loading ? (
            <span>
              Adding... <i className="fa fa-spinner fa-spin"></i>
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

export default AddProduct;
