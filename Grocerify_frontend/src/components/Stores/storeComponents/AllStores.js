import React from 'react'
import { MoreStore } from "../MoreStore";
import { Link } from "react-router-dom";

const AllStores = () => {
  return (
    <div className="store1">
      <div className="store1-text">
        <h3>FEATURED STORE</h3>

      </div>
      <div className="img-featured">
        <div className="img-featured-overlay">
          <Link to={"/morestore"} >
            <img src="../assets/Images/woodenlifestore.svg" />
            <div className="overlay-text">
              <h1>WOODEN LIFE STORE</h1>
              <h4>Shop No, 2284/3, Mariwala Town</h4>
              <p>1km</p>
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </Link>
        </div>

        <div className="img-featured-overlay">
          <Link to={"/morestore"} >
            <img src="../assets/Images/shoesstore.svg" />
            <div className="overlay-text">
              <h1>SHOES STORE</h1>
              <h4>Shop No, 2284/3, Mariwala Town</h4>
              <p>1.5km</p>
              <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllStores