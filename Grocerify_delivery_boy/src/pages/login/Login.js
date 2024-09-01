import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validateMobile } from '../../helper/Validations'
import toast, { Toaster } from 'react-hot-toast'
import { deliveryboyLoginWithEmail, authenticatedeliveryboy, sendMobileOTP, verifyDeliveryboyLoginMobileOTP } from "../../helper/helper";

const Login = () => {
  const [switchBtn, setSwitchBtn] = useState(1);
  const navigate = useNavigate();
  const [deliveryBoy, setdeliveryBoy] = useState({
		mobile: '',
		email: '',
		password: '',
	})

  const handleLogin = async () => {
		if (!deliveryBoy.email || (!validateEmail(deliveryBoy.email) && !deliveryBoy.password)) {
			toast.error('Invalid Email and Password!')
		} else if (!deliveryBoy.email || !validateEmail(deliveryBoy.email)) {
			toast.error('Invalid Email!')
		} else if (!deliveryBoy.password) {
			toast.error('Password is required :(')
		} else {
			let data = await deliveryboyLoginWithEmail({
				email: deliveryBoy.email,
				password: deliveryBoy.password,
			})
			if (data?.data) {
        console.log(data.data);
				localStorage.setItem('deliverytoken', data?.data?.token)
				if (!data.data.verified) {
					toast.error(
						'Account not verified yet. Kindly wait until it get verified.',
						{ duration: 5000 }
					)
				} else {
					navigate('/myActivity')
					toast.success('Login Successful')
				}
			} else {
				toast.error('Wrong email or password.')
			}
		}
	}

  const handleSendOTP = async () => {
		if (!deliveryBoy.mobile) {
			toast.error('Mobile is required :(')
		} else {
			if (validateMobile(deliveryBoy.mobile)) {
				if (await authenticatedeliveryboy({ mobile: deliveryBoy.mobile })) {
					const otpPromise = sendMobileOTP({ mobile: deliveryBoy.mobile })
					toast.promise(otpPromise, {
						loading: 'Loading',
						success: 'OTP Sent',
						error: 'Failed sending OTP',
					})

					otpPromise.then((res) => {
						navigate(`/sendOtp?mobile=${deliveryBoy.mobile}`)
					})
				} else {
					toast.error("Account donesn't exsist!")
				}
			} else {
				toast.error('Invalid Mobile!')
			}
		}
	}

  return (
    <>
      <Toaster />
      <div className="flex justify-center bg-gray-100">
        <div className="flex flex-col gap-8 w-[430px] h-[840px] my-[3%] items-center py-[3%] overflow-y-auto bg-white">
          <p className="text-[#333333] text-[23.68px] font-Gorditas font-semibold pb-2">
            Hi, Welcome Back!
          </p>
          <div className="flex flex-row gap-4">
          <button
              onClick={() => setSwitchBtn(1)}
              className={`text-[#000000] text-[18.24px] font-Montserrat rounded-xl h-[37.5px] px-10 ${
                switchBtn === 1 ? "bg-[#58B310] text-white shadow-lg" : "bg-white"
              }`} >
              E-mail
            </button>
            <button
              onClick={() => setSwitchBtn(2)}
              className={`text-[#000000] text-[18.24px] font-Montserrat rounded-xl h-[37.5px] px-2 ${
                switchBtn === 2 ? "bg-[#58B310] text-white shadow-lg" : "bg-white"
              }`}
            >
              Mobile Number
            </button>
          </div>

          {/* fields */}
          <div className="flex flex-col gap-4">
            {switchBtn === 1 ? (
              <div className="flex flex-col gap-2">
                {/* Email input */}
                <div>
                  <p className="text-[#333333] text-[16.21px] font-Montserrat">Enter your email address</p>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    name="email"
                    className="w-[347.3px] h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-4 outline-none"
                    value={deliveryBoy.email}
                    onChange={(e) =>
                      setdeliveryBoy({
                        ...deliveryBoy,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Password input */}
                <div className="pt-4">
                  <p className="text-[#333333] text-[16.21px] font-Montserrat">Enter your password</p>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    className="w-[347.3px] h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-4 outline-none"
                    value={deliveryBoy.password}
                    onChange={(e) =>
                      setdeliveryBoy({
                        ...deliveryBoy,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Forgot password link */}
                {/* <div className="flex flex-row justify-end">
                  <Link
                    to={"/forgotpassword"}
                    className="text-[12px] text-[#333333] font-Montserrat cursor-pointer"
                  >
                    Forgot password?
                  </Link>
                </div> */}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {/* Phone input */}
                <div>
                  <p className="pb-2 text-[#333333] text-[16.21px] font-Montserrat">Enter your phone number</p>
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    name="mobile"
                    className="w-[347.3px] h-[45.68px] shadow-xl text-[#A19797] text-[14.19px] fonr-Montserrat px-4"
                    value={deliveryBoy.mobile}
											onChange={(e) =>
												setdeliveryBoy({
													...deliveryBoy,
													mobile: e.target.value,
												})
											}
                  />
                </div>
              </div>
            )}
            {switchBtn == 1 && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleLogin}
                  className="text-[#FFFFFF] font-bold text-[18px] shadow-xl font-Inter bg-[#58B310] rounded-lg pl-6 pr-6 pt-1 pb-1 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Sign In
                </button>
              </div>
            )}

            {switchBtn == 2 && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSendOTP}
                  className="text-[#FFFFFF] font-bold text-[18px] shadow-xl font-Inter bg-[#58B310] rounded-lg pl-6 pr-6 pt-1 pb-1 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Send OTP
                </button>
              </div>
            )}
            <div className="flex flex-col items-center text-[#333333] text-[16px] font-Montserrat"> 
              <Link to={"/register"} className="cursor-pointer">Do not have an account? Register with us</Link>
              {/* <p>or</p> */}
            </div>
            {/* <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 justify-center items-center" >
                  <Fb className="w-[25px] h-[25px]" />
                  <p className="text-[#333333] text-[12px] font-Montserrat">Sign up with Facebook</p>
              </div>
              <div className="flex flex-row gap-2 justify-center items-center"
              // onClick={handleGoogleSignIn}
              >
                  <Google className="w-[25px] h-[25px]" />
                  <p className="text-[#333333] text-[12px] font-Montserrat">Sign up with Goggle</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
