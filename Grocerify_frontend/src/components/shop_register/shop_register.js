import React, { useState } from 'react'
import styles from './shop_register.module.css';
import registerimage from '../../Assets/Images/registration.png'
import Checkbox from '../Custom/checkbox';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';
import CircularProgress from '@mui/joy/CircularProgress';
import { validateEmail } from '../../helpers/helper_function';

const ShopRegistration = () => {

    /* ed-o-neil-AvvdZlhDowA-unsplash 1 */




    const [btnLoader, setBtnLoader] = useState(false);
    const [sellerDetails, setSellerDetails] = useState({

        OwnerName: "",
        OwnerMobile: "",
        OwnerEmail: "",
        OwnerDOB: "",
        OwnerAddress: "",
        Aadhar: "",
        PanCard: "",
        password: ""

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSellerDetails({
            ...sellerDetails,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        setBtnLoader(true);
        if (sellerDetails.OwnerMobile.length !== 10) {
            toast.error('Enter valid Mobile Number')
            setBtnLoader(false)
            return;
        }
        if (validateEmail(sellerDetails.OwnerEmail)) {
            toast.error('Enter valid Email address')
            setBtnLoader(false)
            return;
        }
        if (sellerDetails.Aadhar.length !== 16) {
            toast.error('Enter valid Aadhar number')
            setBtnLoader(false)
            return;
        }


        if (sellerDetails.OwnerName === "" ||
            sellerDetails.OwnerMobile === "" ||
            sellerDetails.OwnerEmail === "" ||
            sellerDetails.OwnerDOB === "" ||
            sellerDetails.OwnerAddress === "" ||
            sellerDetails.Aadhar === "" ||
            sellerDetails.PanCard === "" ||
            sellerDetails.password === ""
        ) {
            toast.error("Fill all Credentials")
            setBtnLoader(false)

        }
        else {
            try {
                const res = await axios.post(`${BASE_URL}api/registerseller`, {
                    ...sellerDetails
                })
                // const response = await res.json();
                // console.log(response)
                toast.success('Seller Registered Successfully')
                setBtnLoader(false)
            } catch (error) {
                // console.log(error)
                toast.error("Some Error Occured")
                setBtnLoader(false)
            }
        }
    }

    // console.log(sellerDetails)

    return (

        <>

            <div>
                <div className={styles.shop_register_main}>
                    <div className={styles.bg_image}>
                        <img src={registerimage} alt="not found" />

                    </div>
                    <div className={styles.form_main}>
                        <div className={styles.form_top}>
                            <h2>SELLER REGISTRATION FORM</h2>
                        </div>
                        <div className={styles.scrollable_form}>
                            <span className={styles.inputs}>

                                <div className="Form-inputs">
                                    <label for="OwnerName">Owner/Manager Name</label>
                                    <input type="text" value={sellerDetails.OwnerName} name="OwnerName" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="OwnerMobile">Owner/Manager Contact Number</label>
                                    <input type="text" value={sellerDetails.OwnerMobile} name="OwnerMobile" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="OwnerEmail">Owner/Manager Email Address</label>
                                    <input type="text" value={sellerDetails.OwnerEmail} name="OwnerEmail" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="OwnerDOB">Owner/Manager Birth Date</label>
                                    <input type="date" value={sellerDetails.OwnerDOB} name="OwnerDOB" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="OwnerAddress">Owner/Manager Physical Address</label>
                                    <input type="text" value={sellerDetails.OwnerAddress} name="OwnerAddress" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="Aadhar">Adhar Number</label>
                                    <input type="text" value={sellerDetails.Aadhar} name="Aadhar" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="PanCard">PAN Card</label>
                                    <input type="text" value={sellerDetails.PanCard} name="PanCard" onChange={handleChange} />
                                </div>
                                <div className="Form-inputs">
                                    <label for="Password">Password</label>
                                    <input type="password" value={sellerDetails.password} name="password" onChange={handleChange} />
                                </div>

                            </span>
                            <div className={styles.submit}>
                                <button onClick={handleSubmit}>{btnLoader ? <CircularProgress size="sm" color="success" /> : "Register "}</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Toaster />

        </>
    )
}

export default ShopRegistration