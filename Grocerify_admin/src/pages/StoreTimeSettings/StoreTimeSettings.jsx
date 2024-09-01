import React, {useState} from 'react';
import "./StoreTimeSettings.css"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function StoreTimeSettings(){

    // Function to generate timing options from 12:00 AM to 11:59 PM with a 30-minute interval
    const generateTimingOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const hourStr = hour.toString().padStart(2, '0');
                const minuteStr = minute.toString().padStart(2, '0');
                options.push(`${hourStr}:${minuteStr}`);
            }
        }
        return options;
    };
    // State to hold timing options
    const [timingOptions, setTimingOptions] = useState(generateTimingOptions());
    // handling div with classname data-checked
    const [showDataChecked, setShowDataChecked] = useState(false);
     // Handling Errors
     const [error, setError] = useState("");
     const [selectedStartTime, setSelectedStartTime] = useState("");
     const [selectedEndTime, setSelectedEndTime] = useState("");
 

    const handleToggleChange = () => {
        setShowDataChecked(!showDataChecked);
    };


    const handleStartTimeChange = (e) => {
        setSelectedStartTime(e.target.value);
        setError(""); // Clear error when a valid time is selected
    };

    const handleEndTimeChange = (e) => {
        setSelectedEndTime(e.target.value);
        setError(""); // Clear error when a valid time is selected
    };

    // Handling errors on submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (showDataChecked) {
            const days = document.querySelectorAll('.days input[type="checkbox"]:checked');
            // Validate the days
            if (days.length === 0) {
                setError("Please select at least one day");
                return;
            }

            // Validating the start time
            if (!selectedStartTime) {
                setError("Please select start time");
                return;
            }

            // Validating the end time
            if (!selectedEndTime) {
                setError("Please select end time");
                return;
            }
        }
        setError("");
    };


    return(
        <div className='store-time-settings'>
            <form onSubmit={handleSubmit}>

            <div className='take-orders-option'>
                <p>Is your store 24 X 7 open to take orders ?<span className='required'>*</span></p>
                <div className='toggle-btn'>
                    <ToggleSwitch checked={showDataChecked} onChange={handleToggleChange}/>
                </div>
            </div>

        {showDataChecked && (
            <div className='data-checked'>

                <div><label className='open-hours'>Open Hours<span className='required'>*</span></label></div>

                <div className ='timings'>
                    <select value={selectedStartTime} onChange={handleStartTimeChange}>
                    {timingOptions.map((timing, index) => (
                        <option key={index} value={timing}>{timing}</option>
                    ))}
                    </select>

                    <p>TO</p>

                    <select value={selectedEndTime} onChange={handleEndTimeChange}>
                    {timingOptions.map((timing, index) => (
                        <option key={index} value={timing}>{timing}</option>
                    ))}
                    </select>
                </div>

                <div className='days'>
                    <button className='day'><input type='checkbox'/>Mon</button>
                    <button className='day'><input type='checkbox'/>Tue</button>
                    <button className='day'><input type='checkbox'/>Wed</button>
                    <button className='day'><input type='checkbox'/>Thurs</button>
                    <button className='day'><input type='checkbox'/>Fri</button>
                    <button className='day'><input type='checkbox'/>Sat</button>
                    <button className='day'><input type='checkbox'/>Sun</button>
                </div>

                <div className='message-container'>
                    <p>App Display Message during Non-Operating Hours<span className='required'>*</span></p>
                    <textarea placeholder ="Store will open from 9:30am - 6:00pm" required></textarea>
                </div>       
            </div>
        )}

            <div className="error-block">
            {error && <div className="error-message">{error}</div>}
            <hr />
            </div>

            <div className='save-btn'>
                <button type='submit'>Save</button>
            </div>
         </form>
    </div>
    )
}

export default StoreTimeSettings;