import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ReactComponent as Pic } from "../../assests/icons/pic.svg";
import { ReactComponent as User2 } from "../../assests/icons/user2.svg";
import { getDataFromToken, getDeliveryboy } from "../../helper/helper";
import Deliveryboyheader from "../../components/Deliveryboyheader/Deliveryboyheader";
import DeliveryboyNav from "../../components/DeliveryboyNav/DeliveryboyNav";

// work on stars

const Star = ({ selected, onSelect }) => {
  return (
    <FaStar
      color={selected ? "#FFC300" : "#A19797"}
      size={18}
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    />
  );
};

const Feedback = ({ rating }) => {
  const [userRatings, setUserRatings] = useState(Array(5).fill(rating));

  const handleStarClick = (index) => {
    const newRatings = userRatings.map((r, i) => (i === index ? rating : r));
    setUserRatings(newRatings);
  };
  
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
          <Deliveryboyheader info={info} />
        </div>

        {/* nav */}
        <DeliveryboyNav info={info} />

        {/* feedback */}
        <div className="flex flex-col gap-4 px-[2%] mt-4">
          <p className="text-[#333333] text-[18px] font-Montserrat">Feedback</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 rounded-md shadow-md py-4 px-4 items-center">
              <User2 />
              <div className="flex flex-col">
                <p className="text-[#333333] text-[16px] font-Montserrat">
                  Bashir Siddiqui
                </p>
                <div className="flex gap-1">
                  {userRatings.map((selected, index) => (
                    <Star
                      key={index}
                      selected={selected === rating}
                      onSelect={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
