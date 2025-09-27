import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, setUser } = useContext(GeneralContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/logout", {}, { withCredentials: true });
      setUser(null);
      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <style>
        {`
          .menus {
            position: relative; /* Required for dropdown positioning */
          }
          .profile-dropdown {
            position: absolute;
            top: 55px; /* Position below the profile section */
            right: 0;
            background-color: #fff;
            border-radius: 4px;
            // width: 220px;
            border: 1px solid #eee;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            transition: opacity 0.2s ease, transform 0.2s ease;
          }
          .profile-dropdown::after { /* The little arrow */
            content: '';
            position: absolute;
            top: -6px; /* Position arrow at the top */
            right: 20px;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #fff; /* Make it point up */
            filter: drop-shadow(0 -2px 2px rgba(0,0,0,0.05));
          }
          .profile-dropdown ul {
            list-style: none;
            padding: 5px 0;
            margin: 0;
          }
          .profile-dropdown li {
            padding: 0.75rem 2rem;
            cursor: pointer;
            font-size: 1.1rem;
            color: #424242;
            margin-right: 0px;
            font-weight: 600;
            // transition: background-color 0.2s ease;
          }
          .profile-dropdown li:hover {
            background-color: #f5f5f5;
          }
        `}
      </style>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
              <Link style={{textDecoration:"none"}} to={"/"} onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass }>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/orders"} onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass }>Orders</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass }>Holdings</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/positions"} onClick={() => handleMenuClick(3)}>
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass }>Positions</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/funds"} onClick={() => handleMenuClick(4)}>
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass }>Funds</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/apps"} onClick={() => handleMenuClick(5)}>
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass }>Apps</p>
              </Link>
            </li>
          </ul>
          <hr />
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{user ? user.charAt(0).toUpperCase() : 'U'}</div>
            <p className="username">{user ? user : 'USERID'}</p>
          </div>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
