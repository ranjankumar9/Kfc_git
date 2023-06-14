import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import css from "../Admin Styles/Dashboard.module.css";
import UserDetails from "./Components/UserDetails";

const AdminUserdetails = () => {
  return (
    <div>
      <Navbar />
      <div className={css.admin}>
        <div className={css.con1}>
          <Sidebar />
        </div>
        <div className={css.admin2}>
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default AdminUserdetails;
