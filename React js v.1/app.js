import React, { useState } from 'react';
import UserSignUpFrom from './UserSignUpFrom';
import VendorSingupFrom from './VendorSingupFrom';
import  './style.css';

const SignUP = () => {
    const [isContainerActive, setIsContainerActive] = useState(false);
    const handleLogin = () => {
        setIsContainerActive(false);
     };  
     const handleRegister = () => {
        setIsContainerActive(true);
     };
    return (
        <>
            <Topbar/>
            <Navbar/> 
            <div  className= {isContainerActive ? "container sign-up-mode" : "container"}> 
                <div className="forms-container">
                    <div className="signin-signup">                        
                        <UserSignUpFrom />
                        <VendorSingupFrom/>
                    </div>
                    
                </div>
                <div className="panels-container">
                    <div className="panel left-panel"> 
                        <div class="content">
                            <h3>New here ?</h3>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent"  id="sign-up-btn" onClick={handleRegister}> 
                                Sign up
                            </button>
                        </div>
                        <img src="./images/signup.svg" className="image" alt=""  />
                    </div>
                    <div className="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
                            </p>
                            <button  className="btn transparent" id="sign-in-btn"   onClick={handleLogin}>
                                Sign in
                            </button>
                        </div>
                        <img src="./images/signin.svg" className="image"  alt="" />
                    </div>
                </div>
            </div> 
            <Footer/>
        </>
    );
};

export default SignUP;