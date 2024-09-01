import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BASE_URl } from '../Apis/api';


const UserProfile = ({ handleLogout}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const profileRef = useRef(null);

  const handleProfileIconClick = () => {
    const iconRect = profileRef.current.getBoundingClientRect();
    const modalTop = iconRect.bottom + 25;
    const modalLeft = iconRect.left - 200;
    setModalPosition({ top: modalTop, left: modalLeft });
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  const toggleLogoutModal = () => {
    setLogoutModalOpen(!logoutModalOpen);
    localStorage.clear();
    setIsModalOpen(false);
  };
  // State to store user data retrieved from localStorage
  const [userData, setUserData] = useState({});



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URl}/admin?email=${localStorage.getItem('adminEmail')}`);
        setUserData(response.data.data);
        console.log('Fetched user data:', response.data.data); // Add this line
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="relative">
      <img src='https://clipart-library.com/images/kTKo7BB8c.png' alt='admin-icon'
        className='ml-2 cursor-pointer w-[50px] border border-gray-400 p-1 rounded-full'
        onClick={handleProfileIconClick} ref={profileRef} />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-25" onClick={toggleModal}></div>
          <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none" style={{ top: modalPosition.top, left: modalPosition.left }}>
            <div className="relative flex flex-col p-6">
              <div className="flex items-start justify-between border-b border-solid border-gray-300">
                <h3 className="text-2xl font-medium">Admin Profile</h3>
                <button className="pb-3 pl-3 pt-0 ml-auto bg-transparent float-right text-2xl  text-gray-600 hover:text-gray-800" onClick={toggleModal}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="text-lg">
                  <button onClick={() => setProfileModalOpen(true)}>View Profile</button>
                </li>
                <li className="text-lg">
                  <button className="text-red-500" onClick={toggleLogoutModal}>Log out</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {profileModalOpen && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[300px] my-6 mx-auto max-w-3xl">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Admin Profile</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setProfileModalOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="relative p-6 flex-auto items-center justify-center">
                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <span style={{ fontWeight: 'bold' }}>Full Name:</span> {userData.firstName} {userData.lastName} 
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <span style={{ fontWeight: 'bold' }}>Email:</span> {userData.email}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
                    <span style={{ fontWeight: 'bold' }}>Mobile No.:</span> {userData.mobile}
                  </p>
                </div>
                {/* Modal footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setProfileModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal overlay */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}

      {logoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleLogoutModal}></div>
          <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="relative flex flex-col p-6">
              <h3 className="text-2xl font-semibold">Log out</h3>
              <p>Are you sure you want to log out?</p>
              <div className="mt-4 flex justify-between">
                <button className="text-red-500" onClick={handleLogout}>Yes</button>
                <button className="text-blue-500" onClick={toggleLogoutModal}>No</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
