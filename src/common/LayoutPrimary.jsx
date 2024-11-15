import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../layout/header";
import SubNavBar from "../layout/header/SubNavBar";
import SideBar from "../layout/sider";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import SiderMobile from "../Component/SiderM/SiderMobile";
import EditStakeModal from "../Component/editStake/EditStakeModal";
import Modal from "../Component/modal";
import { RuleModal, RuleModal2 } from "../Component/modal/ruleModal";
import { useDispatch, useSelector } from "react-redux";
import { closeModalRule } from '../services/sruleModalSlice';
import Rules from "../Component/rules/rules";
import Continue from "../Component/rules/continue";

export let stakeModalRef;

const LayoutPrimary = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSider, setActiveSider] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rulemodalOpen, setRulemodalOpen] = useState(false);

  const token = localStorage.getItem("token");
  const nav = useNavigate();
  const topRef = useRef(null);

  const isModalOpen = useSelector((state) => state.authModal.isModalOpen);
  const betData = useSelector((state) => state.betData.betData);

  // Open and close modal functions
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!token) {
      nav("/login");
    }
  }, [token]);

  stakeModalRef = openModal;

  // Scroll to top when betData updates
  useEffect(() => {
    if (betData) {
      scrollToTop();
    }
  }, [betData]);

  // Function to handle scrolling to top (200px from the top)
  const scrollToTop = () => {
    window.scrollTo({
      top: 300, // Scroll to 200px from the top
      behavior: 'smooth', // Smooth scroll behavior
    });
  };

  const links = [
    { name: "Home", icon: "fa-home", url: "/" },
    { name: "In Play", icon: "fa fa-clock-o", url: "/inplay" },
    { name: "Stake", icon: "fa fa-inr", url: "/" },
    { name: "Casino", icon: "fa fa-cubes", url: "/CasinoGame" },
    { name: "Account", icon: "fa fa-user", url: "/account" },
  ];

  return (
    <>
      {rulemodalOpen && (
        <RuleModal2 Element={<Continue setRulemodalOpen={setRulemodalOpen} />} closeModal={closeModal} />
      )}
      {isModalOpen && (
        <RuleModal Element={<Rules setRulemodalOpen={setRulemodalOpen} />} closeModal={closeModal} />
      )}
      {isOpen && (
        <Modal Element={<EditStakeModal setIsOpen={setIsOpen} />} closeModal={closeModal} />
      )}

      <div
        className={`sider-overlay ${activeSider ? "sider-active" : "sider-close"}`}
        onClick={() => setActiveSider(false)}
      >
        <div className="sider-col" onClick={(e) => e.stopPropagation()}>
          <SiderMobile setActiveSider={setActiveSider} />
        </div>
      </div>

      <div className="layout-primary">
        <div className="header">
          <Header setActiveSider={setActiveSider} />
          <SubNavBar />
        </div>

        <div className="content" >
          <div className="left">
            <SideBar />
          </div>
          <div className="main-center" ref={topRef}>
            <Outlet />
          </div>
          <div className="footer">
            <ul>
              {links.map((link, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active-footer" : ""}
                  onClick={() => {
                    if (index === 2) {
                      openModal();
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <Link to={link.url} className="navbar-brand">
                    <i className={`fa ${link.icon}`}></i>
                    <span className="footer-name">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutPrimary;
