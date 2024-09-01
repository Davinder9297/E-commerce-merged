import axios from 'axios';
import { BASE_URL } from '../api/api';;

axios.defaults.baseURL = BASE_URL;

/** get User details */

let token=localStorage.getItem('token')

export async function getOrderByShop() {
    try {
        if(token){
        const { data } = await axios.get(`api/ordersbyshop`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        },)
        return { data };
   } } catch (error) {
        return { error: "Orders not found!" }
    }
}
export async function acceptOrder(id) {
    try {
        if(token){
        const data = await axios.post(`api/acceptshoporder`, { "orderID": id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        },)
        return data;
   } } catch (error) {
        return { error: "Not Not accepted" }
    }
}

export async function DeclineOrder(id) {
    try {
        if(token){
        const data = await axios.post(`api/cancelshoporder`, { "orderID": id }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        },)
        return data;
   } } catch (error) {
        return { error: "Error While Declining" }
    }
}
export async function getSeller({ email }) {
    try {
        if(token){
        const { data } = await axios.get(`api/seller`, {
            params: {
                email
            }
        });
        return { data };
   } } catch (error) {
        return { error: "User not found!" }
    }
}

export async function sellerLoginWithEmail({ email, password }) {
    try {
        if (email) {
            const { data } = await axios.post('api/sellerloginwithemail', { email, password })
            return ({ data });
        }
    } catch (error) {
        return ({ error: "Password doesn't Match...!" })
    }
}

export async function authenticateseller({ mobile }) {
    try {
        if (mobile) {
            return await axios.post('api/authenticateseller', { mobile })
        }
   } catch (error) {
        return ({ error: "Seller Not Found." })
    }
}

export async function sendMobileOTP({ mobile }) {
    try {
        
        if (mobile) {
            return await axios.post('api/generateMobileOTP', { mobile })
        }
   } catch (error) {
        return ({ error: "Failed sending OTP" })
    }
}

export async function verifySellerLoginMobileOTP({ mobile, otp }) {
    try {
        if (mobile) {
            const { data } = await axios.post('api/verifySellerLoginMobileOTP', { mobile, otp })
            return Promise.resolve({ data })
        }
   } catch (error) {
        return Promise.reject({ error: "Wrong OTP!" })
    }
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2); // Get last two digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if month is single digit
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero if day is single digit
    return `${month}/${day}/${year}`;
}