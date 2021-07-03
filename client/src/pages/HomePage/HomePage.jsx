import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header.jsx";
import Posts from "../../components/Posts/Posts.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
