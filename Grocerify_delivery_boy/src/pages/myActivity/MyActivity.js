import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import '../myActivity/myActivity.css'
import { ReactComponent as Loc } from '../../assests/icons/location.svg'
import { ReactComponent as Shop } from '../../assests/icons/shop.svg'
import { ReactComponent as Time } from '../../assests/icons/time.svg'
import toast, { Toaster } from 'react-hot-toast'
import { getDataFromToken, getDeliveryboy, getdeliveryorders } from '../../helper/helper'
import Login from '../login/Login'
import Spinner from '../../components/Spinner'

// accept delivery - accept

const MyActivity = () => {
	const [location, setLocation] = useState(null)
	const [city, setCity] = useState(null)
	const [deliveryData, setDeliveryData] = useState(null)
	const [selectedStatus, setSelectedStatus] = useState('To Deliver')
	const [info, setInfo] = useState(null)
	const [show, setshow] = useState(false)
	let navigate=useNavigate()
	async function getData() {
		setshow(true)
		const { email } = await getDataFromToken()

		const data = await getDeliveryboy({ email })
		setInfo(data?.data?.data)
		setshow(false)
	}

	useEffect(() => {
		getData()
	}, [])

	const handleStatusClick = (status) => {
		setSelectedStatus(status)
	}

	async function fetchdeliveryorders() {
		const data = await getdeliveryorders()
		setDeliveryData(data?.data?.orders)
	}
	function handleAccept(path) {
		// console.log(path);
		const toggleValue = localStorage.getItem('toggle');
		// console.log("Toggle Value:", toggleValue);
		if (toggleValue !== 'true') {
			toast.error('Your shift is not active');
		} else {
			navigate(path);
		}
	}

	useEffect(() => {
		fetchdeliveryorders()
	}, [])

	const handleLocClick = () => {
		if (navigator?.geolocation) {
			navigator?.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords
					setLocation({ latitude, longitude })

					// Use reverse geocoding to get city name
					const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'
					const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`

					try {
						const response = await fetch(apiUrl)
						const data = await response.json()

						if (data?.results && data?.results.length > 0) {
							const addressComponents =
								data?.results[0].address_components
							const cityComponent = addressComponents.find(
								(component) =>
									component.types.includes('locality')
							)

							if (cityComponent) {
								setCity(cityComponent.long_name)
							} else {
								console.error(
									'City not found in address components'
								)
							}
						} else {
							console.error(
								'No results found from reverse geocoding'
							)
						}
					} catch (error) {
						console.error('Error fetching city:', error)
					}
				},
				(error) => {
					console.error('Error getting location:', error)
					// Handle errors, e.g., show an error message to the user
				}
			)
		} else {
			console.error('Geolocation is not supported by this browser')
			// Handle the case where geolocation is not supported
		}
	}

	const renderCards = () => {
		switch (selectedStatus) {
			case 'To Deliver':
				return (
					<div className="flex flex-col gap-6">
						{deliveryData?.map((data, index) => {
							return (
								<div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2" key={index}>
									<div className="flex flex-row justify-between items-center">
										<p className="text-[#333333] text-[18px] font-Montserrat font-black">
											#{data?.order_id}
										</p>
											<button onClick={()=>handleAccept('/accept?id='+data?._id)} className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
												Accept Delivery <br /> ₹{data?.shop?.deliveryCharges}
											</button>
									</div>
									<div className="flex flex-col gap-2">
										<div className='text-[#333333] text-[14px] font-Montserrat	font-semibold'>
											<p>Ordered by : {data?.ordered_by?.firstName} {data?.ordered_by?.lastName}</p>
											<p>Shop : {data?.shop?.shopName}</p>
										</div>
										<div className="flex flex-row gap-2 items-center">
											<Shop className="w-[30px] h-[30px]" />
											<div className="flex flex-col">
												<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
													Shop Address
												</p>
												<p className="text-[#333333] text-[10px] font-Montserrat">
													{data?.shop?.ShopAddress}
												</p>
											</div>
										</div>
										<div className="flex flex-row gap-2 items-center">
											<Loc className="w-[30px] h-[30px]" />
											<div className="flex flex-col">
												<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
													Delivery Address
												</p>
												<p className="text-[#333333] text-[10px] font-Montserrat">
													{data?.shipping_address?.address_line_1}, {data?.shipping_address?.address_line_2}, {data?.shipping_address?.landmark}, {data?.shipping_address?.city}, {data?.shipping_address?.state}, {data?.shipping_address?.country} - {data?.shipping_address?.zip}
												</p>
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				)
			case 'Processing':
				return (
					<div className="flex flex-col gap-6">
						{info?.all_orders?.map((order, id) => {
							if (order?.status != "delivered") {
								return (
									<div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2" key={id}>
										<div className="flex flex-row justify-between items-center">
											<p className="text-[#333333] text-[18px] font-Montserrat font-black">
												#{order?.order_id}
											</p>
											{order?.status == 'processed' ?
													<button  onClick={()=>handleAccept(`/map1?id=${order?._id}`)} className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
														Pick Up Order<br />
													</button>
												:
													<button onClick={()=>handleAccept(`/pickedUp?id=${order?._id}`)} className="text-[#FFFFFF] text-[14px] font-Montserrat font-semibold w-[141px] px-3 py-1 leading-5 rounded-lg h-[48px] bg-[#58B310]">
														Deliver Order <br />
													</button>
											}
										</div>
										<div className="flex flex-col gap-2">
											{/* <div className="flex flex-row gap-2 items-center">
												<Shop className="w-[30px] h-[30px]" />
												<div className="flex flex-col">
													<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
														Shop Address
													</p>
													<p className="text-[#333333] text-[10px] font-Montserrat">
														150th Street, Near Cascade
														Restaurant
													</p>
												</div>
											</div> */}
											<div className="flex flex-col">
												<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
													Customer name
												</p>
												<p className="text-[#333333] text-[14px] font-Montserrat">
													{order?.shipping_address?.full_name	}
												</p>
											</div>
											<div className="flex flex-row gap-2 items-center">
												<Loc className="w-[30px] h-[30px]" />
												<div className="flex flex-col">
													<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
														Delivery Address
													</p>
													<p className="text-[#333333] text-[10px] font-Montserrat">
														{order?.shipping_address?.address_line_1}, {order?.shipping_address?.address_line_2},
														{order?.shipping_address?.city}, {order?.shipping_address?.state} - {order?.shipping_address?.zip}
													</p>
												</div>
											</div>
											{/* <div className="flex flex-row gap-10 justify-center mt-4">
												<div className="flex flex-col items-center">
													<Time className="w-[25px] h-[25px]" />
													<p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
														Pick up time
													</p>
													<p className="text-[#979797] text-[12px] font-Montserrat">
														10:00 a.m
													</p>
												</div>
												<div className="flex flex-col items-center">
													<Time className="w-[25px] h-[25px]" />
													<p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
														Delivery time
													</p>
													<p className="text-[#979797] text-[12px] font-Montserrat">
														10:00 a.m
													</p>
												</div>
											</div> */}
										</div>
									</div>
								)
							}
						})}
					</div>
				)
			case 'Delivered':
				return (
					<div className="flex flex-col gap-6">
						{info?.all_orders?.map((order, id) => {
							console.log(order);
							if (order?.status === "delivered") {
								return (
									<div className="flex flex-col rounded-xl shadow-md px-6 py-4 gap-2" key={id}>
										<div className="flex flex-row justify-between items-center">
											<p className="text-[#333333] text-[18px] font-Montserrat font-black">
												#{order?.order_id}
											</p>
											<p className="text-[#333333] text-[18px] font-Montserrat font-black">
											₹{order?.order_price}
											</p>

										</div>
										<div className="flex flex-col gap-2">
											{/* <div className="flex flex-row gap-2 items-center">
												<Shop className="w-[30px] h-[30px]" />
												<div className="flex flex-col">
													<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
														Shop Address
													</p>
													<p className="text-[#333333] text-[10px] font-Montserrat">
														150th Street, Near Cascade
														Restaurant
													</p>
												</div>
											</div> */}
											<div className="flex flex-row gap-2 items-center">
											<div className="flex flex-col">
												<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
													Customer name
												</p>
												<p className="text-[#333333] text-[14px] font-Montserrat">
													{order?.shipping_address?.full_name	}
												</p>
											</div>
										</div>
											<div className="flex flex-row gap-2 items-center">
												<Loc className="w-[30px] h-[30px]" />
												<div className="flex flex-col">
													<p className="text-[#333333] text-[14px] font-Montserrat font-bold">
														Delivery Address
													</p>
													<p className="text-[#333333] text-[10px] font-Montserrat">
														{order?.shipping_address?.address_line_1}, {order?.shipping_address?.address_line_2},
														{order?.shipping_address?.city}, {order?.shipping_address?.state} - {order?.shipping_address?.zip}
													</p>
												</div>
											</div>
											{/* <div className="flex flex-row gap-10 justify-center mt-4">
												<div className="flex flex-col items-center">
													<Time className="w-[25px] h-[25px]" />
													<p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
														Pick up time
													</p>
													<p className="text-[#979797] text-[12px] font-Montserrat">
														10:00 a.m
													</p>
												</div>
												<div className="flex flex-col items-center">
													<Time className="w-[25px] h-[25px]" />
													<p className="text-[#333333] text-[12px] font-Montserrat font-bold mt-2">
														Delivery time
													</p>
													<p className="text-[#979797] text-[12px] font-Montserrat">
														10:00 a.m
													</p>
												</div>
											</div> */}
										</div>
									</div>
								)
							}
						})}
					</div>
				)
			default:
				return null
		}
	}

	return (
		<>
			<Toaster />
			{localStorage.getItem('deliverytoken') ?
			<div className="flex justify-center bg-gray-100">
				<div className="flex flex-col gap-8 w-[430px] h-[840px] my-[3%] overflow-y-auto scrollable-content bg-white">
					<Header />
					<div className="flex flex-row justify-between px-5 items-center">
						<p className="text-[#333333] text-[20px] font-Gorditas font-semibold flex text-center">
							My Activity
						</p>
						<div className="flex flex-row items-center gap-1">
							<Loc
								onClick={handleLocClick}
								style={{ cursor: 'pointer' }}
								className="w-[25px] h-[25px]"
							/>
							{location && (
								<div>
									<p>Latitude: {location.latitude}</p>
									{/* <p>Longitude: {location.longitude}</p> */}
									{city && <p>City: {city}</p>}
								</div>
							)}
						</div>
					</div>

					{/* nav */}
					<div className="flex flex-row justify-between px-5">
						<p
							className={`cursor-pointer ${selectedStatus === 'To Deliver'
									? 'text-[#58B310] underline'
									: 'text-[#909090]'
								} text-[16px] font-Montserrat`}
							onClick={() => handleStatusClick('To Deliver')}
						>
							To Deliver
						</p>
						<p
							className={`cursor-pointer ${selectedStatus === 'Processing'
									? 'text-[#58B310] underline'
									: 'text-[#909090]'
								} text-[16px] font-Montserrat`}
							onClick={() => handleStatusClick('Processing')}
						>
							Processing
						</p>
						<p
							className={`cursor-pointer ${selectedStatus === 'Delivered'
									? 'text-[#58B310] underline'
									: 'text-[#909090]'
								} text-[16px] font-Montserrat`}
							onClick={() => handleStatusClick('Delivered')}
						>
							Delivered
						</p>
					</div>

					{/* cards */}
					<div className="flex flex-col gap-6 px-6">
						{renderCards()}
					</div>
					{show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
				</div>
			</div> : <Login/>}
		</>
	)
}

export default MyActivity
