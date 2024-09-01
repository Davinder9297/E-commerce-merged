import React, { useContext, useState } from 'react';
import styles from './login.module.css';
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as Google } from '../../Assets/Icons/google.svg';
import { ReactComponent as Apple } from '../../Assets/Icons/apple.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/joy';
import { Globalinfo } from '../../App';

const Login = () => {
    const navigate = useNavigate();
    const { userDetail, getUserDetails, GetCart, GetWishList } = useContext(Globalinfo)
    const [btnLoader, setBtnLoader] = useState(false);
    const [switchBtn, setSwitchBtn] = useState(1);
    const [user, setUser] = useState({
        mobile: "",
        email: "",
        password: ""

    });
    console.log(userDetail)

    const handleLogin = async () => {
        console.log(user)
        setBtnLoader(true);

        if (switchBtn == 1) {

            if (!validateEmail(user.email)) {
                toast.error('Enter valid Email  Address')
                setBtnLoader(false)
                return;
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
                    console.log(error.response.data.error);
                    toast.error(error.response.data.error)
                } finally {
                    setBtnLoader(false)
                }
            }



        }
        else if (switchBtn == 2) {

            if (user.mobile.length != 10) {
                toast.error('Enter valid Mobile Number')
                setBtnLoader(false)
                return;
            }
            else {
                try {
                    const res = await axios.post(`${BASE_URL}api/loginWithMobile`, {
                        mobile: user.mobile,
                        password: user.password,
                    })

                    console.log(res);

                    toast.success('Login Successfull')
                    getUserDetails()

                    GetCart()
                    GetWishList()
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

            <div className={styles.register_container}>
                <div className={styles.register_box_main}>

                    {/* Main heading */}
                    <h1>Hi, Welcome Back</h1>
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
                                    <Link to={'/register'} style={{ textDecoration: "underline" }}>  <h5>Sign Up</h5></Link>
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
    );
};

export default Login;
