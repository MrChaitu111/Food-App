import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './LoginPopup.css';

const LoginPopup = ({setShowLogin}) => {
        const[currentState,setCurrrentState]=useState("sign Up");
    
  return (
                <div className="login-popup">
                    <form className='login-popup-container'>
                        <div className='login-popup-title'>
                            <h2>{currentState}</h2>
                            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='cross'/>
                </div>
        
                <div className='login-popup-inputs'>
                    {currentState==="Sign Up"?<input type="text" placeholder="your name" required/> :<></>}
                    <input type="email" placeholder="Your Email" required/>
                    <input type="Password" placeholder="Password" required/>
                    <button>{currentState==="Sign Up"? "Create Account":"Login"}</button>
        
                </div>
        
                <div className="login-popup-condition">
                    <input type="checkbox"/>
                    <p>By contiuing, i agree with terms of  use & Privacy Policy</p>
        
                </div>
                {currentState ==="Sign Up"
                ?<p> Alredy have an account ? <span onClick={()=> setCurrrentState("Login")}>Login</span></p>
                :<p> Create a new account ? <span onClick={()=> setCurrrentState("Sign Up")}> Click me</span></p>}
                </form>
                </div>

  )
}

export default LoginPopup