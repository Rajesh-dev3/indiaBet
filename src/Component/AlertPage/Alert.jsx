import React, { useEffect } from 'react'
import './style.scss';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Alert = () => {
    const navigate = useNavigate();

    useEffect(() => {
      // Redirect to homepage after 2 seconds
      const timer = setTimeout(() => {
        navigate('/');
      }, 1500);
  
      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <>
    <div className="alert-sec">
        <div className="notice">
            <div className="close"> <span><IoIosCloseCircleOutline /></span> </div>
            <div className="error">
                <h2>Error</h2>
                <h3>Game is Blocked by Admin</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Alert