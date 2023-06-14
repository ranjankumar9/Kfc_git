import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "../Styles/Home.module.css";
import Footer from "../Components/Footer";
import Footer2 from "../Components/Footer2";
// import { useToast } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  // const toast = useToast();
  const handleToast = () => {
    console.log("click");
    toast("🦄 Wow we Have Created a Location for you!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  let isAuth = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  // console.log(isAuth)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className={styles.Home}>
      {loading ? (
        <div className={styles.loader}>
          <img src="https://i.gifer.com/XOsX.gif" alt="" />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className={styles.headers}>
            <p>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
            <button onClick={handleToast}>Start Order</button>
          </div>
          <div className={styles.slider}>
            <img src="https://i.ibb.co/JF4NbHY/image-description.jpg" alt="" />
          </div>
          <div className={styles.welcome}>
            <div className={styles.lines}></div>
            {isAuth ? (
              <h1 className={styles.user}>WELCOME BACK {user}!</h1>
            ) : (
              <h1>WELCOME TO KFC!</h1>
            )}
          </div>
          {/* --------------------------------Main header -------------------------------------------------- */}
          <div className={styles.categories}>
            <h1>BROWSE CATEGORIES</h1>
            <div className={styles.horizontal}></div>
          </div>
          <div className={styles.card}>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>PERI PERI MATCH SPECIALS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>CHICKEN ROLLS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>CHICKEN BUCKETS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>BIRYANI BUCKETS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=27.37"
                  alt="kfc"
                />
                <div className={styles.ind}>
                  <h1>BOX MEALS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>BURGERS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>SNACKS</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div className={styles.child}>
                <img
                  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT92.jpg?ver=27.37"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>BEVERAGES</h1>
                </div>
              </div>
            </Link>
            <Link to="/menu">
              <div>
                <img
                  src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
                  alt=""
                />
                <div className={styles.ind}>
                  <h1>View All Menu &rarr;</h1>
                </div>
              </div>
            </Link>
          </div>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Footer />
          <Footer2 />
        </div>
      )}
    </div>
  );
};

export default Home;
