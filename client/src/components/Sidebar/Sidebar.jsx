import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div className="title">ABOUT ME</div>
        <img
          src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/48053147_494819787693595_5089707907012886528_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eatF9GLtyaEAX87XSog&_nc_ht=scontent-sin6-2.xx&oh=838d688b464e1247a50cfde1f63f9d7d&oe=60E4E37E"
          alt=""
        />
        <p>Hello everyone. My name is Ha Minh Cuong.</p>
      </div>

      <div className="sidebar-item">
        <div className="title">CATEGORIES</div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>

      <div className="sidebar-item">
        <span className="title">FOLLOW ME</span>
        <div className="social">
          <a href="https://www.facebook.com/cuongha.fit/">
            <i className="fab fa-facebook-square"></i>
          </a>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <a href="https://www.instagram.com/hmc_9.5/">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
