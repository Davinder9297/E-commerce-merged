import { useEffect, useState } from "react";
import React from "react";
import "./StoreDetails.css";

function StoreDetails(){
    const [formData, setFormData] = useState({ name: "", email: "", storename:""});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, you can proceed with form submission or any other action
            console.log("Form data:", formData);
        } else {
            // Form has errors, update the state with the errors
            setErrors(validationErrors);
            console.log("Form has errors:", validationErrors);
        }
    };

    const validate = (data) => {
        let errors = {};

        // Validate name
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }

        // Validate email
        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!isValidEmail(data.email)) {
            errors.email = "Invalid email format";
        }

         // Validate Store name
         if (!data.storename.trim()) {
            errors.storename = "Name is required";
        }
        return errors;
    };

    // Required for email
    const isValidEmail = (email) => {
        // Basic email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return(
        <>
            <div className="StoreDetails">
                {/* Section -1 Merchants Information */}
                <div className="Merchants-info">
                    <h2>Merchants Information</h2>

                    {/* Merchants info Form */}
                    <div className="Merchants-info-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Full Name<span>*</span></label><br/>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />{errors.name && <span className="error">{errors.name}</span>}<br/>

                                <label htmlFor="email">Email<span>*</span></label><br/>
                                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}placeholder="Email" />{errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div>
                                <label for="phoneNumber">Phone Number<span>*</span></label><br/>
                                <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                            </div>
                        </form>
                    </div>
                </div>
                {/* Section-2 Store Information */}
                <div className="Store-info">
                    <h2>Store Information</h2>

                    {/* Store info Form */}
                    <div className="Merchants-info-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label for="storename">Store Name<span>*</span></label><br/>
                                <input type="text" id="storename" name="storename" value={formData.storename} onChange={handleChange}placeholder="Store Name" />{errors.storename && <span className="error">{errors.storename}</span>}<br/>

                                <label for="contact">Contact Number<span>*</span></label><br/>
                                <input type="text" id="contact" name="storecontact" placeholder="Contact Number" /><br/>
                                <label for="address">Address<span>*</span></label><br/>
                                <input type="text" id="address" name="storeaddress" placeholder="Address" /><br/>
                                <label for="city">State</label><br/>
                                <input type="text" id="city" name="storecity" placeholder="State" /><br/>
                                <label for="time">TimeZone</label><br/>
                                <input type="text" id="time" name="storetime" placeholder="TimeZone" /><br/>
                                <label for="opzone">Select Operating Zones<span>*</span></label><br/>
                                <input type="text" id="opzone" name="opzone" placeholder="Select Operating Zones" /><br/>
                                <label for="lng">lng</label><br/>
                                <input type="text" id="lng" name="storelng" placeholder="lng" /><br/>
                                <label for="rating">Ratings<span>*</span></label><br/>
                                <input type="number" id="rating" name="storerating" placeholder="Rating" /><br/>
                                <label for="rating" id="about-us">About Us</label><br/>
                                <textarea type="number" id="aboutus" name="storerating" placeholder="About Us"/><br/>
                                <div className="Save-btn">
                                    <button type="submit">Save</button>
                                </div>
                            </div>
                            <div>
                                <label for="storemail">Contact Email<span>*</span></label><br/>
                                <input type="text" id="storemail" name="mystoremail" placeholder="Contact Email" /><br/>
                                <label for="contperson">Contact Person<span>*</span></label><br/>
                                <input type="text" id="contperson" name="storecontperson" placeholder="Contact Person"/><br/>
                                <label for="country">Country</label><br/>
                                <input type="text" id="country" name="storecountry" placeholder="Country" /><br/>
                                <label for="city">City</label><br/>
                                <input type="text" id="city" name="storecity" placeholder="City" /><br/>
                                <label for="zipcode">Zipcode</label><br/>
                                <input type="text" id="storezipcode" name="storezipcode" placeholder="Zipcode" /><br/>
                                <label for="dtime">Prepration Time/ Delivered Time (In Min)<span>*</span></label><br/>
                                <input type="text" id="dtime" name="storedtime" placeholder="Prepration Time/ Delivered Time (In Min)" /><br/>
                                <label for="lat">lat</label><br/>
                                <input type="text" id="lat" name="storelat" placeholder="lat" /><br/>
                                <label for="optype">Operations Type<span>*</span></label><br/>
                                <div id="Form-in-operations">
                                    <input type="radio" id="radio"/><button className="btn-1">All</button>
                                    <input type="radio" id="radio"/><button className="btn-2">PickUp</button>
                                    <input type="radio" id="radio"/><button className="btn-3">Delivery</button>
                                </div><br/>
                                <label for="upload">Upload Banner<span>*</span><br/><span id="size">(Ideal Size Content is 1000px*670px)</span></label><br/>
                                <input type="file" id="fileupload" />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}
export default StoreDetails