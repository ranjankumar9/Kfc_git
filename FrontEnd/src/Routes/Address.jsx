import React, { useState } from "react";
import css from "../Styles/Address.module.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [addressline, setAddressline] = useState("");
  const [zipcode, setZipcode] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleAddress = async (e) => {
    e.preventDefault();
    const render = { name, email, city, mobile, state, addressline, zipcode };
    try {
      await axios.post(
        `https://encouraging-petticoat-calf.cyclic.app/payment/address`,
        render
      );
      toast({
        title: "Address Saved Successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/payment");
    } catch (err) {
      toast({
        title: "Address Save Failed.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className={css.main}>
      <h1>PAYMENT ADDRESS FORM</h1>
      <form className={css.addressform} onSubmit={handleAddress}>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="city*"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="number"
          pattern="[0-9]{10}"
          placeholder="mobile*"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="State*"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="AddressLine*"
          value={addressline}
          onChange={(e) => setAddressline(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ZipCode*"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
        <button>Save Address</button>
      </form>
    </div>
  );
};

export default Address;
