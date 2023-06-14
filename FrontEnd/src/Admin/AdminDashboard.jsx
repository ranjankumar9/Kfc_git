import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import css from "../Admin Styles/Dashboard.module.css";
import AddProducts from "./Components/AddProduct";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className={css.admin}>
        <div className={css.con1}>
          <Sidebar />
        </div>
        <div className={css.admin2}>
          <AddProducts />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
