import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/sellerlogin.module.css";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    // Perform any necessary actions here

    // Navigate to the login page
    navigate("/");
  };

  return (
    <>
      <div className={styles.register_container}>
        <div className={styles.register_box_main}>
          <div className="flex flex-row gap-8">
            <div>
              <Link to={"/"} className="text-[36px] text-[#58B310]">
                {" "}
                {" < "}{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-10 pb-10">
              <p className="text-[#58B310] text-[36px] pt-2 font-Gorditas w-[300px] leading-10">
                Enter your New Password{" "}
              </p>
              <div className="flex flex-col gap-4">
                <input
                  className="p-2 shadow-lg font-Montserrat"
                  type="password"
                  placeholder="Old Password"
                />
                <input
                  className="p-2 shadow-lg font-Montserrat"
                  type="password"
                  placeholder="New Password"
                />
                <input
                  className="p-2 shadow-lg font-Montserrat"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleConfirmClick}
                  className="text-[#FFFFFF] text-[18px] font-Inter bg-[#58B310] pl-3 pr-3 pt-1 pb-1 rounded-lg border shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
