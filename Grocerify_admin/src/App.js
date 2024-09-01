import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShowProduct from './pages/ShowProduct'
import SellerDashboard from './pages/SellerDashboard'
import MerchantList from "./pages/MerchantList";
import EditMerchant from './pages/EditMerchant'
import EditShop from "./pages/EditShop";
import SwitchMerchants from "./pages/SwitchMerchants";
import ShopList from "./pages/ShopList";
import BrandOrder from "./pages/BrandOrder";
import OrderPayout from "./pages/OrderPayout";
import PayoutSetting from './pages/PayoutSetting'
import DuePayout from './pages/DuePayout'
import CompletedPayout from './pages/CompletedPayout'
import CompletedPayoutOrderList from "./pages/completedPayoutOrderList";
import BrandCategory from "./pages/BrandCategory";
import BrandCustomer from "./pages/BrandCustomer";
import OperatingZone from "./pages/OperatingZone";
import MarketingAndPromotion from "./pages/MarketingAndPromotion";
import Coupons from './pages/Coupons'
import ReferAndEarn from './pages/ReferAndEarn'
import CommunicationCenter from './pages/CommunicationCenter'
// import LoyaltyProgram from "./pages/LoyaltyProgram";
import VerifyMerchant from "./pages/VerifyMerchant";
// import ConfigurePoints from './pages/ConfigurePoints'
// import LoyalityCoupons from './pages/LoyalityCoupons'
import ShippingAndRunners from "./pages/ShippingAndRunners";
import ShippingCharges from './pages/ShippingCharges'
import VerifyDriver from "./pages/VerifyDriver";


import RunnerManagement from './pages/RunnerMangements'
import RunnerAllocationSetting from './pages/RunnerAllocationSetting'
import RunnerPayout from "./pages/RunnerPayout";
import Enquiries from "./pages/Enquiries";
import CustomersEnquiries from './pages/CustomersEnquiries'
import PartnersEnquiries from './pages/PartnersEnquires'
import Settings from "./pages/Settings";
import BrandInformation from "./pages/BrandInformation";
import BrandFeatures from './pages/BrandFeatures'
import QuickLinks from './pages/QuickLinks'
import Banners from './pages/Banners'
import OnlinePaymentSetting from './pages/OnlinePaymentSetting'
import WebSettings from "./pages/WebSettings";
import SocialLinks from './pages/SocialLinks'
import AboutUs from './pages/AboutUs'
import WebMenuSetting from "./pages/WebMenuSetting";
import WebThemeColor from "./pages/WebThemeColor";
import WebPageContent from "./pages/WebPageContent";
import Faq from "./pages/Faq";
import StaticPages from "./pages/StaticPages";
import SellerSettingsProfile from "./pages/SettingsPages/SellerSettingsProfile";
import SellerSettingsShop from "./pages/SettingsPages/SellerSettingsShop";
import SellerSettingsWallet from "./pages/SettingsPages/SellerSettingsWallet";
import Login from "./pages/Login";
import AddStoreProduct from "./pages/AddStoreProduct";
import AddProduct from "./pages/AddProduct";
import AddShop from "./pages/AddShop";
import ViewBrandOrder from "./pages/ViewBrandOrder";
import VerifyShops from "./pages/VerifyShop";
import BrandCustomerDetails from "./pages/BrandCustomerDetails";
import AddMerchant from "./pages/AddMerchant";
import AddZonePage from "./pages/AddZonePage";


function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        {/* <Route path="/login" element={<Login/> }/> */}
          <Route path="/" element={<Dashboard/> }/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/showProduct" element={<ShowProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/runner-dashboard" element={<SellerDashboard />} />
          {/* Merchant Routes */}
          <Route path="/MerchantList" element={<MerchantList />} />
          <Route path="/AddMerchant" element={<AddMerchant />} />
          <Route path="/VerifyMerchants" element={<VerifyMerchant/>} />
          <Route path="/EditMerchant" element={<EditMerchant />} />
          <Route path="/SwitchMerchants" element={<SwitchMerchants />} />
          {/* Shop routes */}
          <Route path="/ShopList" element={<ShopList />} />
          <Route path="/AddShop" element={<AddShop />} />
          <Route path="/EditShop" element={<EditShop />} />
          <Route path="/VerifyShops" element={<VerifyShops />} />
          <Route path="/addStoreProducts" element={<AddStoreProduct />} />
          {/* order Routes */}
          <Route path="/brandorder" element={<BrandOrder />} />
          <Route path="/OrderPayout" element={<OrderPayout />} />
          <Route path="/PayoutSetting" element={<PayoutSetting />} />
          <Route path="/DuePayout" element={<DuePayout />} />
          <Route path="/CompletedPayout" element={<CompletedPayout />} />
          <Route path="/OrderList" element={<CompletedPayoutOrderList />} />
          <Route path="/BrandCategory" element={<BrandCategory />} />
          <Route path="/BrandCustomer" element={<BrandCustomer />} />
          <Route path="/BrandCustomerDetails" element={<BrandCustomerDetails />} />
          <Route path="/OperatingZone" element={<OperatingZone />} />
          <Route
            path="/MarketingAndPromotion"
            element={<MarketingAndPromotion />}
          />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/ReferAndEarn" element={<ReferAndEarn />} />
          <Route path="/CommunicationCenter" element={<CommunicationCenter />} />
          {/* <Route path="/VerifyMerchent" element={<VerifyMerchant />} /> */}
          <Route path="/ShippingAndRunners" element={<ShippingAndRunners />} />
          <Route path="/ShippingCharges" element={<ShippingCharges />} />
          <Route path="/VerifyDriver" element={<VerifyDriver />} />

          <Route path="/RunnerManagement" element={<RunnerManagement />} />
          <Route path="/RunnerAllocationSetting" element={<RunnerAllocationSetting />} />
          <Route path="/RunnerPayout" element={<RunnerPayout />} />
          <Route path="/Enquiries" element={<Enquiries />} />
          <Route path="/CustomersEnquiries" element={<CustomersEnquiries />} />
          <Route path="/PartnersEnquiries" element={<PartnersEnquiries />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/BrandInformation" element={<BrandInformation />} />
          <Route path="/BrandFeatures" element={<BrandFeatures />} />
          <Route path="/Banners" element={<Banners />} />
          <Route path="/QuickLinks" element={<QuickLinks />} />
          <Route path="/OnlinePaymentSetting" element={<OnlinePaymentSetting />} />
          <Route path="/WebSettings" element={<WebSettings />} />
          <Route path="/SocialLinks" element={<SocialLinks />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="WebMenuSetting" element={<WebMenuSetting />} />
          <Route path="WebThemeColor" element={<WebThemeColor />} />
          <Route path="WebPageContent" element={<WebPageContent />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="StaticPages" element={<StaticPages />} />
          <Route path="/sellersettingsprofile" element={<SellerSettingsProfile />} />
          <Route path="/sellersettingsshop" element={<SellerSettingsShop />} />
          <Route path="/sellersettingswallet" element={<SellerSettingsWallet />} />
          
          <Route path="/viewbrandorder" element={<ViewBrandOrder/>} />
          <Route path="/addzonepage" element={<AddZonePage/>} />

        </Routes>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
