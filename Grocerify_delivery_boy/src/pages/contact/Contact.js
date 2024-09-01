import React , {useEffect, useState }from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactComponent as Pic } from "../../assests/icons/pic.svg";
import { ReactComponent as Pencil } from "../../assests/icons/pencil.svg";
import { ReactComponent as Call } from "../../assests/icons/call.svg";
import { ReactComponent as Add } from "../../assests/icons/add.svg";
import { getDataFromToken, getDeliveryboy } from "../../helper/helper";
import Deliveryboyheader from "../../components/Deliveryboyheader/Deliveryboyheader";
import DeliveryboyNav from "../../components/DeliveryboyNav/DeliveryboyNav";

const Contact = () => {
  const [info, setInfo] = useState(null)
  async function getData() {
    const {email} = await getDataFromToken()
    const data = await getDeliveryboy({email})
    setInfo(data.data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col gap-4 w-[430px] h-[840px] my-[3%] px-[1%] py-[1%] overflow-y-auto bg-white">
        {/* head */}
        <div className="flex flex-row gap-24">
          <Link to={"/profile"} className="text-[#000000] text-5xl font-bold">
            {" "}
            {" < "}{" "}
          </Link>
          <Deliveryboyheader info={info}/>
        </div>

        {/* nav */}
        <DeliveryboyNav info={info} />

        {/* contact */}
        <div className="flex flex-col gap-6 mx-2 px-[3%] py-[4%] mt-4  rounded-md shadow-md">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
                <Call className="w-[30px] h-[30px]" />
                <div className="flex flex-col">
                    <p className="text-[#333333] text-[18px] font-Montserrat">Phone Number</p>
                    <p className="text-[#979797] text-[14px] font-Plus Jakarta Sans">{info?.mobile}</p>
                </div>
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact