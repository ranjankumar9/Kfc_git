import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Deals from "./Deals";
import Login from "./Login";
import Signup from "./Signup";
import Account from "./Account";
import Signout from "./Signout";
import Cart from "./Cart";
import AdminSignup from "../Admin/AdminSignup";
import AdminLogin from "../Admin/AdminLogin";
import AdminDashboard from "../Admin/AdminDashboard";
import AdminProducts from "../Admin/AdminProducts";
import AdminUserdetails from "../Admin/AdminUserdetails";
import Address from "./Address";
import {Payment} from "./Payment";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/board" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/userdetails" element={<AdminUserdetails />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
