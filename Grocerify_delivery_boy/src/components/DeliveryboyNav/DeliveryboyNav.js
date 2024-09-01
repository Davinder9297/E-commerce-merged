import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function DeliveryboyNav({info}) {
	function getExperience(date) {
        const specificDate = new Date(date);

        // Get today's date
        const todayDate = new Date();

        // Calculate the difference in years
        const differenceInYears = todayDate.getFullYear() - specificDate.getFullYear();

        // Adjust if the specific date hasn't occurred yet this year
        if (todayDate.getMonth() < specificDate.getMonth() || 
            (todayDate.getMonth() === specificDate.getMonth() && todayDate.getDate() < specificDate.getDate())) {
            differenceInYears--;
        }
        return differenceInYears
    }
    return (
		<div className="flex flex-row justify-between px-[2%]">
			<div className="flex flex-col items-center">
				<p className="text-[#333333] text-[16px] font-Montserrat font-semibold">
					Total Rides
				</p>
				<p className="text-[#777777] text-[14px] font-Montserrat">
					{info?.all_orders.length}
				</p>
			</div>
			<div className="flex flex-col items-center">
				<p className="text-[#333333] text-[16px] font-Montserrat font-semibold">
					Experience
				</p>
				<p className="text-[#777777] text-[14px] font-Montserrat">
					{getExperience(info?.join_date)} Years
				</p>
			</div>
		</div>
	)
}
