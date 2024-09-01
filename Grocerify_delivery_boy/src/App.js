import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import SendOtp from "./pages/login/SendOtp";
import ForgotPassword from "./pages/login/ForgotPassword";
import NewPassword from "./pages/login/NewPassword";
import Register from "./pages/register/Register";
import MyActivity from "./pages/myActivity/MyActivity";
import Accept from "./pages/accept/Accept";
import Map1 from "./pages/map1/Map1";
import PickedUp from "./pages/pickedUp/PickedUp";
import Profile from "./pages/profile/Profile";
import MyInfo from "./pages/myInfo/MyInfo";
import Contact from "./pages/contact/Contact";
import Address from "./pages/address/Address";
import Earnings from "./pages/earnings/Earnings";
import Feedback from "./pages/feedback/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<MyActivity />}></Route>
        <Route exact path={"/sendOtp"} element={<SendOtp />}></Route>
        <Route exact path={"/forgotPassword"} element={<ForgotPassword />}></Route>
        <Route exact path={"/newPassword"} element={<NewPassword />}></Route>
        <Route exact path={"/register"} element={<Register />}></Route>
        <Route exact path={"/myActivity"} element={<MyActivity />}></Route>
        <Route exact path={"/accept"} element={<Accept />}></Route>
        <Route exact path={"/map1"} element={<Map1 />}></Route>
        <Route exact path={"/pickedUp"} element={<PickedUp />}></Route>
        <Route exact path={"/profile"} element={<Profile />}></Route>
        <Route exact path={"/myInfo"} element={<MyInfo />}></Route>
        <Route exact path={"/contact"} element={<Contact />}></Route>
        <Route exact path={"/address"} element={<Address />}></Route>
        <Route exact path={"/earnings"} element={<Earnings />}></Route>
        <Route exact path={"/feedback"} element={<Feedback />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
