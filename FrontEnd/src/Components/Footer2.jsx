import React, { useState } from "react";
import style from "../Styles/Footer2.module.css";

const Footer2 = () => {
    const [modal,setModal] = useState(false)
    const handlemodal = () => {

    }
  return (
    <div className={style.mainfooter}>
      <div className={style.container}>
        <div className={style.container1}>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt=""
          />
        </div>
        <div className={style.container2}>
          <p onClick={handlemodal}>KFC Food</p>
          <div className={style.child1} >
            <p>Menu</p>
            <p>Order Lookup</p>
            <p>Gift Card</p>
            <p>Nutrition & Allergen</p>
          </div>
        </div>
        <div className={style.container3}>
          <p>Support</p>
          <div className={style.child1}>
            <p>Get Help</p>
            <p>Contact Us</p>
            <p>KFC Feedback</p>
            <p>Privancy Policy</p>
          </div>
        </div>
        <div className={style.container4}>
          <p>Legal</p>
          <div className={style.child1}>
            <p>Terms and Conditions</p>
            <p>Privancy Policy</p>
            <p>Disclaimer</p>
            <p>Caution Notice</p>
          </div>
        </div>
        <div className={style.container5}>
          <p>KFC India</p>
          <div className={style.child1}>
            <p>About KFC</p>
            <p>KFC Care</p>
            <p>Careers</p>
            <p>Our Golden Past</p>
          </div>
        </div>
        <div className={style.container6}>
          <i className="fa-solid fa-location-dot"></i>
          <p>Find a KFC</p>
        </div>
        <div className={style.container7}>
          <p>Download APP</p>
        </div>
        <div className={style.container8}>
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
            alt=""
          />
        </div>
      </div>
      <p className={style.copy}>Copyright © KFC Corporation 2021 All Rights Reserved</p>
      <div>
        
      </div>
    </div>
  );
};

export default Footer2;
