import React from 'react'
// import PagesTitle from '../../components/pagesTitle/PagesTitle'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { useChangePasswordMutation } from '../../services/changepassword/changepassword';
import { toast } from 'react-toastify';
import "./style.scss"
const ChangePassword = () => {
  
        const [passwordIconShow, setPasswordIconShow] = useState({
          old: true,
          new: true,
          confirm: true
        })
      
        const [formData, setFormData] = useState({
          oldPassword: "",
          confirmNewPassword: "",
          newPassword: ""
        })
        const [error, setError] = useState({
          oldPassword: false,
          confirmNewPassword: false,
          newPassword: false
        })
        const [trigger, { data }] = useChangePasswordMutation()
      
        const sumnitHandler = (e) => {
          e.preventDefault()
          let errors = {};
          for (let key in formData) {
            if (formData[key] === "") {
              errors[key] = true;
            } else {
              errors[key] = false;
            }
          }
          setError(errors);
      
          let checkErr = false;
          for (let key in errors) {
            if (errors[key] === true) {
              checkErr = true;
              break;
            }
          }
      
          if (!checkErr) {
      
            trigger(formData)
          }
        }
        const formHandler = (e) => {
          const { name, value } = e.target
          if (!value) {
            setError((prev) => {
              return {
                ...prev, [name]: true
              }
            })
          } else {
            setError((prev) => {
              return {
                ...prev, [name]: false
              }
            })
      
          }
          setFormData((prev) => {
            return {
              ...prev, [name]: value
            }
          })
        }
      
        useEffect(() => {
          if (data?.error) {
            toast.error(data?.message)
          } else if (data?.error == false) {
            toast.success(data?.message)
          }
        }, [data])
      

  return (
    <div className='ChangePassword'>
        <div className="Change-title">
            change password
        </div>
        <div className="item">
       <div className='password-name'>Old Password * </div>   
            <input className='password' type={!passwordIconShow?.old ? "text" : "password"} name='oldPassword'placeholder='Enter Current Password' value={formData?.oldPassword} onChange={formHandler} />
            {error?.oldPassword && <span style={{ color: "red" }}>Please Enter Old Password</span>}
        </div>
        <div className="item">
       <div className='password-name'>New Password * </div>   
            <input className='password'type={!passwordIconShow?.new ? "text" : "password"} name='newPassword' placeholder='Enter New Password' onChange={formHandler} />
            {error?.newPassword && <span style={{ color: "red" }}>Please Enter New Password</span>}
        </div>
        <div className="item">
       <div className='password-name'>Retype New Password * </div>   
            <input className='password'  type={!passwordIconShow?.confirm ? "text" : "password"} name='confirmNewPassword' placeholder='Confirm New Password' onChange={formHandler} />
            {error?.confirmNewPassword && <span style={{ color: "red" }}>Please Enter Confirm Password</span>}        </div>
<div className="btn-change-password">
    <span className="reset">Reset</span>
    <span className="reset submit"  onClick={sumnitHandler}>Submit</span>
</div>

    </div>
  )
}

export default ChangePassword