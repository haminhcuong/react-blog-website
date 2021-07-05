import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const currentUser = false;
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
          <li className="top-list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="top-list-item">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="top-list-item">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="top-list-item">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="top-list-item">
            <Link to="/login">{currentUser && "LOGOUT"}</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        {currentUser ? (
          <img
            className="avatar"
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/48053147_494819787693595_5089707907012886528_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eatF9GLtyaEAX87XSog&_nc_ht=scontent-sin6-2.xx&oh=838d688b464e1247a50cfde1f63f9d7d&oe=60E4E37E"
            alt="avt"
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="top-list-item">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <i className="search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
