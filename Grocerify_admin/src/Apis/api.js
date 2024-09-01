import axios from "axios";
export const BASE_URl = 'https://api.hopingminds.co.in/api'
// export const BASE_URl="http://localhost:8080/api"




export const getToken = () => {
    const temp = localStorage.getItem('adminDetail');
    return temp;
  };


export const fetchAllSellerData = async () => {
    try {
        const response = await fetch(`${BASE_URl}/sellers`);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const adminToken=getToken();
console.log(adminToken);


export const ApproveSeller = async (id) => {
    const data = {
        "email": id,
        "approved": true

    }
    console.log(data)
    try {
        const response = await axios.post(`${BASE_URl}/approveseller`, data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        });

        await fetchAllSellerData()
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const ApprovedShop = async (id) => {
    const data = {
        "shopID": id,
        "approved": true

    }
    console.log(data)
    try {
        const response = await axios.post(`${BASE_URl}/approveshop`, data,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        });

        await fetchAllSellerData()
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export const ApproveDriver = async (id) => {
    const data = {
        "email": id,
        "approved": true

    }
    console.log(data)
    try {
        const response = await axios.post(`${BASE_URl}/approvedeliveryboy`, data, {headers:{'Authorization':`Bearer ${adminToken}`}});

        // await fetchAllSellerData()
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllproducts = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/products`);

        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllOrders = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/getallorders`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllUsers = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/users`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getAllShops = async () => {


    try {
        const response = await axios.get(`${BASE_URl}/shops`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
export const getShopById = async (id) => {


    try {
        const response = await axios.get(`${BASE_URl}/shop?shopID=${id}`);
        console.log(response);
        return response;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


export const getAllDeliveryBoy = async () => {
    try {
       
// console.log(token);
console.log(adminToken);
        if (!adminToken) {
            throw new Error("Admin token not found or invalid.");
        }

        const response = await axios.get(`${BASE_URl}/deliveryboys`, {
            headers: {
                'Authorization': `Bearer ${adminToken}`
            }
        });

        console.log(response);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized: Please check your authorization token.');
        } else {
            console.error('Error fetching data:', error.message);
        }
        // You might want to throw the error again to handle it in the calling code.
        throw error;
    }
};
