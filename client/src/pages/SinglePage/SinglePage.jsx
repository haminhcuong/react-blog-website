import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./SinglePage.css";

export default function SinglePage() {
  return (
    <>
      <div className="single-page">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
}
