/* Sidebar.jsx */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import Logo from '../assets/images/HMLOGO.gif';
import HamburgerButton from './HamburgerMenuButton/HamburgerButton';
import SidebarMenu from './SidebarMenu';
import './Style/Sidebar.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
    if (mobileMenu) {
      setMobileMenu(true);
    }
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div
        className={`${
          open ? 'w-64' : 'w-fit'
        } h-[200vh] hidden sm:block relative  bg-white border-gray-400 dark:border-gray-600 p-3 dark:bg-slate-800 overflow-y-auto overflow-x-hidden`}
        // 
      >
        <BiMenu
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-black mr-2  rounded-full cursor-pointer top-3 -right-1 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={toggleDrawer}
        />

        <Link to='/dashboard'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            <img src={Logo} alt='' className='pl-2 w-20' />
            {open && (
              <span className='text-xl font-medium whitespace-nowrap text-black'>
                Admin
              </span>
            )}
          </div>
        </Link>

        {/* Pass the open state to SidebarMenu */}
        <SidebarMenu open={open} />

      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {/* Pass the open state to SidebarMenu */}
          <SidebarMenu open={open} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
