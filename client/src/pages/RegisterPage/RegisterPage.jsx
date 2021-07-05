import React from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
          <label>Confirm Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Confirm Password..."
          />

          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
      </div>
    </div>
  );
}
