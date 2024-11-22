import { useEffect, useState } from 'react';
import { loginlogo } from '../../assets/Index';
import './style.scss';
import { useLoginMutation } from '../../services/auth/Login';
import { useNavigate } from 'react-router-dom';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../services/sruleModalSlice';
import { toast } from 'react-toastify';
const Login = () => {
  const [trigger, {data, isLoading}] = useLoginMutation();


const [formData , setFormData]= useState({
  user_name:'',
  password:'',
})
// const dispatch = useDispatch();

const formHandler = (e) =>{
  const {name, value} = e.target;


  setFormData((prev)=>{
    return{
      ...prev,[name]:value
    }
  })
}
const submitHandler = (e) => {
  e.preventDefault();
  trigger(formData); // Dispatch the loginUser thunk
};
const dispatch = useDispatch()
const nav = useNavigate()
useEffect(() => {
  const token = localStorage.getItem("token")
  if(token){
    nav("/")
  }
if(data?.data?.token){
  const token = data?.data?.token
  const user_name = data?.data?.user_name

  const user_type_id = data?.data?.user_type_id
  const chatId = data?.data?.chatId
  const passChange = data?.data?.passChange
  const ruleType = data?.data?.ruleType
  const telegramConnected = data?.data?.telegramConnected
  const is_rules_displayed = data?.data?.is_rules_displayed
  localStorage.setItem("token",token)
  localStorage.setItem("is_rules_displayed",is_rules_displayed)
  localStorage.setItem("user_name",user_name)
  localStorage.setItem("user_type_id",user_type_id)
  localStorage.setItem("chatId",chatId)
  localStorage.setItem("passChange",passChange)
  localStorage.setItem("ruleType",ruleType)
  localStorage.setItem("telegramConnected",telegramConnected)
  toast.success(data?.message);
  dispatch(loginSuccess());
  nav("/")
}
 
 else {
  toast.error(data?.message);
}

}, [data])


  return (
   <>
   {isLoading ? <Loaderlogo />:
   <div className="bg_login">
    <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
    </div>
<div className="wrapper" id='wrapper'>
  <div className="login-title">Sign in</div>
  <div className="logo">
    <img src={loginlogo} alt="logo" />
  </div>
  <div className="form" id='login'>
<section className='login_content'>
<form>
<div className="linput">
  <label htmlFor="">
    <i className='fa fa-user'></i>
  </label>
  <input type="text" className='form-control ng-dirty ng-valid ng-touched' required={1} placeholder='username' name='user_name' onChange={formHandler} />
</div>
<div className="linput">
  <label htmlFor="">
    <i className='fa fa-unlock-alt'></i>
  </label>
  <input type="password" className='form-control ng-dirty ng-valid ng-touched' name='password' required={1} placeholder='Password' onChange={formHandler}/>
</div>
<div className="checkbox">
  <input type="checkbox" className='form-control ng-dirty ng-valid ng-touched' required={1} placeholder='Username' />
  <label htmlFor="">
Remember me
  </label>
</div>
<div className="submit-f">

  <button className='btn btn-default submit' onClick={submitHandler} type='submit'>Log in</button>

{/* <h6 className='note'>-</h6> */}
</div>

</form>
</section>
  </div>
</div>

   </div>
   }
   
   </>
  )
}

export default Login