import React from 'react'
import "./style.scss"
const ChangePassword = () => {
  return (
    <div className='ChangePassword'>
        <div className="Change-title">
            change password
        </div>
        <div className="item">
       <div className='password-name'>Old Password * </div>   
            <input type="text" className='password' placeholder='Old Password' />
        </div>
        <div className="item">
       <div className='password-name'>New Password * </div>   
            <input type="text" className='password' placeholder='New Password' />
        </div>
        <div className="item">
       <div className='password-name'>Retype New Password * </div>   
            <input type="text" className='password' placeholder='Retype Password' />
        </div>
<div className="btn-change-password">
    <span className="reset">Reset</span>
    <span className="reset submit">Submit</span>
</div>

    </div>
  )
}

export default ChangePassword