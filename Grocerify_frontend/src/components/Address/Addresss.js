import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import Spinner from "../Spinner";

export default function Addresses() {
    const [Data, setData] = useState([])
    const [defaultaddress, setdefaultaddress] = useState('')
    let temp = localStorage.getItem('GROC_USER_TOKEN')
    const [show, setshow] = useState(false)

    async function RemoveAddress(id) {
        let url = BASE_URL + 'api/removeaddress'
        // let address={}
        try {
            const data = await fetch(url, {
                method: 'delete',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + temp },
                body: JSON.stringify({ address_id: id })
            });
            const response = await data.json()
            //    console.log(response)
            setData(response.data.address)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        let token = ''
        function TokenDecode() {
            try {

                token = jwtDecode(temp)
                // console.log(token)
            } catch (error) {
                console.log(error)
            }
        }
        TokenDecode()

        //   console.log(token)
        //   console.log(url)
        async function Fetchdata() {
            setshow(true)
            try {
                let url = BASE_URL + 'api/user?mobile=' + token.mobile

                const data = await fetch(url)
                const response = await data.json()
                // console.log(response)
                // setemail(response.data.email)
                // setmobile(response.data.mobile)
                setdefaultaddress(response.data.default_address)
                setData(response.data.address)
                setshow(false)
            } catch (error) {
                console.log(error)
            }

        }
        Fetchdata()
    }, [])

    return (<>
        <div className="w-full flex justify-center fontmons mb-5">
            <div className="w-[90%]">
                <div className="flex mt-3">
                    <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                    <div className="text-[#58B310]">Your Addresses</div>
                </div>
                <div className="text-[#222222] text-[32px] mt-4">Your Addresses</div>
                <div className="flex justify-center  mt-5 flex-wrap h-auto ">
                    <Link to='/account/addresses/add_address' className="w-72 min-h-48  mx-5 rounded-2xl border border-[#D9D9D9] shadow-md  flex justify-center items-center text-[#848484] text-[20px]">
                        <div className="flex flex-col text-center">
                            <div className="flex justify-center">  <FaPlus /></div>
                            <div>Add Address</div>
                        </div>
                    </Link>

                    {
                        Data.map((item, ind) => {
                            // console.log(item)
                            return (<>
                                <div key={ind} className="mx-5 mb-3 w-72 h-auto  rounded-2xl shadow-md border border-[#D9D9D9] text-[#848484] text-[20px]">
                                    <div className="flex flex-col text-[14px]">
                                        {defaultaddress == item._id ? <div className="border-b-[2px] text-[14px] pl-2 py-1">Default</div> : <div className=" text-[14px] pl-2 py-1"></div>}
                                        <div className="pl-4 pt-3  h-auto text-wrap">
                                            <div>{item.full_name}</div>
                                            <div className="">{item.address_line_1}</div>
                                            <div className="">{item.address_line_2}</div>
                                            <div className="">{item.zip},{item.state},{item.country}</div>
                                            <div className="">Ph No : {item.mobile}</div>
                                            <div className="flex space-x-1 text-[#58B310] font-[500px] mt-1 pb-3">
                                                <Link to={`/account/addresses/edit_address?id=${item._id}`}>Edit</Link>
                                                <span>|</span>
                                                <button onClick={() => RemoveAddress(item._id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })
                    }

                </div>
            </div>
            {show ? <div className='w-full h-full fixed -top-0 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
        </div>

    </>)
}