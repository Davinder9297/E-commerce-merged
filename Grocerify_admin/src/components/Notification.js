import React, { useState } from 'react';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      const randomNotificationCount = Math.floor(Math.random() * 5) + 1; // Generates random number between 1 and 5
      setNotificationCount(randomNotificationCount);
    } else {
      setNotificationCount(0);
    }
  };

  return (
    <div className="relative">
      <div onClick={toggleModal}>
        <FontAwesomeIcon icon={faBell} className="h-8 w-8 text-white cursor-pointer hover:text-gray-300" />
        {notificationCount > 0 && (
          <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full text-xs px-2">
            {notificationCount}
          </span>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-80 p-6 rounded-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
              <button onClick={toggleModal} className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">Close</span>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-55">
              {notificationCount > 0 ? (
                Array.from({ length: notificationCount }, (_, index) => (
                  <div key={index} className="mb-2">
                    Notification {index + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                ))
              ) : (
                <div className="text-gray-600">No new notifications</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
