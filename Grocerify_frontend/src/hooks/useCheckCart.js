import { useContext } from "react"
import { Globalinfo } from "../App"
import { BASE_URL } from "../Api/api"

export const useCheckCart = () => {
    const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails } = useContext(Globalinfo)

    const checkIfSameStore = async (id, storeid) => {
        console.log(storeid)
        if (cartData.length > 0) {
            console.log(cartData);
            if (cartData[0].shopID._id == storeid) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true
        }
       
    }

    const emptyCart = async () => {
        try {
            let url2 = BASE_URL + 'api/removefromcart'
            let bodydata2 = { mobile: userDetail?.mobile, operation: "deleteCart" }
            console.log(bodydata2)

            const data2 = await fetch(url2, {
                method: 'post',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(bodydata2)
            });
            const response = await data2.json()
            console.log(response);
            GetCart()
            getUserDetails()
            return response

        } catch (error) {
            console.log(error)

        }
    }

    return { checkIfSameStore,emptyCart };


}


// export const useEmptyCart = async () => {
//     const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails, checkoutData, setCheckoutData } = useContext(Globalinfo)

   

//     return { emptyCart }



// }