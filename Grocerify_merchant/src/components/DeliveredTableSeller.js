import React from 'react'

const DeliveredTableSeller = () => {
  return (
    <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between bg-[#333333] text-[#FFFFFF] font-Montserrat pt-1 pb-1 pl-4">
                <p className="w-2/6">Products</p>
                <p className="w-1/6">Category</p>
                <p className="w-1/6">Price</p>
                <p className="w-1/6">Status</p>
            </div>
            <div className="flex flex-row justify-between text-[#333333] text-[14px] h-[82px] shadow-md pt-4 pb-2 pl-4">
                <div className="w-2/6 font-Gorditas flex flex-row"><img src="../assests/images/facewash.svg" />Innis free Face wash  25 gm</div>
                <div className="w-1/6 font-Gorditas">Beauty</div>
                <div className="w-1/6 font-Gorditas">$199</div>
                <div className="w-1/6 font-Gorditas">Pending</div>
            </div>

        </div>
  )
}

export default DeliveredTableSeller