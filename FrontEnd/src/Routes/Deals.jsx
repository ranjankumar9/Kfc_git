import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import style from "../Styles/Deals.module.css";
import Footer2 from "../Components/Footer2";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Deals = () => {
  const [modal, setModal] = useState(false)

  const handleClose = () => {
    setModal(false)
  }

  const handleModal = () => {
    setModal(true)
    console.log("click")
  }

  return (
    <div>
      <Navbar />
      <div className={style.headers}>
        <p>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
        <button>Start Order</button>
      </div>
      <div className={style.hole}>
        {/* <!-- Navbar bar --> */}
        <div className={style.dealsNavbar}></div>
        <div className={style.container1}>
          <h2 className={style.deals}>
            DEALS & OFFERS
          </h2>
        </div>
        <div className={style.lines}>
          <img src="../Images/lines.png" alt="" />
        </div>
        <div className={style.container2}>
          <h2>NATIONAL OFFERS</h2>
          <button>Sign in to see exclusive offers & deals</button>
        </div>
        <div className={style.v1}>
          <header className={style.header}>
            <h2>OFFERS & DEALS</h2>
            <button></button>
          </header>
          <section>
            <h3>
              ADD 2 PC HOT N CRISPY CHICKEN @ JUST RS 99 ON MIN CART VALUE OF RS
              499 OR MORE. APPLICABLE ON 2ND & 3RD ORDER FOR SIGNED IN USER.
            </h3>
            <p>Valid to 31/12/30</p>
            <p>
              Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs
              499 or more. Applicable on 2nd & 3rd order for signed in user.
            </p>
          </section>
          <footer>
            <button>Redeem</button>
          </footer>
        </div>
        <div className={style.main}>
          <div className={style.maindiv1}>
            <h3 className={style.a}>SELECT A KFC TO SEE LOCAL OFFERS</h3>
            <button role="button" className={style.button1}>
              Find a KFC
            </button>
          </div>
          <div className={style.maindiv2}>
            <h3>SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS</h3>
            <Link to="/login"><button className={style.button2}>Login</button></Link>
          </div>
          <div className={style.maindiv3}>
            <img
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=27.37"
              alt=""
            />
            <div className={style.bg}>
              <h2>Add 2 Pc Hot n Crispy...</h2>

              <h5>
                Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of
                Rs 499 or more. 
              </h5>

              <div className={style.buttons}>
                <button className={style.view}>View Details</button>
                <button className={style.redeem} onClick={handleModal}>Redeem</button>
              </div>
            </div>
          </div>
          <div className={style.maindiv4}>
            <img
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=27.37"
              alt=""
            />
            <div className={style.bg}>
              <h2>Upto Rs 100 off on min...</h2>
              <h5>
                Upto Rs 100 off on min cart value of Rs 599 or more . Applicable
                on 4th order onwards for signed in user.
              </h5>
              <div className={style.button3}>
                <button className={style.view}>View Details</button>
                <button className={style.redeem} onClick={handleModal}>Redeem</button>
              </div>
            </div>
          </div>
          <div className={style.maindiv5}>
            <img
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=27.37"
              alt=""
            />
            <div className={style.bg}>
              <h2>1 Pc free Chicken...</h2>
              <h5>
                {" "}
                1 Pc free Chicken Zinger on a cart value of 399 or above on
                first order. Only for registered users.
              </h5>
              <div className={style.button3}>
                <button className={style.view}>View Details</button>
                <button className={style.redeem} onClick={handleModal}>Redeem</button>
              </div>
            </div>
          </div>
          <div className={style.maindiv6}>
            <img
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=27.37"
              alt=""
            />
            <div className={style.bg}>
              <h2>1 Pc free Veg Zinger...</h2>
              <h5>
                1 Pc free Veg Zinger on a cart value of 399 or above on first
                order. Only for registered users
              </h5>
              <div className={style.button3}>
                <button className={style.view}>
                  View Details
                </button>
                <button className={style.redeem} onClick={handleModal}>
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Popup Content Starts--> */}
        {modal ? (
        <div className={style.update}>
          <p onClick={handleClose} className={style.close}>&times;</p>
          <h2>START YOUR ORDER</h2>
          <hr />
          <div className={style.modalchild}>
            <h1>HOW WOULD YOU LIKE TO RECIEVE YOUR ORDER?</h1>
            <Button>Delivery</Button>
            <Button>Pick Up</Button>
            <Button>Dine In</Button>
          </div>
        </div>
      ) : (
        <></>
      )}

        {/* <!-- Popup Content ends --> */}
        <Footer2 />
      </div>
    </div>
  );
};

export default Deals;
