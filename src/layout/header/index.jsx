import { logo } from "../../../public/assets"
import Marquee from "react-fast-marquee";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./styles.scss"
import { useState } from "react";
import { StyledButton } from "./styled";
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
   
  
    return (
        <div className="header-container">
            <div className="wrapper">

            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="news">
                <Marquee>
                    Welcome
                </Marquee>
            </div>
            </div>
            <div className="right-col">
                <ul>
                    <li className="exposure">
                        <Link >
                            <span>Main:</span>
                            <span>0</span>
                        </Link>
                        <Link >
                            <span>Exposure:</span>
                            <span>0</span>
                        </Link>
                    </li>
                    <li className="home-icon">
                        <Link><IoHome /></Link>
                    </li>
                    <StyledButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={<MdKeyboardArrowDown />}
                    >
                        c386761
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
                        <MenuItem onClick={handleClose}>Change Password</MenuItem>
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </ul>
            </div>
        </div>
    )
}

export default Header