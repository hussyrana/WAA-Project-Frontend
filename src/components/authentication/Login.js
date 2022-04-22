import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const loginFormRef = useRef();
  // const {setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLoginButton = (e) => {
    e.preventDefault();
    axios
      .post("http://10.200.9.191:8089/auth/login", {
        username: loginFormRef.current["email"].value,
        password: loginFormRef.current["password"].value,
      })
      .then((res) => {
        // setAuth(res.data);
        if (res.data?.jwt) {
          const item = {
            jwt: res.data.jwt,
            username: res.data.userDetails.username,
            password: res.data.userDetails.password,
            roles: res.data.userDetails.roles,
          };
          localStorage.setItem("data", JSON.stringify(item));
          if (res?.data?.userDetails?.roles === "SELLER") {
            navigate("/products");
          } else if (res?.data?.userDetails?.roles === "BUYER") {
            navigate("/");
          } else if (res?.data?.userDetails?.roles === "ADMIN") {
            navigate("/sellers");
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" ref={loginFormRef}>
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" type="password" />
          <button type="submit" onClick={handleLoginButton}>
            login
          </button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
