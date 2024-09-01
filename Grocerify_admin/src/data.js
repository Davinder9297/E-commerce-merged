import { useState, useEffect } from 'react';
import { IoMdCart } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GiRunningNinja } from "react-icons/gi";
import { fetchAllSellerData, getAllDeliveryBoy, getAllOrders, getAllUsers, getAllproducts } from "./Apis/api";


export let dashboardItems = [
    {
        id: 1,
        icon: IoMdCart,
        title: 'Total Orders',
        value: 19,
        color: 'blue',
        link: ''
    },
    {
        id: 2,
        icon: MdOutlineDeliveryDining,
        title: 'Delivery Orders',
        value: 19,
        color: 'blue',
        link: ''
    },

    {
        id: 3,
        icon: GiReceiveMoney,
        title: 'Total Revenue',
        value: '₹9655.56',
        color: 'green'
    },
    {
        id: 4,
        icon: GiTakeMyMoney,
        title: 'Total Products',
        value: '₹81.03',
        color: 'yellow'
    },
    {
        id: 5,
        icon: FaUsers,
        title: 'Total Customers',
        value: 8,
        color: 'teal'
    },
    {
        id: 6,
        icon: RiCoupon2Fill,
        title: 'Total Coupons',
        value: 2,
        color: 'amber'
    },
    {
        id: 7,
        icon: SiHomeassistantcommunitystore,
        title: 'Total Merchants',
        value: 10,
        color: 'purple'
    },
    {
        id: 8,
        icon: GiRunningNinja,
        title: 'Total Runners',
        value: 6,
        color: 'voilet'
    },

]



const fetchDataAndUpdate = async () => {
    try {
        const sellers = await fetchAllSellerData();
        const products = await getAllproducts();
        const orders = await getAllOrders();
        const users = await getAllUsers();
        const deliveryBoys = await getAllDeliveryBoy();
        // const orders = await get
        console.log(orders.data.orders)
        const totalSeller = sellers.sellers.length;
        const totalProducts = products.data.length;
        const totalOrders = orders.data.orders.length;
        const totalUsers = users.data.data.length;
        const totaldeliveryboys = deliveryBoys.data.deliveryboys.length;

        const totalrevenue = orders.data.orders.reduce((val, acc) =>
            val + acc.order_price, 0
        )

        console.log(totalrevenue)

        const updatedData = dashboardItems.map(item => {
            if (item.id === 7) {
                return { ...item, value: totalSeller };
            } else if (item.id === 4) {
                return { ...item, value: totalProducts };
            }
            else if (item.id === 1) {
                return { ...item, value: totalOrders };
            }
            else if (item.id === 5) {
                return { ...item, value: totalUsers };
            }
            else if (item.id === 3) {
                return { ...item, value: "₹ " + totalrevenue };
            }
            else if (item.id === 8) {
                return { ...item, value: + totaldeliveryboys };
            }
            // Add more conditions for other items
            return item;
        });
        // console.log(updatedData)
        return updatedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const useDataWithAPI = () => {
    const [dataWithAPI, setDataWithAPI] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const updatedData = await fetchDataAndUpdate();
            // console.log(updatedData)
            setDataWithAPI(updatedData);
        };

        fetchData();
    }, []);

    return dataWithAPI;
};

export default useDataWithAPI;



