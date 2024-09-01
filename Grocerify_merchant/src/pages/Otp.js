import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../styles/sellerlogin.module.css";
import { verifySellerLoginMobileOTP } from "../helper/helper";
import toast, { Toaster } from "react-hot-toast";
const Otp = () => {
  const navigate = useNavigate();
  const [getOTP, setOTP] = useState()
  const [searchParams, setSearchParams] = useSearchParams();
  const mobile = searchParams.get("mobile")
  const handleConfirmClick = async () => {
    if (!getOTP) {
      return
    }
    console.log(mobile, getOTP);
    let otpPromise = verifySellerLoginMobileOTP({
      mobile: mobile.toString(),
      otp: getOTP.toString(),
    })

    toast.promise(otpPromise, {
      loading: 'Loading',
      success: 'Login Successful',
      error: 'Wrong OTP!',
    })

    otpPromise.then((data) => {
      console.log(data);
      if (data?.data) {
        localStorage.setItem('token', data.data.token)
        if (!data.data.shop && data.data.verified) {
          navigate('/sellershopregistration')
          toast.success('Login Successful')
        } else if (!data.data.verified) {
          toast.error(
            'Account not verified yet. Kindly wait for 24 hours.',
            { duration: 5000 }
          )
        } else {
          navigate('/sellerdashboard')
          toast.success('Login Successful')
        }
      }
    })
  };

  return (
    <>
    <Toaster position="top-right" />
      <div className={styles.register_container}>
        <div className={styles.register_box_main}>
          <div className="flex flex-row gap-10 pl-4 pr-14">
            <div>
              <Link to={"/"} className="text-[36px] text-[#58B310]">
                {" "}
                {" < "}{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-10 pb-10 justify-center items-center">
              <div className="text-[#58B310] text-[36px] font-Gorditas">
                Enter your OTP{" "}
              </div>
              <div className="flex flex-col gap-4  justify-center items-center">
                <p className="flex justify-center items-center text-center w-[280px] font-Montserrat text-[16px] leading-5">OTP has been sebt via SMS to your registered mobile number.</p>
                <input
                  className="p-2 shadow-xl font-Montserrat w-[280px]"
                  type="text"
                  placeholder="Enter Your OTP"
                  onChange={(e)=>{
                    setOTP(e.target.value)
                  }}
                  value={getOTP}
                />
              </div>
              <div className="flex justify-center">
                <button  onClick={handleConfirmClick} className="text-[#FFFFFF] text-[16px] bg-[#58B310] pt-1 pb-1 pl-4 pr-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">Verify</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
