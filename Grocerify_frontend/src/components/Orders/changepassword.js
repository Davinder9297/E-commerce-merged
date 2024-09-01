import { useState } from "react"
import { Link } from "react-router-dom"
export default function ChangePassword(){
const [currentpassword, setcurrentpassword] = useState()
const [newpassword, setnewpassword] = useState()
const [reenterpassword, setreenterpassword] = useState()
    return(<>
    <div className="flex justify-center w-full fontmons py-10">
        <div className="w-[50%] ">
            <div className="flex font-semibold text-[#848484]">
                <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                <Link to='/security' className="">Login and Security &gt;</Link>
                <div className="text-[#58B310]">Change Password</div>
            </div>
            <div className="font-bold text-[#848484] text-[32px] my-2">Change Password</div>
            <div className="w-full text-[#848484] space-y-5">
                <label htmlFor="currentpassword" className="w-full shadow-md py-2 px-4">
                        <p className="font-bold">Current Password</p>
                        <input type="password" id="currentpassword" name="currentpassword" value={currentpassword} onChange={(e)=>setcurrentpassword(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1"/>
                </label>
                <label htmlFor="newpassword" className="w-full shadow-md py-2 px-4">
                        <p className="font-bold">New Password</p>
                        <input  id="newpassword" name="newpassword" type="password" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1"/>
                </label>
                <label htmlFor="re-enterpassword" className="w-full shadow-md py-2 px-4">
                        <p className="font-bold">Re-enter Password</p>                                     
                        <input  id="re-enterpassword" name="re-enterpassword" type="password" value={reenterpassword} onChange={(e)=>setreenterpassword(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1"/>
                </label>
                <button className="text-[#58B310] px-3 py-1 shadow-lg rounded hover:bg-[#58B310] hover:text-white">Save Changes</button>
            </div>
        </div>
    </div>
    </>)
}