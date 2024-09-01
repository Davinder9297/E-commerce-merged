import { useEffect, useState } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { BASE_URL } from "../../Api/api"
import { jwtDecode } from "jwt-decode"
import Spinner from "../Spinner"
import {
        CountrySelector,
        StateSelector,
        CitySelector,
} from "volkeno-react-country-state-city";
import "volkeno-react-country-state-city/dist/index.css";
import toast, { Toaster } from "react-hot-toast"

export default function Editaddress(props) {

        const [country, setcountry] = useState()
        const [full_name, setfull_name] = useState()
        const [mobile, setmobile] = useState()
        const [zip, setzip] = useState()
        const [address_line_1, setaddress_line_1] = useState()
        const [address_line_2, setaddress_line_2] = useState()
        const [landmark, setlandmark] = useState()
        const [city, setcity] = useState()
        const [state, setstate] = useState()
        const [make_default, setmake_default] = useState(false)
        const [show, setshow] = useState(false)
        const navigate = useNavigate()

        const [searchParams, setSearchParams] = useSearchParams();
        let address_id = searchParams.get('id')
        // console.log(searchParams.get("id"))
        let temp = localStorage.getItem('GROC_USER_TOKEN')
        // console.log(props)
        useEffect(() => {
                async function Fetchdata() {
                        setshow(true)
                        try {
                                let token = jwtDecode(temp)
                                let emaild = token.email;
                                let url = `${BASE_URL}api/user/address/${address_id}?email=${emaild}`

                                const data = await fetch(url)
                                let response = await data.json()
                                // console.log(response.data.city)
                                setcity(response.data.city)
                                setcountry(response.data.country)
                                setstate(response.data.state)
                                setfull_name(response.data.full_name)
                                setmobile(response.data.mobile)
                                setlandmark(response.data.landmark)
                                setzip(response.data.zip)
                                setaddress_line_1(response.data.address_line_1)
                                setaddress_line_2(response.data.address_line_2)

                        } catch (error) {
                                console.log("dfdsf" + error)
                        }
                        setshow(false)
                }
                Fetchdata()
        }, [])

        async function Addaddress() {

                try {
                        if (!full_name || !mobile || !country || !zip || !address_line_1 || !address_line_2 || !landmark || !city || !state) {
                                toast.error('Every input must be filled');
                        }
                        else {
                                let url = `${BASE_URL}api/updateaddress`
                                let address1 = { address_id, address: { full_name, city, state, landmark, address_line_1, address_line_2, country, mobile, zip }, make_default }

                                const data = await fetch(url, {
                                        method: 'put',
                                        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + temp },
                                        body: JSON.stringify(address1)
                                });
                                let response = await data.json()
                                if (response.success) {
                                        toast.success('Address edited successfully');
                                        navigate('/account/address')
                                }
                                else {
                                        toast.error('Server error');
                                }
                        }
                        //    console.log(data)
                } catch (error) {
                        toast.error('Server error');
                }


                // RemoveFromCart(id)
                // TotalCount()
                // setshow(false)
        }

        const handleCountryChange = (e) => {
                setcountry(e);
        };
        const handleStateChange = (e) => {
                setstate(e);
        };
        const handleCityChange = (e) => {
                setcity(e);
        };

        return (<>
                <Toaster />
                <div className="flex font-semibold text-[#848484] pl-20 pt-3">
                        <Link to='/account' className="text-[#848484]">Your Account &gt;</Link>
                        <Link to='/account/address' className="">Your Addresses &gt;</Link>
                        <div className="text-[#58B310]">Edit Address</div>
                </div>
                <div className="flex justify-center w-full fontmons py-10">
                        <div className="w-[40%] ">
                                <div className="font-bold text-[#848484] text-[32px] my-2 text-center fontgobs" >Edit Address</div>
                                <div className="w-full text-[#848484] space-y-5 fontmons">

                                        <label htmlFor="full_name" className="w-full  py-2 px-4">
                                                <p className="font-semibold">Full Name</p>
                                                <input id="full_name" name="full_name" type="text" value={full_name} onChange={(e) => setfull_name(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="mobile" className="w-full  py-2 px-4">
                                                <p className="font-semibold">Mobile Number</p>
                                                <input id="mobile" name="mobile" type="number" value={mobile} onChange={(e) => setmobile(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="zip" className="w-full  py-2 px-4">
                                                <p className="font-semibold">zip</p>
                                                <input id="zip" name="zip" type="number" value={zip} onChange={(e) => setzip(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="address_line_1" className="w-full  py-2 px-4">
                                                <p className="font-semibold">House no, Building ,Company </p>
                                                <input id="address_line_1" name="address_line_1" type="text" value={address_line_1} onChange={(e) => setaddress_line_1(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="address_line_2" className="w-full  py-2 px-4">
                                                <p className="font-semibold">Street , Sector , Village </p>
                                                <input id="address_line_2" name="address_line_2" type="text" value={address_line_2} onChange={(e) => setaddress_line_2(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="Landmark" className="w-full  py-2 px-4">
                                                <p className="font-semibold">Landmark</p>
                                                <input id="Landmark" name="Landmark" type="text" value={landmark} onChange={(e) => setlandmark(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" />
                                        </label>
                                        <label htmlFor="country" className="w-full  py-2 px-4">
                                                <p className="font-semibold">Country</p>
                                                {/* <input required type="text" id="country" name="country" value={country} onChange={(e) => setcountry(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" /> */}
                                                <CountrySelector
                                                        onChange={handleCountryChange}
                                                        name="country"
                                                        placeholder="Select a country"
                                                        value={country}
                                                        className=""
                                                        styleContainer={{ padding: "0px !important" }}
                                                />
                                        </label>
                                        <div className="flex w-full">
                                                <label htmlFor="city" className="w-full  py-2 px-4">

                                                        <p className="font-semibold">State</p>
                                                        {/* <input required id="city" name="city" type="text" value={city} onChange={(e) => setcity(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" /> */}
                                                        <StateSelector
                                                                country={country}
                                                                value={state}
                                                                countryPlaceholder="Select state"
                                                                onChange={handleStateChange}
                                                                styleContainer={{ padding: "0px !important" }}
                                                        />
                                                </label>
                                                <label htmlFor="state" className="w-full  py-2 px-4">
                                                        <p className="font-semibold">city</p>
                                                        {/* <input required id="state" name="state" type="text" value={state} onChange={(e) => setstate(e.target.value)} className="w-full mt-2 outline-none border-[0.5px] pl-2 py-1" /> */}
                                                        <CitySelector
                                                                state={state}
                                                                value={city}
                                                                statePlaceholder="Select City"
                                                                onChange={handleCityChange}
                                                                placeholder="Select City"
                                                        />
                                                </label>
                                        </div>
                                        <div className="flex space-x-1">
                                                <input onChange={(e) => setmake_default(e.target.checked)} className="h-5 w-5 accent-[#58B310] text-white" type="checkbox" />
                                                <div>Make this my default Address</div>
                                        </div>
                                        <div className="flex w-full justify-center">
                                                <button onClick={() => Addaddress()} className=" px-4 py-1 shadow-lg rounded bg-[#58B310] text-white">Save</button>

                                        </div>
                                </div>
                        </div>
                        {show ? <div className='w-full h-full fixed top-0 left-0 bg-[#b4cca1] opacity-80'>
                                <Spinner className='' />

                        </div> : ''}
                </div>
        </>)
}
