import React from "react";
import css from "../Admin Styles/Nav.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  let sellername=JSON.parse(localStorage.getItem("seller"))
  return (
    <div className={css.container}>
      <div className={css.container1}>
        <img
          src="https://www.qartago.com/wp-content/uploads/2020/12/QARTAGO-2-2-1-740x367.png"
          alt=""
        />
      </div>
      <div className={css.container2}>
        <i className="fa-solid fa-user-secret"></i>
        <p style={{textTransform:"capitalize"}}>{sellername}</p>
      </div>
    </div>
  );
};

export default Navbar;
