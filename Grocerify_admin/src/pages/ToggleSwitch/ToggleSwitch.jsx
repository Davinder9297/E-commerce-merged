import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ checked, onChange }) {

    const handleChange = (event) => {
        onChange(event.target.checked);
    };

    return (
        <>
            <label for className="switch">
                <input type="checkbox" checked={checked} onChange={handleChange} id="toggle-btn"/>
                    <div className="slider round">
                        <span className="on">ON</span>
                        <span className="off">OFF</span>
                    </div>
            </label>
        </> 
    )
}

export default ToggleSwitch;