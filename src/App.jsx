// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import RileyGreenPage from "./pages/RileyGreenPage";
import TicketList from "./components/ticketlist";
import Vipticket from "./components/vipticket";
import VipCheckout from "./components/vipcheckout";
import VipPackagesPage from "./components/ VipPackages";
import Signup from "./components/Signup";
import TicketPurchase from "./components/ticketpurchase";
import Charity from "./components/Charity";
import ListenAint from "./components/ListenAint";
import VideoListPage from "./components/VideoListPage";
import VideoCard from "./components/VideoCard";
import Navbar from "./components/Admincomponents.jsx/Navber";
import TickectUserTable from "./components/Admincomponents.jsx/TickectUserTable";
import VipticketUserTable from "./components/Admincomponents.jsx/VipticketUserTable";
import SignupUserTable from "./components/Admincomponents.jsx/SignupUserTable";
import VippackageUserTable from "./components/Admincomponents.jsx/VippackageUserTable";
import CharityUserTable from "./components/Admincomponents.jsx/CharityUserTable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RileyGreenPage />} />
      <Route path="/ticketlist" element={<TicketList />} />
      <Route path="/vipticket" element={<Vipticket />} />
      <Route path="/vipcheckout" element={<VipCheckout />} />
      <Route path="/vip-packages" element={<VipPackagesPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/charity" element={<Charity />} />
      <Route path="/ticketpurchase" element={<TicketPurchase />} />
      <Route path="/ListenAint" element={<ListenAint />} />
      <Route path="/vediolist" element={<VideoCard />} />
      <Route path="/video" element={<VideoListPage />} />
      <Route path="/adminpage" element={<Navbar />} />
      <Route path="/ticketuserpage" element={<TickectUserTable />} />
      <Route path="/vipticketpage" element={<VipticketUserTable />} />
      <Route path="/signuppage" element={<SignupUserTable />} />
      <Route path="/vippackagespage" element={<VippackageUserTable />} />
      <Route path="/charitypage" element={<CharityUserTable />} />
    </Routes>
  );
}

export default App;
