import React from "react";
import Navbar from "../Components/Navbar";
import style from "../Styles/Account.module.css";
import { useNavigate } from "react-router-dom";
import Footer2 from "../Components/Footer2";

const Account = () => {
  const navigate = useNavigate();
  let isAuth = localStorage.getItem("user");
  // let Auth = localStorage.getItem("token");

  const handleSignout = () => {
    localStorage.clear();
    navigate("/signout");
  };

  return (
    <div>
      <Navbar />
      <div className={style.headers}>
        <p>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
        <button>Start Order</button>
      </div>
      <div className={style.card}>
        <div className={style.img}>
          <img
            src="https://online.kfc.co.in/static/media/Strips.4f336307.svg"
            alt=""
          />
        </div>
        <div>
          <h1>
            GOOD MORNING <br />
            {isAuth}!
          </h1>
          <p>Order History</p>
          <button onClick={handleSignout}>Sign Out</button>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Account;
