import React, { useEffect, useState } from "react";
import "./trackOrder.css";
import { TiTick } from "react-icons/ti";
const TracKOrder = ({ close, data }) => {
    console.log(data)
    let status = data.status;
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const steps = [
        { step: "Ordered", date: "7 Feb" },
        { step: "Shipped", date: "12 Feb" },
        { step: "Out For Delivery", date: "13 Feb" },
        { step: "Delivered", date: "18 Feb" },
    ]


    useEffect(() => {
        switch (status) {
            case 'ordered':
                setCurrentStep(2);
                break;
            case 'shipped':
                setCurrentStep(3);
                break;
            case 'pickuped':
                setCurrentStep(4);
                break;
            case 'delivered':
                setCurrentStep(5);
                break;
            default:
                setCurrentStep(3);
        }
    }, [])




    return (
        <>
            <div className="main_container" onClick={(e) => e.stopPropagation()}>
                <div className="border border-green-400 p-4 border-2 rounded-[10px]">
                    <h1>Ordered From</h1>
                    <h2>{data.shop?.shopName} , {data?.shop?.ShopAddress}</h2>


                </div>
                <div className="border border-green-400 p-4 border-2 rounded-[10px] my-4">
                    <h1>Delivery Boy details</h1>
                    <h2>{data.deliveryBoy[0]?.firstName} {data.deliveryBoy[0]?.lastName}</h2>
                    <h2>{data.deliveryBoy[0]?.mobile}</h2>

                </div>
                <div className="container">
                    {steps?.map((data, i) => (
                        <div
                            key={i}
                            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                                } `}
                        >
                            <p style={{ color: "black", margin: ".5rem" }}>{data.step}</p>
                            <div className="step">
                                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                            </div>
                            <p key={i} style={{ color: "black", margin: ".5rem" }}>
                                {data.date}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='show_address border border-green-400 p-4 border-2 rounded-[10px] my-4'>
                    <h3 className="font-bold">Shipping Address</h3>
                    <ul>
                        <li>{data?.shipping_address?.full_name}</li>
                        <li>{data?.shipping_address?.address_line_1}</li>
                        <li>{data?.shipping_address?.address_line_2}</li>
                        <li>{data?.shipping_address?.landmark}</li>

                        <li>{data?.shipping_address?.city},{data?.shipping_address?.country},{data?.shipping_address?.zip} </li>
                        <li>{data?.shipping_address?.mobile}</li>

                    </ul>
                    <p></p>
                </div>

            </div>
        </>
    );
};

export default TracKOrder;