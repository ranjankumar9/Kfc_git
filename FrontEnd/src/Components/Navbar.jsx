import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  let isAuth = localStorage.getItem("token");
  // let user = JSON.parse(localStorage.getItem('user'))

  const handleBurger = () => {
    setHamburger(!hamburger);
  };
  const handelClose = () => {
    setHamburger(!hamburger);
  };
  const handleLogout = () => {
    navigate("/account");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.burger} onClick={handleBurger}>
        <i className="fa-sharp fa-solid fa-bars"></i>
      </div>
      <div
        className={styles.modal}
        style={{ display: `${hamburger ? "inline" : "none"}` }}
      >
        <p onClick={handelClose} className={styles.close}>
          &#x2715;
        </p>
        <h1>LET'S GET COOKIN'</h1>
        <div className={styles.drop} onClick={() => navigate("/menu")}>
          <p>MENU</p>
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/4k2cm92M32R26grdRRbI3B/e335a7a29e35e5d7aa1900a7f65eea12/menu__1.png"
            alt=""
          />
        </div>
        <div className={styles.drop} onClick={() => navigate("/deals")}>
          <p>DEALS</p>
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/4k2cm92M32R26grdRRbI3B/e335a7a29e35e5d7aa1900a7f65eea12/menu__1.png"
            alt=""
          />
        </div>
        <p>Get Help</p>
        <p>Contact Us</p>
        <p>KFC Feedback</p>
        <p>Privancy Policy</p>
      </div>
      <div className={styles.nav1}>
        <img
          onClick={() => navigate("/")}
          src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
          alt="KFC"
        />
        <p onClick={() => navigate("/menu")}>Menu</p>
        <p onClick={() => navigate("/deals")}>Deals</p>
      </div>
      <div className={styles.nav2}>
        <div className={styles.accordin}>
          {isAuth ? (
            <div onClick={handleLogout}>
              <i className="fa-solid fa-user-tie"></i>
              <p>Account</p>
            </div>
          ) : (
            <div onClick={() => navigate("/signup")}>
              <i className="fa-solid fa-user-tie"></i>
              <p>Sign In</p>
            </div>
          )}
          <Link to="/admin/signup"><ul className={styles.model5}>
            <i className="fa-solid fa-unlock"></i>
            <li>Admin</li>
          </ul></Link>
        </div>

        <div className={styles.vertical}></div>
        {/* <span>₹0</span> */}
        {isAuth ? (
          <img
            onClick={() => navigate("/cart")}
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
            alt=""
          />
        ) : (
          <img
            onClick={() =>
              toast({
                title: "CartItem",
                description: "Please Login First",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
            }
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
