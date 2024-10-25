import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
const CasinoResult = () => {
  return (
    <>
    <div className="casino-result-sec">
      <div className="casino-home">
        <h2 className='home-c'><Link to={"/"}> Home</Link></h2>
      </div>
      <div className="show-casino-h">
      Show Casino Results
      </div>
      <div className="search-area">

      <input type="text" className="search" />
      <button className='search-btn'>Search</button>
      </div>

    </div>
    </>
  )
}

export default CasinoResult