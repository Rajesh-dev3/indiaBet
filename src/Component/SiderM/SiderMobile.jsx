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
      path: "/menu", // Not directly used in "Report", it has a submenu
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
  const [isReportOpen, setIsReportOpen] = useState(false); // Track the Report submenu state
  const [isReportIconActive, setIsReportIconActive] = useState(false); // Track the plus icon state

  const handleMenuClick = (menu) => {
    if (menu !== 'Report') {
      setActiveMenu(menu); // Activate non-Report menu item
    }
  };

  const handlePlusIconClick = (e) => {
    e.stopPropagation(); // Prevent the parent `li` from receiving the click
    setIsReportOpen(!isReportOpen); // Toggle the Report submenu
    setIsReportIconActive(!isReportIconActive); // Toggle the plus icon state (open/close)
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
                className={`menulist ${menu?.name === "Report" && isReportOpen ? 'active' : ''}`}
                onClick={(e) => {
                  if (menu.name === "Report") {
                    e.stopPropagation(); // Prevent closing the sidebar if Report is clicked
                    return;
                  } else if (menu.name === "Edit Stake") {
                    stakeModalRef();
                    setActiveSider(false); // Close sidebar when Edit Stake is clicked
                  } else {
                    setActiveSider(false); // Close sidebar for other items
                    handleMenuClick(menu.name); // Activate non-Report menu item
                  }
                }}
              >
                {menu.name !== "Report" ? (
                  <NavLink
                    to={menu.path || "#"}
                    className="list"
                    isActive={() => activeMenu === menu.name} // Apply active state based on `activeMenu`
                  >
                    {menu?.name == "Edit Stake" ? 
                    <i class="fa fa-pencil-square-o"></i>
                    :""}
                    {menu.name}
                  </NavLink>
                ) : (
                  <span className="list">
                    {menu.name}
                    <span
                      className={`plus-icon ${isReportIconActive ? 'actives' : ''}`}
                      onClick={handlePlusIconClick}
                    >
                      {isReportIconActive ? '-' : '+'}
                    </span>
                  </span>
                )}

                {/* Submenu for Report */}
                {menu.name === 'Report' && (
                  <ul className={`nav-sub-nav ${isReportOpen ? 'open' : 'closed'}`}>
                    {menu.subMenu.map((subMenu, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subMenu.path || "#"}
                        isActive={() => activeMenu === subMenu.name} // Apply active state based on `activeMenu`
                      >
                        <li
                          className={`menulist2 ${activeMenu === subMenu.name ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent menu activation
                            setActiveSider(false); // Close sidebar when a sub-menu item is selected
                            setActiveMenu(subMenu.name); // Activate only clicked sub-menu
                          }}
                        >
                          {subMenu.name}
                        </li>
                      </NavLink>
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
