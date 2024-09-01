import React from "react";
import GoogleMapReact from 'google-map-react';
import "../FeaturedStore.css";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const NearMe = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="nearme">
      <div className="nearme-text">
        <h3>
          <span className="">
            <img src="../assests/images/storeicon.svg" />
          </span>
          Stores Near Me
        </h3>
        {/* <h4>
          Show More <span className="arrow-down-icon">&#9660;</span>
        </h4> */}
      </div>

      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "AIzaSyAMf08gins_JYhylYnMvbB3zT7cv4dpx1Q" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>


      {/* <div className="location">
        <img src="../assests/images/location.svg" />
      </div> */}
    </div>
  );
};

export default NearMe;
