import React, { useState } from "react";
import css from "../Admin Styles/AdminLogin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const AdminLogin = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const toast = useToast()
  const navigate = useNavigate();

  const handlePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleLogin = (e) => {
    e.preventDefault()
    const render = {email,pass}
    console.log(render)
    axios.post(`https://encouraging-petticoat-calf.cyclic.app/seller/login`, render).then((res) => {
      console.log(res.data)
      if(res.data.token){
        toast({
          title: "Admin Login Successfully.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate('/admin/board')
        localStorage.setItem("sellertoken", JSON.stringify(res.data.token))
        localStorage.setItem("seller", JSON.stringify(res.data.seller))
      }else{
        toast({
          title: "Admin Login Failed.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    })
  }

  return (
    <div className={css.container}>
      <h1>Login</h1>
      <div className={css.container2}>
        <p>Not a Seller?</p>
        <p onClick={() => navigate("/admin/signup")}>Become a Seller Now.</p>
      </div>
      <form className={css.forms} onSubmit={handleLogin}>
        <label>Email*</label>
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password*</label>
        <div className={css.formspass}>
          <input type={passwordType} placeholder="*********"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
           />
          <p onClick={handlePassword}>
            <i className="fa-solid fa-eye"></i>
          </p>
        </div>
        <div className={css.pattern}>
          <p>Forgot Password</p>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
