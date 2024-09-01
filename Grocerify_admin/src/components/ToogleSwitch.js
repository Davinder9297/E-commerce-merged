import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className={`relative w-10 h-5 rounded ${isOn ? 'bg-green-500' : 'bg-orange-500'}`}>
          <input type="checkbox" id="toggle" className="sr-only" checked={isOn} onChange={toggleSwitch} />
          <div className="absolute w-5 h-5 bg-white rounded-full shadow-md inset-y-0 left-0"></div>
        </div>
        <div className={`ml-2 text-sm font-semibold ${isOn ? 'text-green-500' : 'text-orange-500'}`}>{isOn ? 'On' : 'Off'}</div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
