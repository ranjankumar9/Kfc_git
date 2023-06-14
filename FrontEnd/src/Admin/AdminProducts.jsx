import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import css from "../Admin Styles/Dashboard.module.css";
import Products from "./Components/Products";

const AdminProducts = () => {
  return (
    <div>
      <Navbar />
      <div className={css.admin}>
        <div className={css.con1}>
          <Sidebar />
        </div>
        <div className={css.admin2}>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
