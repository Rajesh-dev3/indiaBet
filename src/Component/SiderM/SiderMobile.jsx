import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userpic } from '../../assets/Index';
import './style.scss';
import { stakeModalRef } from "../../common/LayoutPrimary";

const SiderMobile = ({ setActiveSider }) => {
  const menuData = [
    { name: "Dashboard", path: "/" },
    { name: "In-Play", path: "/inplay" },
    { name: "Running Market Analysis", path: "/Runningmarketanalysis" },
    {
      name: "Report",
      path:"/menu",
      subMenu: [
        { name: "Account Statement", path: "/AccountStatement" },
        { name: "Profit & Loss", path: "/profitLoss" },
        { name: "Bet History", path: "/userBetHistory" },
        { name: "Match PnL", path: "/matchprofitnloss" }
      ]
    },
    { name: "Check Casino Result", path: "/casino-result" },
    { name: "Casino Games", path: "/CasinoGame" },
    { name: "Edit Stake", path: "/edit-stake" }
  ];

  const [activeMenu, setActiveMenu] = useState(null); // No default active item
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleMenuClick = (menu) => {
    if (menu === 'Report') {
      setIsReportOpen(!isReportOpen); // Toggle the sub-menu for Report
    } else {
      setActiveMenu(menu); // Activate main menu item if not 'Report'
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
              <p className="user-id">{localStorage.getItem("user_name")}</p>
            </div>
          </div>
          <div className="close">
            <span onClick={() => setActiveSider(false)}>x</span>
          </div>
        </div>
        <div className="nav-menu">
          <ul className="cssmenu">
            {menuData.map((menu, index) => (
              <li
                key={index}
                className={`menulist ${
                  menu?.name === "Report" && isReportOpen ? 'active' : ''
                }`}
                onClick={() => {
                  if (menu.name === "Report") {
                    handleMenuClick(menu.name); // Toggle Report menu
                  } else if (menu.name === "Edit Stake") {
                    stakeModalRef();
                  } else {
                    if(menu?.name == "menu"){
                      return
                    }
                    setActiveSider(false);
                    handleMenuClick(menu.name); // Activate non-Report menu item
                  }
                }}
              >
                <NavLink
                  to={menu.path || "#"}
                  className="list"
                  isActive={() => activeMenu === menu.name} // Apply active state based on `activeMenu`
                >
                  {menu.name}
                  {menu.name === 'Report' && (
                    <span
                      className="plus-icon"
                      onClick={() => {
                        setIsReportOpen(!isReportOpen);
                      }}
                    >
                      {isReportOpen ? '-' : '+'}
                    </span>
                  )}
                </NavLink>

                {menu.name === 'Report' && (
                  <ul className={`nav-sub-nav ${isReportOpen ? 'open' : 'closed'}`}>
                    {menu.subMenu.map((subMenu, subIndex) => (
                      <li
                        key={subIndex}
                        className={`menulist2 ${activeMenu === subMenu.name ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent parent menu activation
                          setActiveSider(false);
                          setActiveMenu(subMenu.name); // Activate only clicked sub-menu
                        }}
                      >
                        <NavLink
                          to={subMenu.path || "#"}
                          isActive={() => activeMenu === subMenu.name} // Apply active state based on `activeMenu`
                        >
                          {subMenu.name}
                        </NavLink>
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
