import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { userpic } from '../../assets/Index';
import './style.scss';

const SiderMobile = ({setActiveSider}) => {
  const menuData = [
    { name: "Dashboard", path: "/" }, // Adding path for routing
    { name: "In-Play", path: "/inplay" },
    { name: "Running Market Analysis", path: "/Runningmarketanalysis" },
    {
      name: "Report",
      subMenu: [
        { name: "Account Statement", path: "/AccountStatement" },
        { name: "Profit & Loss", path: "/profitLoss" },
        { name: "Bet History", path: "/userBetHistory" },
        { name: "Match PnL", path: "/matchprofitnloss" }
      ]
    },
    { name: "Check Casino Result", path: "/" },
    { name: "Casino Games", path: "/CasinoGame" },
    { name: "Edit Stake", path: "#" }
  ];

  const [activeMenu, setActiveMenu] = useState('Dashboard'); // Default active item
  const [isReportOpen, setIsReportOpen] = useState(false); // Toggle state for Report sub-menu

  const handleMenuClick = (menu) => {
    if (menu === 'Report') {
      setIsReportOpen(!isReportOpen); // Toggle the sub-menu for Report
    } else {
      setActiveMenu(menu); // Set other clicked items as active
    }
  };

  return (
    <>
      <div className="mobile-nav">
        <div className="user-detail">
          <div className="user-pic">
            <div className="pic">
              <img src={userpic} alt="dp" />
            </div>
            <div className="user-name">
              {/* <p className="username"></p> */}
              <p className="user-id">{localStorage.getItem("user_name")}</p>
            </div>
          </div>
          <div className="close"> <span onClick={()=>setActiveSider(false)}>x</span> </div>
        </div>
        <div className="nav-menu">
          <ul className="cssmenu">
            {menuData.map((menu, index) => (
              <li
                key={index}
                className={`menulist ${activeMenu === menu.name ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu.name)}
              >
                {/* Use Link for the main menu */}
                <Link to={menu.path || "#"} className="list">
                  {menu.name}
                  {menu.name === 'Report' && (
                  <span className="plus-icon">{isReportOpen ? '-' : '+'}</span>
                  )}
                </Link>

                {menu.name === 'Report' && (
                  <ul className={`nav-sub-nav ${isReportOpen ? 'open' : 'closed'}`}>
                    {menu.subMenu.map((subMenu, subIndex) => (
                      <li
                        key={subIndex}
                        className={`menulist2 ${activeMenu === subMenu.name ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMenuClick(subMenu.name);
                        }}
                      >
                        {/* Use Link for sub-menu */}
                        <Link to={subMenu.path || "#"}>{subMenu.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SiderMobile;
