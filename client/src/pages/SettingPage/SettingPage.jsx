import React from "react";
import "./SettingPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function SettingPage() {
  return (
    <div>
      <div className="settingPage">
        <div className="wrapper">
          <div className="title">
            <span className="update">Update Your Account</span>
            <span className="delete">Delete</span>
          </div>

          <form>
            <div className="settingPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />

              <label htmlFor="fileInput">
                <i className="far fa-user-circle"></i>
              </label>

              <input type="file" id="fileInput" style={{ display: "none" }} accept="image/*"/>
            </div>

            <label>Username</label>
            <input type="text" placeholder="Safak" name="name" />
            <label>Email</label>
            <input type="email" placeholder="safak@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
