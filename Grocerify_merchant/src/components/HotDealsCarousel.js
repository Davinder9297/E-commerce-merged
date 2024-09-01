import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotDealsCarousel = () => {

  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="slick-arrow-custom slick-prev-custom absolute top-48 left-10 text-center bg-[#F3F3F3] rounded-3xl"
    >
      <p className="w-[44px] h-[42px] text-3xl text-[#000000] text-bold ">{"<"}</p>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="slick-arrow-custom slick-next-custom absolute top-48 right-10 text-center bg-[#F3F3F3] rounded-3xl"
    >
      <p className="w-[44px] h-[42px] text-3xl text-[#000000] text-bold">{">"}</p>
    </div>
  );

  const settings = {
    arrows: true,
    auto: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  return (
    <Slider {...settings} className="pl-[110px]">
      <div className="">
        <img src="../assests/images/Banner-hotdeals.png" className="p-8" />
      </div>
      <div className="">
        <img src="../assests/images/Banner-hotdeals.png" className="p-8" />
      </div>
      <div className="">
        <img src="../assests/images/Banner-hotdeals.png" className="p-8" />
      </div>
    </Slider>
  );
};

export default HotDealsCarousel;
