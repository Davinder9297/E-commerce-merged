import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-toggle-button';

export default function Deliveryboyheader({ info }) {
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        // Load toggle state from local storage
        const storedToggle = localStorage.getItem('toggle');
        if (storedToggle !== null) {
            setToggle(storedToggle === 'true');
        }
    }, []);

    function handleToggle() {
        const newToggle = !toggle;
        // Update state
        setToggle(newToggle);
        // Update local storage
        localStorage.setItem('toggle', newToggle);
    }

    return (
        <div>
            <div className="flex flex-col items-center gap-1 pt-4">
                <img
                    src={info?.profile}
                    className="w-[70px] h-[70px] object-contain"
                    alt="Profile"
                />
                <p className="text-[#303030] text-[16px] font-Montserrat font-bold">
                    {info?.firstName} {info?.lastName}
                </p>
                <p className="text-[#303030] text-[16px] font-Montserrat flex space-x-1">
                    <p>Shift status:</p>
                    <ToggleButton
                        value={toggle}
                        onToggle={handleToggle}
                        activeLabel={'On'}
                        inactiveLabel={'Off'}
                        activeColor={'#58B310'}
                        inactiveColor={'#CCCCCC'}
                    />
                </p>
            </div>
        </div>
    );
}
