
import React, { useEffect, useRef } from "react";
import styles from "./magnify.module.css";


const MyReactImageMagnify = ({ props, img }) => {
    let ref = useRef(null);
    let imgRef = useRef(null);

    const handleMove = (event, e) => {
        let rect = e.target.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        // Calculate the percentage position of the cursor within the container
        var percentX = (x / rect.width) * 100;
        var percentY = (y / rect.height) * 100;

        // imgRef.current!.style.transform = `scale(2) translate(calc(${-percentX / 2
        //     }%), ${-percentY / 2}%)`;

        // imgRef?.current!.style.transform = `scale(2) translate(calc(${-percentX / 2}%), ${-percentY / 2}%)`;
        if (imgRef && imgRef.current) {
            imgRef.current.style.transform = `scale(1.7) translate(calc(${-percentX / 2}%), ${-percentY / 2}%)`;
        }



    };

    return (
        <>
            <div
                className={styles.container}
                onMouseOver={(e) => {
                    ref = e.target;
                    ref = e.target.addEventListener("mousemove", (event) =>
                        handleMove(event, e)
                    );
                }}
                onMouseLeave={(e) => {
                    e.target.removeEventListener("mousemove", handleMove);
                }}
            >
                <img src={img} alt="" style={{ objectFit: "contain" }} />
                <div className={styles.hover_image}>
                    <div>
                        <img src={img} alt="" ref={imgRef} style={{ objectFit: "contain" }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyReactImageMagnify;
