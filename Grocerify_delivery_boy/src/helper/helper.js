import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN || 'https://api.hopingminds.co.in';

/** To get data from Token */
const token = localStorage.getItem('deliverytoken')
export async function getDataFromToken() {
    if (!token) return Promise.reject("Cannot find Token");
    let decode = jwtDecode(token)
    return decode;
}

/** get User details */
export async function getDeliveryboy({ email }) {
    try {
        const { data } = await axios.get(`/api/deliveryboy`, {
            params: {
                email
            }
        });
        return { data };
    } catch (error) {
        return { error: "User not found!" }
    }
}

/** get getdeliveryorders */
export async function getdeliveryorders() {
    try {
        const { data } = await axios.get(`/api/getdeliveryorders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return { data };
    } catch (error) {
        return { error: "Data not found!" };
    }
}

export async function deliveryboyLoginWithEmail({ email, password }) {
    try {
        if (email) {
            const { data } = await axios.post('/api/deliveryboyLoginWithEmail', { email, password })
            return ({ data });
        }
    } catch (error) {
        return ({ error: "Password doesn't Match...!" })
    }
}

export async function authenticatedeliveryboy({ mobile }) {
    // console.log(mobile);
    try {
        if (mobile) {
            return await axios.post('/api/authenticatedeliveryboy', { mobile })
        }
    } catch (error) {
        return ({ error: "Deliveryboy Not Found." })
    }
}

export async function sendMobileOTP({ mobile }) {
    try {
        if (mobile) {
            return await axios.post('/api/generateMobileOTP', { mobile })
        }
    } catch (error) {
        return ({ error: "Failed sending OTP" })
    }
}

export async function verifyDeliveryboyLoginMobileOTP({ mobile, otp }) {
    try {
        if (mobile) {
            const { data } = await axios.post('/api/verifyDeliveryboyLoginMobileOTP', { mobile, otp })
            return Promise.resolve({ data })
        }
    } catch (error) {
        return Promise.reject({ error: "Wrong OTP!" })
    }
}

export const registerDeliveryBoy = async (user) => {
    console.log(user);
    try {
        if (true) {
            const res = await axios.post('/api/registerdeliveryboy', user)
            console.log(res);
            return res.status;
        }
    } catch (error) {
        console.log("Error in DeliveryBoy Registration");
    }
}


export const acceptdeliveryboyorder = async (_id, email) => {
    try {
        if (email, _id) {
            return await axios.post('/api/acceptdeliveryboyorder', { email, _id})
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export const deliverdeliveryboyorder = async (orderID) => {
    try {
        if (orderID) {
            return await axios.post('/api/deliverdeliveryboyorder', {orderID})
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export const pickupdeliveryboyorder = async (orderID) => {
    try {
        if (orderID) {
            return await axios.post('/api/pickupdeliveryboyorder', {orderID})
        }
    } catch (error) {
        return Promise.reject(error)
    }
}