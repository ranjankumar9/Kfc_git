import React, { useState } from "react";
import styles from "../Styles/CartItem.module.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const CartItem = ({
  id,
  images,
  title,
  price,
  description,
  quantity,
  getcartdata,
}) => {
  // const { _id, images, title, price, description, quantity } = CartId;
  //   let total = +(price);
  const toast = useToast();
  let [queue, setQue] = useState(quantity);

  const handleDec = () => {
    setQue(queue--);
  };

  const handleInc = () => {
    setQue(queue++);
  };

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("token")),
  };

  const handleRemove = async () => {
    try {
      await axios
        .delete(`https://encouraging-petticoat-calf.cyclic.app/cart/delete/${id}`)
        .then((res) => {
          // console.log(res.data);
          getcartdata();
          toast({
            title: "CartItem",
            description: res.data.msg,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(price);
  return (
    <>
      <div className={styles.cart}>
        <img src={images} alt="" />
        <p className={styles.title}>{title}</p>
        <p>
          <strong>₹{queue * price}</strong>
        </p>
        <p>{description}</p>
        <div className={styles.quantity}>
          {queue === 1 ? (
            <button onClick={handleDec} disabled={true}>
              -
            </button>
          ) : (
            <button onClick={handleDec} disabled={false}>
              -
            </button>
          )}

          <p>{queue}</p>
          <button onClick={handleInc}>+</button>
        </div>
        <div onClick={handleRemove} className={styles.remove}>
          <i className="fa-solid fa-trash"></i>
        </div>
        
      </div>
      
    </>
  );
};

export default CartItem;
