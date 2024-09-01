import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SideMenuSeller from "../components/SideMenuSeller";
import { useEffect, useState } from "react";
import { Menu } from "react-feather";
import SearchBarSeller from "../components/SearchBarSeller";
import { BASE_URL } from "../api/api";
import { jwtDecode } from "jwt-decode";
import { getSeller } from "../helper/helper";
export default function Customers(){
    const [isSidebarOpen, setSidebarOpen] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [orders, setOrders] = useState([]);
    const [ownerName, setownerName] = useState()

    useEffect(() => {
      async function Fetchusername(){
        let token=localStorage.getItem('token')
      if(token){
        let decoded=jwtDecode(token)
      const details=await getSeller(decoded)
      setownerName(details?.data?.data?.OwnerName)
      }
      }
      Fetchusername()
    }, [])
    useEffect(() => {
      const today = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCurrentDate(today.toLocaleDateString(undefined, options));
    }, []);
    useEffect(() => {
     async function Fetchdata(){
      let token=localStorage.getItem('token')
      if(token){
        let decoded=jwtDecode(token)
        const data=await fetch(BASE_URL+'api/getordersgroupbyuser/'+decoded?.shop)
        const response=await data.json()
        setOrders(response?.orders)

      }
     }
     Fetchdata()
    }, [])
    
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return(<>
          <div className="flex flex-row h-auto">

       <button
        onClick={toggleSidebar}
        className="absolute text-[#58B310] p-2 ml-2 mt-6 rounded-md"
        style={{ height: "30px" }}
      >
        <Menu size={30} />
      </button>
      <SideMenuSeller isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      {/* Main content */}
      <div
        className={`flex flex-col pl-20 pr-16 pt-8 pb-10 space-y-10 ${isSidebarOpen ? "w-4/5" : "w-full"
          }`}
      >
        {/* Search bar */}
        <SearchBarSeller />

        {/* description */}
        <div className="text-[#333333] space-y-1">
          <p className="text-3xl font-Gorditas font-bold">Hello {ownerName}</p>
          <p className="font-Gorditas ">{`Today is ${currentDate}`}</p>
          <div className="font-Gorditas text-2xl font-semibold">Customers</div>
        </div>
      
        {/* data cards */}
  
    <div className="flex flex-col w-full justify-center  items-center gap-y-3">
      {
        orders?.map((item)=>{
          let total=0;
          item?.orders?.map((it)=>{
            total+=it?.order_price
          })
          return(<>
          <div className="min-h-[20vh] flex w-[80%]  justify-between p-3 border rounded-md ">
                <div className="w-[70%] space-y-2">
                    <div className="font-semibold">{item?.ordered_by?.firstName} {item?.ordered_by?.lastName}</div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt />
                        <span>{item?.ordered_by?.mobile}</span>
                    </div>

                    <div className="flex gap-2">
                        <FaLocationDot />
                        <span>{item?.ordered_by?.address[item?.ordered_by?.address.length-1]?.address_line_1} , {item?.ordered_by?.address[item?.ordered_by?.address.length-1]?.address_line_2} , {item?.ordered_by?.address[item?.ordered_by?.address.length-1]?.city} ,{item?.ordered_by?.address[item?.ordered_by?.address.length-1]?.state} {item?.ordered_by?.address[item?.ordered_by?.address.length-1]?.zip}</span>
                    </div>

                </div>

                <div className="flex gap-2">
                    <span>Total shopping</span>
                    <span className="font-semibold text-xl">₹{total}</span>
                </div>
            </div>
          </>)
        })
      }

    </div>
    </div>
    </div>
    </>)
}