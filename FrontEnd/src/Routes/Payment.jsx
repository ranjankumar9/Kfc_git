import React, { useEffect, useState } from "react";
import css from "../Styles/Address.module.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cardnumber, setCardnumber] = useState("");
  const [expirydate, setExpirydate] = useState("");
  const [cvv, setCvv] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const clearCart = async () => {
    await axios.delete(`https://encouraging-petticoat-calf.cyclic.app/cart/`);
  };

  const handlePayment = (e) => {
    e.preventDefault();

    try {
      const payload = { cardnumber, expirydate, cvv };
      axios
        .post(
          `https://encouraging-petticoat-calf.cyclic.app/payment/pay`,
          payload
        )
        .then((res) => {
          console.log(res.data);
          toast({
            title: "Payment Successful. Enjoy your shopping!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/");
        })
        .finally(() => {
          clearCart();
        });
    } catch (error) {
      toast({
        title: "Payment Failed",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("token")),
  };

  return (
    <div className={css.main}>
      <h1>PAYMENT FORM</h1>
      <form className={css.addressform} onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Debit Card Number*"
          pattern=".{8,}"
          value={cardnumber}
          onChange={(e) => setCardnumber(e.target.value)}
          required
        />
        <input
          type="month"
          placeholder="Expiry Date*"
          value={expirydate}
          onChange={(e) => setExpirydate(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="CVV"
          pattern="[1-9]{3}"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <button type="submit">Proceed To Pay</button>
      </form>
    </div>
  );
};

export { Payment };
