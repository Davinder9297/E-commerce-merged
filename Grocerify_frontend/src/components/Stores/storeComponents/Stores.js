import React from "react";
import AllStores from "./AllStores";
import WhatsNew from "./WhatsNew";
// import TopRatedStore from "./TopRatedStore";
import "../FeaturedStore.css";

const Stores = () => {

  return (
    <div className="stores">

      <AllStores />

      <WhatsNew />

      {/* <TopRatedStore /> */}

    </div>
  );
};

export default Stores;
