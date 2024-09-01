import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ReferAndEarn = () => {
  const shareWebsite = () => {
    // Logic to share website
    alert('Share functionality will be implemented here.');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Refer and Earn</h2>
        <p className="text-gray-600 mb-6">Share with friends and earn rewards!</p>
        
        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-2xl cursor-pointer transition duration-300 transform hover:scale-110" onClick={() => alert('Share via WhatsApp')} />
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl cursor-pointer transition duration-300 transform hover:scale-110" onClick={() => alert('Share via Facebook')} />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl cursor-pointer transition duration-300 transform hover:scale-110" onClick={() => alert('Share via Twitter')} />
        </div>

        {/* Share website button */}
        <span>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3  rounded transition duration-300 transform hover:scale-110" onClick={shareWebsite}>Share Website</button>
        </span>
        <span className='pl-4'>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition duration-300 transform hover:scale-110" onClick={shareWebsite}>More</button>
        </span>
      </div>
    </div>
  );
}

export default ReferAndEarn;
