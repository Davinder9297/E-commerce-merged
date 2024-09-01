import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
import MapImg from "../../assests/images/map.png";
import { ReactComponent as Loc } from "../../assests/icons/location.svg";
import { ReactComponent as Burger } from "../../assests/icons/burger.svg";
import { ReactComponent as Bank } from "../../assests/icons/bank2.svg";
import { getDataFromToken, getDeliveryboy, pickupdeliveryboyorder } from "../../helper/helper";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { BASE_URL } from "../../api";
// decline - open pop up ------ decline(my activity), continue(close pop up)
// pickup - open pop up ------ pickup(pickedup)

const Map1 = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setdata] = useState([])
  const [longitude, setlongitude] = useState()
  const [latitude, setlatitude] = useState()
  const [isPickedup, setPickedup] = useState(false);
  let orderid = searchParams.get("id")
  
  const [info, setInfo] = useState(null)
	
  async function getData() {
		const {email} = await getDataFromToken()
		const data = await getDeliveryboy({email})
		setInfo(data.data.data)
	}
  
  useEffect(() => {
		getData()
	}, [searchParams.get("id")])
  useEffect(() => {
    async function Fetchdata(){
      const data=await fetch(BASE_URL+'/api/getorderdetailsbyid/'+searchParams.get("id"))
      const response=await data.json()
      setdata(response?.order)
      // console.log(response);
    }
    Fetchdata()
  }, [])

  const openPickedup = () => {
    setPickedup(true);
  };
  const closePickedup = () => {
    setPickedup(false);
    let pickupPromise = pickupdeliveryboyorder(orderid)
					toast.promise(pickupPromise, {
						loading: 'Loading...',
						success: 'Order Pickedup',
						error: 'Order already pickedup!',
					})
    navigate(`/pickedUp?id=${orderid}`);
  };
    
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setlatitude(latitude)
      setlongitude(longitude)
      
    });
  
}, [])
  const [isOpen, setOpen] = useState(false);
  const openModel = () => {
    // setOpen(true);
    navigate("/myActivity");
  };
  const closeModel = () => {
    setOpen(false);
  };
  
  const [isDeclined, setDeclined] = useState(false);
  const handleDeclineClick = () => {
    setDeclined(true);
    navigate("/myActivity");
  };

  return (
    <>
    <Toaster />
    <div className="flex justify-center bg-gray-100">
      <div
        className={`flex flex-col w-[430px] h-[840px] my-[3%] overflow-y-auto scrollable-content bg-white ${
          isOpen ? "blur" : ""
        }`}
      >
        <Header />
        <div
          className="flex flex-col justify-between"
          style={{
            backgroundImage: `url(${MapImg})`,
            backgroundPosition: "center",
            width: "430px",
            height: "832px",
          }}
        >
          <div onClick={openModel}>
            <button className="text-[#FFFFFF] text-[16px] font-Inter bg-[#C7C3CA] rounded-lg py-1 px-6 mt-4 ml-6 w-[25%]">
              Back
            </button>
          </div>
          <div className="w-full flex justify-center items-center h-full">
          <Link target="_blank" className="bg-[#e4f7d4] text-[#57AF11] border border-[#57AF11] p-2" to={`https://www.google.com/maps/dir/${latitude},${longitude}/${data?.shop?.ShopAddress}`}>Open Map</Link>
          </div>
          <div className="bg-[#FFFFFF] flex flex-row px-5 py-8">
            <div className="flex flex-col gap-6">
              <p className="text-[#333333] text-[16px] font-Montserrat font-semibold leading-5 w-[70%]">
                {
                  data?.shop?.ShopAddress
                }
              </p>
              {/* <p className="text-[#333333] text-[16px] font-Montserrat font-semibold leading-5 w-[70%]">
                10min
              </p> */}
            </div>
            <div className="flex flex-col justify-end gap-6">
              <button
                className="text-[#FFFFFF] text-[16px] font-Inter bg-[#333333] rounded-lg px-8 py-1"
                onClick={openPickedup}
              >
                Pickup
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className=" bg-white bg-opacity-90 rounded-3xl flex flex-col w-[352px] h-[187.16px] justify-center gap-8 items-center ">
            <p className="text-[#000000] text-[16.39px] font-Montserrat font-semibold w-[70%] text-center">
              Are you sure you want to decline delivery #orderID?
            </p>
            <div className="flex flex-row justify-between gap-8">
              <button
                className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#57AF11] rounded-lg px-4 h-[40.98px] w-[122.04px]"
                onClick={closeModel}
              >
                CONTINUE
              </button>
              <button
                className="text-[#FFFFFF] text-[16px] font-IMontserrat bg-[#C7C3CA] rounded-lg px-4 w-[122.04px]"
                onClick={handleDeclineClick}
              >
                DECLINE
              </button>
            </div>
          </div>
        </div>
      )}
      {isPickedup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className=" bg-white bg-opacity-90 rounded-3xl flex flex-col w-[352px] h-[170.46px] py-10 px-5 gap-5 ">
            <div className="flex flex-col gap-2">
              <p className="text-[#000000] text-[16.39px] font-Montserrat font-semibold text-center">
                You arrived to the pickup location!
              </p>
            </div>
            {/* <div className="flex flex-col gap-2">
              <p className="text-[#303030] text-[16.86px] font-Montserrat font-semibold pl-10">
                #UP295YH
              </p>
              <div className="flex flex-row items-center gap-6">
                <Loc className="w-[30px] h-[30px]" />
                <p className="text-[#303030] text-[16.86px] font-Montserrat">
                  Abdulla Omran Tayram St,Al Thanyah 1, Tecom Dubai{" "}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-5">
                  <Burger className="w-[25px] h-[25px]" />
                  <p className="text-[#303030] text-[16.86px] font-Montserrat">
                    Customer order{" "}
                  </p>
                </div>
                <div className="flex flex-col mx-12">
                  <div className="flex flex-row justify-between">
                    <p className="text-[#000000] text-[14px] font-Montserrat">Chic. Hamb.</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">2</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">200Rs</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-[#000000] text-[14px] font-Montserrat">Chic. Hamb.</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">2</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">20Rs</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-[#000000] text-[14px] font-Montserrat">Chic. Hamb.</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">2</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">100Rs</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-[#000000] text-[14px] font-Montserrat">Chic. Hamb.</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">1</p>
                    <p className="text-[#000000] text-[14px] font-Montserrat">50Rs</p>
                  </div>
                  <hr className="border-solid border-[#000000] border-[1px] my-2" />
                  <div className="flex flex-row justify-between">
                    <p className="text-[#000000] text-[18px] font-Montserrat font-bold">Total</p>
                    <p className="text-[#000000] text-[18px] font-Montserrat font-bold">750Rs</p>
                  </div>
                </div>
              </div>
            </div> 
            <div className="flex flex-row gap-4">
              <Bank className="w-[30px] h-[30px]" />
              <p className="text-[#000000] text-[18px] font-Montserrta">Debit card - <span className="text-[#06B178]"> paid </span></p>
            </div>*/}
            <div className="flex flex-row justify-center gap-8">
              <button
                className="text-[#FFFFFF] text-[16px] font-Montserrat bg-[#57AF11] rounded-lg px-4 h-[40.98px] w-[122.04px]"
                onClick={closePickedup}
              >
                PICK UP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Map1;
