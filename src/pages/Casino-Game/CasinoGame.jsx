import React from 'react'
import { casinogame, game11, game12 } from '../../assets/Index'
import './style.scss'
import { game1, game10, game2, game3, game4, game5, game6, game7, game8, game9 } from "../../assets/Index";
import { Link } from 'react-router-dom';

// import game from './game';
const CasinoGame = () => {
  const Gamedata = [
    {
    img: game1,
},
    {
    img: game2,
},
    {
    img: game3,
},
    {
    img: game4,
},
    {
    img: game5,
},
    {
    img: game11,
},
    {
    img: game12,
},
    {
    img: game6,
},
    {
    img: game7,
},
    {
    img: game8,
},
    {
    img: game9,
},
    {
    img: game10,
}
]
  // console.log(game , "game")
  return (
    <>
    <div className="casinogame-sec">
    {Gamedata.map((item , index)=>{
              return(
                <Link key={index} to={"/alert"} >
<img src={item.img} alt="game" />
                </Link>
  )
})}
    </div>
    </>
  )
}

export default CasinoGame