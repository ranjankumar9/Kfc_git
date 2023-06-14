import React from "react";
import css from "../Admin Styles/Sidebar.module.css";
import ReactSpeedometer from "react-d3-speedometer";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("sellertoken")
    navigate("/")
  }
  return (
    <div className={css.sidebar}>
      <div className={css.sidebar1}>
        <div className={css.side} onClick={() => navigate('/admin/board')}>
          <i className="fa-solid fa-plus"></i>
          <button>Add Products</button>
        </div>
        <div className={css.side} onClick={() => navigate('/admin/products')}>
          <i className="fa-solid fa-puzzle-piece"></i>
          <button>Products</button>
        </div>
        <div className={css.side} onClick={() => navigate('/admin/userdetails')}>
          <i className="fa-solid fa-user"></i>
          <button>User Details</button>
        </div>
        <div className={css.side} onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <button>Log Out</button>
        </div>
      </div>
      <div className={css.con2}>
        <ReactSpeedometer
          value={575}
          labelFontSize={"31px"}
          valueTextFontSize={"37px"}
          valueTextFontWeight={"500"}
          paddingHorizontal={17}
          paddingVertical={17}
          currentValueText={"Value: ${value}"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
