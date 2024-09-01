import React, { useState } from 'react';
import styles from './verifyOTP.module.css';
import { ReactComponent as Cross } from '../../Assets/Icons/cross.svg';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';

const VerifyOTP = ({ open, mobile, setismobileVerified }) => {

    const [user, setUser] = useState({
        mobile: mobile,
        otp: ""
    });

    const verify = async () => {
        try {
            const res = await axios.post(`${BASE_URL}api/verifyMobileOTP`, {
                mobile: user.mobile,
                otp: user.otp
            })
            console.log(res);
            if (res.status === 201) {
                open(false);
                setismobileVerified('success');

            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className={styles.register_container} >
            <div className={styles.register_box_main}>
                <div className={styles.cross} onClick={() => open(false)}>
                    <Cross />
                </div>
                {/* Main heading */}
                <h1>Enter your OTP</h1>
                <div className={styles.input_main}>
                    {/* Switch button for email or mobile number */}
                    <p>OTP has been sent via SMS to your <br />
                        registered mobile number +91 9*******123</p>
                    {/* Input fields */}
                    <div className={styles.inputs}>

                        <div>
                            {/* Email input */}

                            <input type="number" placeholder="Enter Your OTP" value={user.otp} onChange={(e) => setUser({ ...user, otp: e.target.value })} />
                        </div>

                    </div>
                    {/* Action buttons */}
                    <div className={styles.action_button}>
                        {/* Sign in button */}
                        <div className={styles.submit}>
                            <button onClick={verify}>Verify</button>
                        </div>
                        {/* Login options */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;
