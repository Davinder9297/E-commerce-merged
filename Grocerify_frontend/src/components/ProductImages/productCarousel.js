import styles from "./style.module.css";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";
import MyReactImageMagnify from "../Magnify/MyReactImageMagnify";





const ProductImages = (props) => {


    console.log(props.data);

    // const video =props?.data[props?.data.length] ? props?.video[0]?.productVideoUrl : "";
    // const thumbnail = props?.video ? props?.video[0]?.productImageUrl : "";
    const [width, setWidth] = useState(0);
    const [showSimilar, setShowSimilar] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [IsMuted, setIsMuted] = useState(true);
    // console.log(props.similar.similarProduct);

    const handleSimilar = () => {
        setShowSimilar(true);
    };
    useEffect(() => {
        if (showSimilar) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [showSimilar]);

    const options = {
        pagination: false,
        pauseOnHover: true,
        isNavigation: true,
        autoWidth: true,
        gap: "10px",
        direction: window.innerWidth > 700 ? "ttb" : "rtl",
        height: "100%",
        arrows: window.innerWidth > 600 ? true : false,
    };

    const primaryRef = useRef(null);
    const secondaryRef = useRef(null);
    const videoRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [playVideo, setPlayVideo] = useState(false);

    // console.log(primaryRef.current);
    // console.log(secondaryRef.current);

    useEffect(() => {

        if (primaryRef.current) {
            // @ts-ignore
            primaryRef.current.sync(secondaryRef.current.splide);
        }

        setWidth(window.innerWidth);
        // console.log(primaryRef.current);
        // console.log(video);
        if (primaryRef.current) {
            // @ts-ignore
            const splideInstance = primaryRef.current.splide;
            console.log(splideInstance);
            if (splideInstance) {
                splideInstance.on("moved", () => {
                    // setActiveIndex(splideInstance.index);
                    console.log(splideInstance.index);
                    setActiveIndex(splideInstance.index);
                    // if (splideInstance?.index >= props?.data?.length) {
                    //     console.log("first");
                    //     videoRef.current.play();
                    // } else {
                    //     videoRef.current.pause();
                    // }
                });
            }
        }
    }, [primaryRef, secondaryRef]);



    return (
        <>
            <div className={styles.product_images}>
                <div
                    className={styles.images}
                    id="product_image_small_carousel"
                // style={{ border: "2px solid pink" }}
                >
                    <Splide
                        ref={(slider) => (primaryRef.current = slider)}
                        options={{ ...options }}
                    // style={{ height: "100%" }}
                    >
                        {props?.data?.map((val, index) => (
                            <>
                                {/* @ts-ignore */}
                                {!(val.split(".").pop().toLowerCase() === "mp4") ? (
                                    <SplideSlide key={index}>
                                        <div className={styles.img}>
                                            <img src={val} alt="product image" style={{ objectFit: "contain" }} />
                                        </div>
                                    </SplideSlide>
                                ) : (
                                    <SplideSlide>
                                        <div>
                                            <video
                                                ref={videoRef}
                                                style={{
                                                    height: "12vh",
                                                    width: "11vh",
                                                    objectFit: "cover",
                                                }}
                                                src={val}
                                                // autoPlay={props.data.length == activeIndex}
                                                autoPlay={true}
                                                controls={false}
                                            ></video>
                                        </div>


                                    </SplideSlide>
                                )}
                            </>
                        ))}

                        {/* <SplideSlide>
             
            </SplideSlide> */}
                    </Splide>
                </div>
                <div className={styles.main_img}>

                    <Splide
                        ref={(slider) => (secondaryRef.current = slider)}
                        options={{
                            perPage: 1,
                            pagination: false,
                            arrows: false,
                            width: "100%",
                            // height: "auto",
                        }}
                    >
                        {props?.data?.map((val, index) => {
                            return (
                                <>
                                    {/*  @ts-ignore */}
                                    {!(val.split(".").pop().toLowerCase() === "mp4") ? (
                                        <SplideSlide key={index + "main"}>
                                            <div
                                            // style={{ aspectRatio: "1/1", width: "100%" }}
                                            // className={styles.main_product_image}
                                            >
                                                <MyReactImageMagnify
                                                    img={val}
                                                    props={{ enlargedImagePosition: "over" }}
                                                />
                                            </div>
                                        </SplideSlide>
                                    ) : (
                                        <SplideSlide
                                            style={{ width: "fit-content", height: "80vh" }}
                                        >
                                            <div style={{ position: "relative", height: "80vh" }}>
                                                <video
                                                    ref={videoRef}
                                                    style={{
                                                        // border: "2px solid green",
                                                        height: "100%",
                                                        width: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                    src={val}

                                                    autoPlay={true}
                                                    controls={false}
                                                ></video>



                                            </div>
                                        </SplideSlide>
                                    )}
                                </>
                            );
                        })}
                    </Splide>
                </div>
            </div>

        </>
    );
};

export default ProductImages;
