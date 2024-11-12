import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../layout/header";
import SubNavBar from "../layout/header/SubNavBar";
import SideBar from "../layout/sider";
import "./styles.scss";
import { useEffect, useState } from "react";
import SiderMobile from "../Component/SiderM/SiderMobile";
import EditStakeModal from "../Component/editStake/EditStakeModal";
import Modal from "../Component/modal";
import {RuleModal, RuleModal2} from "../Component/modal/ruleModal";
import { useDispatch, useSelector } from "react-redux";

import { closeModalRule } from '../services/sruleModalSlice';
import Rules from "../Component/rules/rules";
import Continue from "../Component/rules/continue";

export let stakeModalRef;
const LayoutPrimary = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSider, setActiveSider] = useState(false);
  const links = [
    { name: "Home", icon: "fa-home" ,  url: "/"},
    { name: "in play", icon: "fa fa-clock-o" ,  url: "/inplay" },
    { name: "stake", icon: "fa fa-inr",  url: "/" },
    { name: "Casino", icon: "fa fa-cubes",  url: "/CasinoGame" },
    { name: "account", icon: "fa fa-user",  url: "/account" },
    // { name: 'Blog', icon: 'fa-blog' }
  ];
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () =>{
    console.log("first")
    setIsOpen(true)};
  const closeModal = () => setIsOpen(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      nav("/login");
    }
  }, [token]);
  stakeModalRef = openModal
  const isModalOpen = useSelector((state) => state.authModal.isModalOpen);

  const [rulemodalOpen, setRulemodalOpen] = useState(false)
  
  return (
    <>
      {rulemodalOpen &&
    <RuleModal2 Element={<Continue setRulemodalOpen={setRulemodalOpen}/>} closeModal={closeModal}/>
    }
      {isModalOpen &&
    <RuleModal Element={
    <>
    <Rules setRulemodalOpen={setRulemodalOpen}/>

    </>
    } closeModal={closeModal}/>
    }
      {isOpen &&
    <Modal Element={<EditStakeModal setIsOpen={setIsOpen}/>} closeModal={closeModal}/>
    }
      <div
        className={`sider-overlay ${
          activeSider ? "sider-active" : "sider-close"
        }`}
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

        <div className="content">
          <div className="left">
            <SideBar />
          </div>
          <div className="main-center">
            <Outlet />
          </div>
          <div className="footer">
            <ul>
              {links.map((link, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() =>{
                    if(index==2)
                    {


                      openModal()
                    }else{

                      setActiveIndex(index)}}
                    }
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
