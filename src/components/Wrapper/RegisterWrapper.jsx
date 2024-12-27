import React from "react";
import "./RegisterWrapper.css";
import RegisterForm from "../registerPage/RegisterForm";
import { Link } from "react-router-dom";

const RegisterWrapper = () => {
  return (
    <div className="wrapper_global">
      <div className="register_wrapper">
        <div className="left">
          <img
            src="https://images.hdqwalls.com/download/mac-os-mojave-5k-np-1125x2436.jpg"
            alt="background"
            height={450}
          />
        </div>

        <div className="right">
          <span className="heading">Create an Account</span>
          <span className="subHeading">
            Already have an account?{" "}
            <Link to="/" className="login">
              Log In
            </Link>
          </span>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterWrapper;
