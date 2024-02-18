import { useState } from "react";
import React from "react";
// import FormInput from "../Register/FormInput";
import { useNavigate } from "react-router-dom";

import "./register.css";

const Register = () => {

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: " Wrong Password",
      label: "Password",
      required: true,
    },
  ];

  return (
    <div className="app">
    <div className="signinbox">
        <form className="signform" onSubmit={handleSubmit}>
          <h2 className="sign_title"
          >
            Already Member?
          </h2>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              className="sign_input"
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="signin_button">Sign In</button>
          <span className="signspan">New Here? <a href="/Register" className="signin_next">
            Register Here
          </a>
          </span>
        </form>
      </div>
    </div>
  );
};
export default Register;