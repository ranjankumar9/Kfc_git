import React, { useState } from "react";
import style from "../Styles/Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const render = { name, email, phone, password };
    console.log(render);
    axios.post(`https://encouraging-petticoat-calf.cyclic.app/users/register`, render).then((res) => {
      console.log(res.data);
      if(res.data){
        toast({
          title: 'Account created.',
          description: "You move to Login Page",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        navigate('/login')
      }else{
        toast({
          title: 'Signup Failed!',
          description: "Please Enter Correct details",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      }
    });
  };

  const handlePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div>
      <div className={style.container}>
        <Link to="/login">
          <div className={style.sign}>Sign In/ Log In</div>
        </Link>
        <div className={style.img}>
          <Link to="/">
            <img
              src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
              alt=""
            />
          </Link>
        </div>
        <div className={style.h3}>
          <h3>LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE</h3>
          <h3> NUMBER!</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.input}>
            <input
              type="name"
              placeholder="Enter Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="Number"
              placeholder="Enter Your Mobile*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              placeholder="Enter Your Password*"
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className={style.show}>
              <input
                className={style.showinput}
                type="checkbox"
                onClick={handlePassword}
              />
              <label className={style.lebel}>Show Password</label>
            </div>
          </div>

          <p className={style.loging}>
            By "logging in to KFC",you agree to our
            <button className={style.privacy}>Privacy Policy</button>
            and
            <button className={style.condition}>Terms & Conditions.</button>
          </p>
          <button className={style.code}>
            Send Me
          </button>
        </form>
        <div className={style.or}>
          <div className={style.orleft}></div>
          <div className="orcenter">or</div>
          <div className={style.orright}></div>
        </div>
        <Link to="/">
          <button className={style.guest}>Skip,Continue As Guest</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
