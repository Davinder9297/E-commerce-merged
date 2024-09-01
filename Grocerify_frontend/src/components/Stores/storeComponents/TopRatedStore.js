
// import React from 'react'
// import { MoreStore } from "../MoreStore";
// import { Link } from "react-router-dom";
// import ReactOwlCarousel from "react-owl-carousel";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import "../FeaturedStore.css";
// import shopsStore from '../../../Assets/Images/shops1.png'


// const TopRatedStore = () => {
//   const options = {
//     items: 2,
//     rewind: true,
//     dots: false,
//     autoplay: true
//   };
//   return (
//     <div className="store1">
//       <div className="store1-text">
//         <h2>TOP RATED STORE</h2>
//         <h4>
//           Show More <span className="arrow-down-icon">&#9660;</span>
//         </h4>
//       </div>

//       <div className="carousel-div" style={{ border: "1px solid red" }}>
//         <ReactOwlCarousel className="owl-theme" {...options}>
//           <div className="carousel-item" >
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" /></Link>
//           </div>
//           <div className="carousel-item" >
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>
//           <div className="carousel-item">
//             <Link to={"/morestore"}>
//               <img src={shopsStore} className="carousel-item-img" />
//             </Link></div>

//         </ReactOwlCarousel>

//       </div>
//     </div>
//   )
// }

// export default TopRatedStore