import React from "react";
import Navbar from "../Components/Navbar";
import Footer2 from "../Components/Footer2";
import style from '../Styles/Signout.module.css'
import { Link } from "react-router-dom";

const Signout = () => {
  return (
    <div>
      <Navbar />
      <div className={style.headers}>
        <p>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
        <button>Start Order</button>
      </div>
      <div className={style.sign}>
        <img src="https://t4.ftcdn.net/jpg/02/02/78/81/360_F_202788149_9sndfcPPme9zRtstjROSmyLFma2UMYaM.jpg" alt="" />
        <h1>YOU’RE SIGNED OUT.</h1>
        <h1>WE’RE GONNA MISS YOU.</h1>
        <div className={style.btn}>
            <Link to="/login"><button className={style.btn1}>Sign In</button></Link>
            <Link to="/"><button className={style.btn2}>Take Me Home</button></Link>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Signout;
