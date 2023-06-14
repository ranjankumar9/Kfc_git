import React, { useEffect, useState } from "react";
import style from "../Styles/Signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const toast = useToast();

  const handleLogin = (e) => {

      e.preventDefault();
      const render = { email, password };
      axios.post(`https://encouraging-petticoat-calf.cyclic.app/users/login`, render).then((res) => {
        console.log(res);
        
        localStorage.setItem("token", JSON.stringify(res.data.token))
        localStorage.setItem("user", JSON.stringify(res.data.user))
        if(res.data.token){
          navigate("/")
          toast({
            title: 'Login Successfully.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        }
        else{
          toast({
            title: 'Login Failed!',
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

  // setTimeout(() => {
  //   localStorage.clear()
  // }, 4000);

  // useEffect(() => {

  // },[])
  return (
    <div>
      <div className={style.container}>
        <div className={style.sign}>Sign in / Login</div>
        <div className={style.img}>
          <Link to="/">
            <img
              src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
              alt=""
            />
          </Link>
        </div>
        <div className={style.h3}>
          <h3>LET'S SIGN IN OR Login ACCOUNT WITH YOUR EMAIL</h3>
          <h3> PASSWORD!</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className={style.input}>
            <input
              type="email"
              placeholder="Enter Your Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Enter Your Password*"
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button className={style.code}>Login To Continue</button>
        </form>
        <div className={style.or}>
          <div className={style.orleft}></div>
          <div className="orcenter"></div>
          <div className={style.orright}></div>
        </div>
        {/* <Link to="/">
          <button className={style.guest}>Skip,Continue As Guest</button>
        </Link> */}
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Login;
