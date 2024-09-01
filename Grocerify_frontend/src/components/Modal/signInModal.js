import React, { useState, useContext } from 'react'
import styles from './signInModal.module.css'
import phone from '../../Assets/Images/phone.png'
import { Link } from 'react-router-dom';
import { validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';

import { Globalinfo } from '../../App';
import { ReactComponent as Cross } from '../../Assets/Icons/cross.svg';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { CircularProgress } from '@mui/joy';
import { BASE_URL } from '../../Api/api';


const SignINModal = ({ setOpen }) => {
    const navigate = useNavigate();
    const { userDetail, getUserDetails, GetCart, GetWishList } = useContext(Globalinfo)
    const [btnLoader, setBtnLoader] = useState(false);
    const [switchBtn, setSwitchBtn] = useState(1);
    const [user, setUser] = useState({
        mobile: "",
        email: "",
        password: ""

    });

    const handleCross = () => {
        console.log('first')
        localStorage.setItem('isShowLogin', false)
        console.log(localStorage.getItem('isShowLogin'));
        setOpen(false)
    }

    const handleLogin = async () => {
        console.log(user)
        setBtnLoader(true);

        if (switchBtn == 1) {

            if (!validateEmail(user.email)) {
                toast.error('Enter valid Email  Address')
            }
            else {
                try {
                    const res = await axios.post(`${BASE_URL}api/loginWithEmail`, {
                        email: user.email,
                        password: user.password,
                    })

                    console.log(res);
                    getUserDetails()
                    toast.success("Login Successfull")
                    GetCart()
                    GetWishList()
                    // getUserDetails()
                    localStorage.setItem('GROC_USER_TOKEN', res.data.token)
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);

                } catch (error) {
                    console.log(error);
                    toast.error("Some Error Occured while Login")
                } finally {
                    setBtnLoader(false)
                }
            }



        }
        else if (switchBtn == 2) {

            if (user.mobile.length != 10) {
                toast.error('Enter valid Mobile Number')
            }
            else {
                try {
                    const res = await axios.post(`${BASE_URL}api/loginWithMobile`, {
                        mobile: user.mobile,
                        password: user.password,
                    })

                    console.log(res);

                    toast.success('Login Successfull')
                    navigate('/')
                    localStorage.setItem('GROC_USER_TOKEN', res.data.token)
                } catch (error) {
                    console.log(error);
                    toast.error("Error Occured while Login.")
                } finally {
                    setBtnLoader(false)
                }
            }


        }
    }


    return (
        <>
            <div className={styles.model_main}>
                <div className={styles.main_image}>
                    <img src={phone} alt="no img found" />
                </div>
                <div className={styles.cross} onClick={handleCross}>
                    <Cross />
                </div>

                <div className={styles.register_box_main}>

                    {/* Main heading */}
                    <h1>Login your account !</h1>
                    <div className={styles.input_main}>
                        {/* Switch button for email or mobile number */}
                        <div className={styles.switch_btn}>
                            <button className={switchBtn === 1 ? styles.active : styles.inactive} onClick={() => setSwitchBtn(1)}>E-Mail</button>
                            <button className={switchBtn === 2 ? styles.active : styles.inactive} onClick={() => setSwitchBtn(2)}>Mobile Number</button>
                        </div>
                        {/* Input fields */}
                        <div className={styles.inputs}>
                            {switchBtn === 1 ? (
                                <div>
                                    {/* Email input */}
                                    <p>Enter your email address</p>
                                    <input type="text" placeholder="Enter Your Email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </div>
                            ) : (
                                <div>
                                    {/* Phone input */}
                                    <p>Enter your phone number</p>
                                    <input type="text" placeholder="Enter Your Number" name="mobile" value={user.mobile} onChange={(e) => setUser({ ...user, mobile: e.target.value })} />
                                </div>
                            )}
                            {/* Password input */}
                            <div>
                                <p>Enter your password</p>
                                <input type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            </div>
                            {/* Forgot password link */}
                            {/* <h6>Forgot password?</h6> */}
                        </div>
                        {/* Action buttons */}
                        <div className={styles.action_button}>
                            {/* Sign in button */}
                            <div className={styles.submit}>
                                <button onClick={handleLogin}>{btnLoader ? <CircularProgress size="sm" color="success" /> : "Login"}</button>
                            </div>
                            {/* Login options */}
                            <div className={styles.login_options}>
                                <span>
                                    <p>New Here ?</p>
                                    {/* Sign up link */}
                                    <Link to={'/register'}>  <h5>Sign Up</h5></Link>
                                </span>
                                {/* Social media login buttons */}
                                {/* <div className={styles.btn_group}>
                                    <span><Facebook /></span>
                                    <span><Google /></span>
                                    <span><Apple /></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Toaster />
        </>
    )
}

export default SignINModal