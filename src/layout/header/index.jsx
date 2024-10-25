import { logo } from "../../../public/assets"
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useWalletBalanceMutation } from "../../services/Walletbalance/walletbalance";
import { useEffect, useState } from "react";
import { StyledButton } from "./styled";
import { useMediaQuery } from "../../useMediaQuery";
import { wallet } from "../../assets/Index";

import "./styles.scss"
export let exposureRef;
const Header = ({ setActiveSider }) => {
    const [trigger, { data }] = useWalletBalanceMutation()
    const [exposureData, setExposureData] = useState(null)
    // const [openSearch, setOpenSearch] = useState(false)

    const handleOpen = () => setModalOpen(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogOut = () => {
        localStorage.clear();
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
  
    
  
    useEffect(() => {
      trigger()
      const timer = setInterval(() => {
        trigger()
      }, 5000);
      return () => clearInterval(timer);
     
    }, [])

const walletbalancefun = ()=>{
    trigger()
}


  useEffect(() => {
    if (data?.message === "Success.") {
      setExposureData(prevData => {
        // Update only if the data is different
        if (
          !prevData ||
          prevData.data?.balance != data.data?.balance ||
          prevData.data?.liability != data.data?.liability
        ) {
          return data;
        }
        return prevData;
      });
    }
    
  }, [data])

  exposureRef = walletbalancefun
  
  
    const isMobile = useMediaQuery("(max-width:780px)")

    return (
        <>

            <div className="header-container">
                <div className="main">
                    <div className="wrapper">

                        <div className="logo">
                            <div className="logo-icon" onClick={() => setActiveSider(true)}>
                                <i className="fa fa-bars"></i>
                            </div>
                            <Link>
                                <h3 className="logo-name">INDIABET</h3>
                            </Link>
                            <p className="client-name">{localStorage.getItem("user_name")} </p> <p className="client-name"></p>

                            <Link to={"/"}><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className="news">
                            <Link to={"/announcement"}>


                                <Marquee>
                                    {/* Welcome  */}
                                     {exposureData?.data?.site_message}
                                </Marquee>
                            </Link>
                        </div>
                    </div>
                    <div className="right-col">
                        <ul>
                            <li className="exposure">
                                <Link >
                                    <span >Main : </span>
                                    <span style={{ marginLeft: "4px" }}>{exposureData?.data?.balance}</span>
                                </Link>
                                <Link >
                                    <span
                                     onClick={handleOpen}
                                    >Exposure : </span>
                                    <span style={{ marginLeft: "4px" }}>{exposureData?.data?.liability }</span>
                                </Link>
                            </li>
                            <li className="home-icon">
                                <Link>
                                    {isMobile ? <i className="fa fa-user"></i>
                                        :
                                        <i className="fa fa-home" style={{ fontSize: '20px', marginLeft: '3px' }}></i>
                                    }
                                </Link>
                            </li>
                            <StyledButton
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                endIcon={<MdKeyboardArrowDown />}
                                sx={{ fontWeight: '700', fontSize: '15px', textTransform:'none' }}

                            >
                                {localStorage.getItem("user_name")} 
                            </StyledButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}

                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} ><Link to={'/changePassword'} style={{ color: 'black', textDecoration: 'none' }}>Change Password</Link>  </MenuItem>
                                <MenuItem onClick={handleLogOut}> <Link to={"#"} style={{ color: 'black', textDecoration: 'none' }}> Log Out</Link></MenuItem>
                            </Menu>
                        </ul>
                    </div>
                </div>
                <div className="main-expo">
                    <div className="main-area">
                        <img src={wallet} alt="wallet-icon" /> Main : <span style={{ marginLeft: '5px' }}>{exposureData?.data?.balance}</span></div>
                    <div className="expo-area"   onClick={handleOpen}>Exp :<span style={{ marginLeft: '5px' }}>{exposureData?.data?.liability }</span></div>
                </div>
                <div className="marquee">
                    <Marquee>
                        {/* Welcome */}
                        {exposureData?.data?.site_message}
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Header