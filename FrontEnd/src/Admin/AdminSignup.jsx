import React, { useState } from "react";
import css from "../Admin Styles/AdminSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const AdminSignup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [seller_name, setSeller_name] = useState("");
  const [shop_name, setShop_name] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gst_number, setGst_number] = useState("");
  const [location, setLocation] = useState("");
  const toast = useToast();
  const navigate = useNavigate()

  const handlePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const render = {
      seller_name,
      shop_name,
      email,
      pass,
      gst_number,
      location,
    };
    try {
      axios
        .post(`https://encouraging-petticoat-calf.cyclic.app/seller/register`, render)
        .then((res) => {
          console.log(res.data);
          if (res.data.msg === "seller registered successfully") {
            toast({
              title: "Admin Signup Successfully.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            navigate("/admin/login")
          } else {
            toast({
              title: "Admin Signup Failed.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={css.container}>
      <h1>REGISTER</h1>
      <p>Become A Seller Now</p>
      <form className={css.forms} onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Admin Name*"
          value={seller_name}
          onChange={(e) => setSeller_name(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Shop Name*"
          value={shop_name}
          onChange={(e) => setShop_name(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={css.passwords}>
          <input
            type={passwordType}
            placeholder="*********"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <p onClick={handlePassword}>
            <i className="fa-solid fa-eye"></i>
          </p>
        </div>
        <input
          type="text"
          placeholder="Gst no..."
          value={gst_number}
          onChange={(e) => setGst_number(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button>Register</button>
        <div className={css.seller}>
          <p>Already a Seller? </p>
          <Link to="/admin/login">
            <p className={css.loginp}>Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminSignup;

//    seller_name: { type: String, required: true },
// shop_name: { type: String, default: "user" },
// email: { type: String, required: true },
// pass: { type: String, required: true },
// gst_number: { type: String, required: true },
// location: { type: String, required: true },
