import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Use NavLink instead of Link

const SubNavBar = () => {
  const list = [
    {
      name: "Dashboard",
      path: "/" // Adding path for routing
    },
    {
      name: "In-Play",
      path: "/inplay"
    },
    {
      name: "Running Market Analysis",
      path: "/Runningmarketanalysis"
    },
    {
      name: "Report",
      children: [
        {
          list: "Account Statement",
          path: "/AccountStatement"
        },
        {
          list: "Profit & Loss",
          path: "/profitLoss"
        },
        {
          list: "Bet History",
          path: "/userBetHistory"
        },
        {
          list: "Match Pnl",
          path: "/matchprofitnloss"
        }
      ]
    },
    {
      name: "Check Casino Results",
      path: "/casino-result"
    },
    {
      name: "Casino Games",
      path: "/CasinoGame"
    }
  ];
const {pathname} = useLocation()
const urlList = ["/"]
console.log(pathname)
  return (
    <div className="sub-navbar">
      <ul className="list">
        {
          list?.map((item) => (
              <NavLink
                to={item?.path || "#"}
                key={item?.name} 
                className={`${pathname  == item?.path?"active-link":""}`}
                // className={({ isActive }) => (isActive ? "active-link" : "")} // Add active class
              >
            <li className={`list-tag ${item?.children?.length ? "report" : ""}`}>
              {/* Use NavLink for parent item */}
                {item?.name}
            

              {item?.children?.length && (
                <div className="drop-list">
                  <ul>
                    {item?.children?.map((subItem) => (
                        <NavLink
                        key={subItem?.list}
                          to={subItem?.path || "#"}
                          className={`${pathname  == subItem?.path?"active-links":""}`}
                          // className={({ isActive }) => (isActive ? "active-link" : "")}
                        >
                      <li  className="sub-list">
                        {/* Use NavLink for child items */}
                          {subItem?.list}
                      </li>
                        </NavLink>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            </NavLink>
          ))
        }
      </ul>
    </div>
  );
}

export default SubNavBar;
