import axios from 'axios';
import { BASE_URl } from '../Apis/api';

export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero indexed, so add 1
    const year = date.getFullYear() % 100; // Get last two digits of the year

    // Ensure single digit day and month are prefixed with '0'
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
}




axios.defaults.baseURL = BASE_URl;

/** get User details */
export async function getSeller({ email }){
    try {
        const { data } = await axios.get(`/api/seller`, {params:{
            email
        }});
        return { data };
    } catch (error) {
        return { error : "User not found!"}
    }
}

export async function sellerLoginWithEmail({email, password}){
    try {
        if(email){
            const { data } = await axios.post('/api/sellerloginwithemail', {email, password})
            return ({ data });
        }
    } catch (error) {
        return ({ error : "Password doesn't Match...!"})
    }
}

export async function authenticateseller({ mobile }){
    console.log(mobile);
    try {
        if(mobile){
            return await axios.post('/api/authenticateseller', { mobile })
        }
    } catch (error) {
        return ({ error : "Seller Not Found."})
    }
}

export async function sendMobileOTP({mobile}) {
    try {
        if(mobile){
            return await axios.post('/api/generateMobileOTP', { mobile })
        }
    } catch (error) {
        return ({ error : "Failed sending OTP"})
    }
}

export async function verifySellerLoginMobileOTP({mobile, otp}) {
    try {
        if (mobile) {
            const { data } = await axios.post('/api/verifySellerLoginMobileOTP', {mobile, otp})
            return Promise.resolve({ data })
        }
    } catch (error) {
        return Promise.reject({ error : "Wrong OTP!"})
    }
}
