// import React from "react";
// import "./CommissionSettings.css"

// function CommissionSettings(){
//     return(
//         <div className="commission-settings">
//             <div className="payout-type">
//                 <p>Payout Type<span className="required">*</span></p>
//                 <input type="radio" name="payout-type"/><div className="radio-amount">Fixed Amount Per Order</div>
//                 <input type="radio" name="payout-type"/><div className="radio-amount">Percentage(%)</div>
//             </div>

//             <div className="payout-value">
//                 <label for="payout-value">Enter Value<span className="required">*</span></label><br/>
//                 <input type="text" name="payout-value" id="payout-value" required/>
//             </div>

//             <hr/>
//             <div className='save-btn'>
//                 <button type='submit'>Save</button>
//             </div>
//         </div>
//     )
// }

// export default CommissionSettings;


import React, { useState } from "react";
import "./CommissionSettings.css";

function CommissionSettings() {
  const [payoutType, setPayoutType] = useState("");
  const [payoutValue, setPayoutValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!payoutType) {
      setError("Please select a Payout Type");
      return;
    }
    if (!payoutValue) {
      setError("Please enter a Payout Type");
      return;
    }
    if (isNaN(payoutValue)) {
        setError("Payout value must be a number");
        return;
    }
    setError("");
  };

  return (
    <div className="commission-settings">
      <form onSubmit={handleSubmit}>
        <div className="payout-type">
          <p>
            Payout Type<span className="required">*</span>
          </p>
          <input
            type="radio"
            name="payout-type"
            value="fixed"
            onChange={(e) => setPayoutType(e.target.value)}
          />
          <div className="radio-amount">Fixed Amount Per Order</div>
          <input
            type="radio"
            name="payout-type"
            value="percentage"
            onChange={(e) => setPayoutType(e.target.value)}
          />
          <div className="radio-amount">Percentage(%)</div>
        </div>

        <div className="payout-value">
          <label htmlFor="payout-value">
            Enter Value<span className="required">*</span>
          </label>
          <br />
          <input
            type="text"
            name="payout-value"
            id="payout-value"
            value={payoutValue}
            onChange={(e) => setPayoutValue(e.target.value)}
          />
        </div>


        <div className="error-block">
          {error && <div className="error-message">{error}</div>}
          <hr />
        </div>
       
        <div className="save-btn">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CommissionSettings;
