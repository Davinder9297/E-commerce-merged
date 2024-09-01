import './App.css';
import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from './api/api';
import MoreStore from "./pages/MoreStore";
import StoreProduct from './pages/StoreProduct';
import ContactUs from "./pages/ContactUs";
import PaymentOptions from "./pages/PaymentOptions";
import BilingDetails from "./pages/BilingDetails";
import HotDeals from "./pages/HotDeals";
import YourAccount from "./pages/YourAccount";
import StoreFeatured from "./pages/StoreFeatured";
import { SellerSideMenuProvider } from './components/SellerSideMenuContext';

import SellerLogin from './pages/SellerLogin';
import ForgetPassword from './pages/ForgetPassword';
import Otp from './pages/Otp';
import SellerShopRegistration from './pages/SellerShopRegistration';
import SellerDashboard from './pages/SellerDashboard';
import SellerOrder from './pages/SellerOrder';
import SellerInventory from './pages/SellerInventory';
import SellerDiscount from './pages/SellerDiscount';
import SellerProduct from './pages/SellerProduct';
import SellerAnalytics from './pages/SellerAnalytics';
import SellerAnalyticRevenue from './pages/SellerAnalyticRevenue';
import SellerAnalyticOrder from './pages/SellerAnalyticOrder';
import SellerAnalyticEarning from './pages/SellerAnalyticEarning';
import SellerSettings from './pages/SellerSettings';
import SellerSettingsProfile from './pages/SellerSettingsProfile';
import SellerSettingsShop from './pages/SellerSettingsShop';
import SellerSettingsWallet from './pages/SellerSettingsWallet';
import SellerProfile from './pages/SellerProfile';
import SellerNotification from './pages/SellerNotification';
import ChatBot from './components/ChatBot';
import AddProduct from './pages/add_product';
import axios from 'axios';
import Customers from './pages/Customers';
import GetOrderDetails from './pages/getOrderdetails';
import RequestProduct from './pages/RequestProduct';


export const GlobalInfo = createContext()

function App() {

  const [sellerDetails, setSellerDetails] = useState();


  useEffect(() => {
    getSellerDetails();

  }, [localStorage.getItem('token')])


  const getSellerDetails = async () => {
    const token = localStorage.getItem('token')
    // console.log(token)
    if (token) {
      const decoded = jwtDecode(token);
      // console.log(decoded.email)
      try {
        const res = await axios.get(`${BASE_URL}api/seller?email=${decoded.email}`)
        // console.log(res.data.data)
        setSellerDetails(res.data.data)

      } catch (error) {
        console.log(error)
      }
    }
    else {
      setSellerDetails({})
    }
  }

  return (
    <BrowserRouter>
      <GlobalInfo.Provider value={{ sellerDetails, getSellerDetails }}>
        <SellerSideMenuProvider>
          <Routes>
            <Route exact path={"/stores"} element={<StoreFeatured />}></Route>
            <Route exact path={"/morestore"} element={<MoreStore />}></Route>
            <Route exact path={"/storeproduct"} element={<StoreProduct />}></Route>
            <Route exact path={"/contactus"} element={<ContactUs />}></Route>
            <Route exact path={"/payment"} element={<PaymentOptions />}></Route>
            <Route exact path={"/biling"} element={<BilingDetails />}></Route>
            <Route exact path={"/hotdeals"} element={<HotDeals />}></Route>
            <Route exact path={"/youraccount"} element={<YourAccount />}></Route>

            <Route exact path={"/forgetpassword"} element={<ForgetPassword />}></Route>
            <Route exact path={"/otp"} element={<Otp />}></Route>
            <Route exact path={"/sellershopregistration"} element={<SellerShopRegistration />}></Route>
            <Route exact path={"/sellerdashboard"} element={<SellerDashboard />}></Route>
            <Route exact path={"/"} element={<SellerDashboard />}></Route>
            <Route exact path={"/sellerorder"} element={<SellerOrder />}></Route>
            <Route exact path={"/sellerinventory"} element={<SellerInventory />}></Route>
            <Route exact path={"/sellerdiscount"} element={<SellerDiscount />}></Route>
            <Route exact path={"/sellerproduct"} element={<SellerProduct />}></Route>
            <Route exact path={"/selleranalytics"} element={<SellerAnalytics />}></Route>
            <Route exact path={"/selleranalyticrevenue"} element={<SellerAnalyticRevenue />}></Route>
            <Route exact path={"/selleranalyticorder"} element={<SellerAnalyticOrder />}></Route>
            <Route exact path={"/selleranalyticearning"} element={<SellerAnalyticEarning />}></Route>
            <Route exact path={"/sellersettings"} element={<SellerSettings />}></Route>
            <Route exact path={"/sellersettingsprofile"} element={<SellerSettingsProfile />}></Route>
            <Route exact path={"/sellersettingsshop"} element={<SellerSettingsShop />}></Route>
            <Route exact path={"/sellersettingswallet"} element={<SellerSettingsWallet />}></Route>
            <Route exact path={"/sellerprofile"} element={<SellerProfile />}></Route>
            <Route exact path={"/sellernotification"} element={<SellerNotification />}></Route>
            <Route exact path={"/chats"} element={<ChatBot />}></Route>
            <Route exact path={"/add_product"} element={<AddProduct />}></Route>
            <Route exact path={"/customers"} element={<Customers />}></Route>
            <Route exact path={"/getorderdetails"} element={<GetOrderDetails/>}></Route>
            <Route exact path={"/requestproduct"} element={<RequestProduct/>}></Route>

          </Routes>
        </SellerSideMenuProvider>
      </GlobalInfo.Provider>
    </BrowserRouter>
  );
}

export default App;
