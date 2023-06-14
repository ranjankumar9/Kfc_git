import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer2 from "../Components/Footer2";
import axios from "axios";
import style from "../Styles/Cart.module.css";
import CartItem from "../Components/CartItem";
import { Link, useParams } from "react-router-dom";
import { Payment } from "./Payment";

const Cart = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();

  // console.log(price)
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("token")),
  };

  const getcartdata = async () => {
    try {
      await axios
        .get(`https://encouraging-petticoat-calf.cyclic.app/cart/`)
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
        });
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    getcartdata();
  }, []);

  let total = 0;
  let arr = [];
  data.map((el) => {
    if (el.price) {
      arr.push(el.price);
    }
    return null;
  });

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  // console.log(total.toFixed(2));

  return (
    <div>
      <Navbar />
      <div className={style.headers}>
        <p>LET'S ORDER FOR DELIVERY,PICK UP,OR DINE-IN</p>
      </div>
      <div className={style.container}>
        {data.length <= 0 ? (
          <div className={style.container1}>
            <div>
              <h1>YOUR CART IS EMPTY. LET'S START AN ORDER!</h1>
              <Link to="/menu">
                <button>Start Order</button>
              </Link>
            </div>
            <div>
              <img
                className={style.imgs}
                src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div>
            <div className={style.card}>
              {data?.map((el) => (
                <div key={el._id}>
                  <CartItem
                    getcartdata={getcartdata}
                    key={el._id}
                    id={el._id}
                    images={el.images}
                    title={el.title}
                    price={el.price}
                    quantity={el.quantity}
                  />
                </div>
              ))}
            </div>

            {/* <h1>Total Price: {total.toFixed(2)}</h1> */}
            <Link to="/payment/address">
              <button className={style.pay}>PROCEED TO PAY</button>
            </Link>
        
             
          </div>
        )}
      </div>

      <Footer2 />
    </div>
  );
};

export default Cart;

// https://online.kfc.co.in/static/media/empty_cart.32f17a45.png
