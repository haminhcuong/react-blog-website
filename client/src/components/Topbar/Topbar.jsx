import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">
        <a href="https://www.facebook.com/cuongha.fit/">
          <i className="fab fa-facebook-square"></i>
        </a>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-pinterest-square"></i>
        <a href="https://www.instagram.com/hmc_9.5/">
          <i className="fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="right">
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/d6/b9/ef/d6b9efc9393e07456d93eb8b1e10c050.jpg"
          alt="avt"
        />
        <i className="search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
