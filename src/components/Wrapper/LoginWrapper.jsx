import React from "react";
import "./LoginWrapper.css";
import LoginForm from "../LoginPage/LoginForm";
import { Link } from "react-router-dom";

const LoginWrapper = () => {
  return (
    <div className="wrapper_global">
      <div className="login_wrapper">
        <div className="left">
          <img
            src="https://images.hdqwalls.com/download/mac-os-mojave-5k-np-1125x2436.jpg"
            alt="background"
            height={450}
          />
        </div>

        <div className="right">
          <span className="heading">Don't have an account</span>
          <span className="subHeading">
            Please click the link to{" "}
            <Link to="/register" className="register">
              Register
            </Link>
          </span>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
