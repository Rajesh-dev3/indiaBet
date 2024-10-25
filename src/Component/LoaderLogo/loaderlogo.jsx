import React from 'react'
import { logo } from '../../assets/Index'
import './style.scss';

const Loaderlogo = ({width,bg,position,height}) => {
  const stylesCss = {
    background:bg,
    width:width,
    position:position?position:"fixed",
    height:height
  }
  return (
    <>
    
    <div className='mainloader' style={stylesCss}>
<img src={logo} alt="loader" className='element' />
    </div>
    </>
  )
}

export default Loaderlogo