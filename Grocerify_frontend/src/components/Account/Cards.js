import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="maindiv">
      <div className="cards-extra">
        <div className="card-extra">
          <div className="cbody">
            <h5 className="title">Email alerts , messages& ads</h5>
            <p className="text">Communication preference</p>
            <p className="text">SMS alert prefereces</p>
            <p className="text">Message Centre</p>
            <p className="text">Notification</p>
          </div>
        </div>

        <div className="card-extra">
          <div className="cbody">
            <h5 className="title">More options to pay</h5>
            <p className="text">Default Purchase Setting</p>
            <p className="text">Coupons</p>
          </div>
        </div>

        <div className="card-extra">
          <div className="cbody">
            <h5 className="title">Order & Shopping preference</h5>
            <p className="text">Leave packaging feedback</p>
            <p className="text">Lists</p>
            <p className="text">Manage and save IDs</p>
            <p className="text">Profile</p>
          </div>
        </div>

        <div className="card-extra">
          <div className="cbody">
            <h5 className="title">Other accounts</h5>
            <p className="text">Account Linking</p>
            <p className="text">Seller account</p>
            <p className="text">Login with amazon</p>
          </div>
        </div>

        <div className="card-extra">
          <div className="cbody">
            <h5 className="title">Data & Privacy</h5>
            <p className="text">Request Your Information</p>
            <p className="text">Close Your account</p>
            <p className="text">Privacy Notice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
