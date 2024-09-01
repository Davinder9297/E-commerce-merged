import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import VerifyOTP from "../verifyOTP/verifyOTP"
import { BASE_URL } from "../../Api/api"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { FaCircleCheck } from "react-icons/fa6";
import { CircularProgress } from "@mui/joy";
import Spinner from "../Spinner";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { jwtDecode } from "jwt-decode";
export default function LoginAndSecurity() {
    const [editname, seteditname] = useState(true)
    const [editlastName, seteditlastName] = useState(true)
    const [editemail, seteditemail] = useState(true)
    const [editmobile, seteditmobile] = useState(true)
    const [editpassword, seteditpassword] = useState(true)
    const [firstName, setfirstName] = useState('Davinder')
    const [lastName, setlastName] = useState('Kumar')
    const [mobile, setmobile] = useState(8283929792)
    const [email, setemail] = useState('davindergiri@gmail.com')
    const [password, setpassword] = useState('davinder123')
    const [ismobileVerified, setismobileVerified] = useState('success')
    const [showOTPModal, setshowOTPModal] = useState(false)
    const [show, setshow] = useState(false)
    const navigate = useNavigate()
    let temp = localStorage.getItem('GROC_USER_TOKEN')

    useEffect(() => {
        async function Fetchdata() {
            setshow(true)
            try {
                let token = jwtDecode(temp)
                let emaild = token.email;
                let url = `${BASE_URL}api/user?email=${emaild}`

                const data = await fetch(url)
                let response = await data.json()
                setemail(response.data.email)
                setfirstName(response.data.firstName)
                setlastName(response.data.lastName)
                setmobile(response.data.mobile)
                console.log(response)


            } catch (error) {
                console.log("dfdsf" + error)
            }
            setshow(false)
        }
        Fetchdata()
    }, [])

    const handlesendOTP = async () => {

        if (mobile.length !== 10) {
            toast.error("Enter valid Mobile Number")
            return
        }
        setismobileVerified('loading')

        try {
            // let url=`${BASE_URL}api/generateMobileOTP`
            const res = await axios.post(`${BASE_URL}api/generateMobileOTP`, { mobile: Number(mobile) });
            // console.log(res);
            if (res.status === 201) {
                setshowOTPModal(true)
                toast.success(res.data.msg)

            }
            else {
                toast.error(res.data.msg)
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Unable to send OTP")
            setismobileVerified('error')
        }
    }
    function HandleEdit() {
        seteditmobile(false)
        setismobileVerified('error')
    }
    function UpdatefirstName() {
        seteditname(true)
        UpdateProfile()
    }
    function UpdatelastName() {
        seteditlastName(true)
        UpdateProfile()
    }
    function Updatephone() {
        seteditmobile(true)
        if (ismobileVerified === 'success') {
            UpdateProfile()

        }
        else {
            toast.warn('Verify your phone number', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: 'Bounce'
            });
        }
    }
    async function UpdateProfile() {
        setshow(true)

        try {
            if (!firstName || !lastName || !mobile || !email) {
                toast.warn('Every input must be filled', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    // transition: 'Bounce'
                });
            }
            else {

                let temp = localStorage.getItem('GROC_USER_TOKEN')


                // console.log(temp)

                let url = `${BASE_URL}api/updateuser`
                let address1 = { firstName, lastName, email, mobile }
                //    console.log(address1);
                //     console.log(stringifyObject(address1))
                const data = await fetch(url, {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + temp },
                    body: JSON.stringify(address1)
                });
                let response = await data.json()
                console.log(response)
                if (response.msg === "Record Updated") {
                    toast.success('Profile Updated Successfully', {
                        position: "top-center",
                        autoClose: 300,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        // transition: 'Bounce'
                    });
                    // navigate('/account')
                }
                else {
                    toast.error('Server error', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        // transition: 'Bounce'
                    });
                }
            }
        } catch (error) {
            console.log("dfdsf" + error)
        }

        // RemoveFromCart(id)
        // TotalCount()
        // seteditname(false)
        setshow(false)
    }
    async function Updateemail() {
        setshow(true)
        seteditemail(true)
        UpdateProfile()
        // setshow(false)
    }
    return (<>
        <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
        // transition: Bounce
        />
        <div className="flex justify-center w-full fontmons py-10">
            <div className="w-[50%] ">
                <div className="flex font-semibold">
                    <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                    <div className="text-[#58B310] font-semibold">Login and Security</div>
                </div>
                <div className="font-bold text-[#848484] text-[32px] my-2">Login and Security</div>
                <div className="w-full text-[#848484] space-y-5">
                    <label htmlFor="name" className="w-full py-2 px-4">
                        <div className="flex justify-between w-full">
                            <p className="font-bold">First Name</p>
                            {
                                editname == true ? <button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={() => { seteditname(false) }}>EDIT</button> : <button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={UpdatefirstName}>SAVE</button>
                            }
                        </div>
                        <input disabled={editname} type="text" id="name" name="name" value={firstName} onChange={(e) => setfirstName(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                    </label>
                    <label htmlFor="lastName" className="w-full py-2 px-4">
                        <div className="flex justify-between w-full">
                            <p className="font-bold">Last Name</p>
                            {
                                editlastName == true ? <button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={() => { seteditlastName(false) }}>EDIT</button> : <button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={UpdatelastName}>SAVE</button>
                            }
                        </div>
                        <input disabled={editlastName} type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                    </label>
                    <label htmlFor="email" className="w-full py-2 px-4">
                        <div className="flex justify-between w-full">
                            <p className="font-bold">Email</p>
                            {
                                editemail == true ? <button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={() => { seteditemail(false) }}>EDIT</button> : <button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={Updateemail}>SAVE</button>
                            }
                        </div>
                        <input disabled={editemail} id="email" name="email" type="email" value={email} onChange={(e) => setemail(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                    </label>
                    <label htmlFor="mobile" className="w-full py-2 px-4">
                        <div className="flex justify-between w-full">
                            <p className="font-bold">Primary Phone Number</p>
                            <div className="flex space-x-2">
                                {ismobileVerified === 'success' ? <i> <FaCircleCheck className="mt-2" color="success" /> </i> : ismobileVerified === 'loading' ? <i style={{ top: "0px" }}> <CircularProgress size="sm" color="success" /> </i> : editmobile == false ? <button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded " onClick={handlesendOTP}>VERIFY</button> : ''}
                                {
                                    editmobile == true ? <button className={`px-3 py-1 hover:bg-[#58B310] hover:text-white rounded `} onClick={HandleEdit}>EDIT</button> : <button className="px-3 py-1 hover:bg-[#58B310] hover:text-white rounded" onClick={Updatephone}>SAVE</button>
                                }
                            </div>
                        </div>
                        <input disabled={editmobile} id="mobile" name="mobile" type="number" value={mobile} onChange={(e) => setmobile(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                        <p className="text-[11px]">Quickly sign in, easily recover passwords and receive security notifications with this mobile number.</p>
                    </label>

                </div>
            </div>
            {showOTPModal && <VerifyOTP open={setshowOTPModal} mobile={mobile} setismobileVerified={setismobileVerified} />}
            {show ? <div className='w-full h-full fixed top-0 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
        </div>
        <Toaster />
    </>)
}