import React, { useEffect, useState } from "react";
import styles from "../Styles/Productcard.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, useToast } from "@chakra-ui/react";

const ProductCard = ({ productId }) => {
  const toast = useToast();
  const { _id } = useParams();
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("token")),
  };

  const { images, title, price, description, quantity } = productId;
  const handleCart = async () => {
    try {
      let res = await axios.post(`https://encouraging-petticoat-calf.cyclic.app/cart/add`, {
        images,
        title,
        price,
        description,
        quantity,
      });
      console.log(res.data);
      toast({
        title: "Product",
        description: res.data.msg,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card} key={productId.id}>
      <div className={styles.card1}>
        <img src={productId.images} alt="" />
      </div>
      <div className={styles.card2}>
        <p>{productId.title}</p>
        <div className={styles.title}>
          <img
            src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
            alt=""
          />
          <p>{productId.category}</p>
        </div>

        <p>₹{productId.price}</p>
        <p>{productId.description}</p>
        <button onClick={(el) => handleCart(el)}>
          Add to Cart <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
