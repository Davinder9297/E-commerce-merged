import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Grocerify } from "../../assests/icons/grocerify.svg";
import { ReactComponent as User } from "../../assests/icons/user.svg";
import { ReactComponent as Notify } from "../../assests/icons/notify.svg";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-[#333333]p py-3 px-5">
     <Link to='/'> <Grocerify className="w-[102px] h-[23.91px]" /></Link>
      <div className="flex flex-row gap-2 items-start">
        {/* <Notify className="w-[25px] h-[25px]" /> */}
        <Link to={"/profile"}>
          <User className="w-[30px] h-[30px]" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
