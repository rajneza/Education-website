import React from "react";
import img4 from "./images/sign_in_pic.jpg"

const Signin =() =>{
    return(
        <div className="signin">
        <div className="image-1">
            <div className="sign-text">
                <h1 className="sign-cont">Log in to Academy</h1>
            </div>
            <img src={img4} alt="" className="image-pic"/>
            
        </div>
        <div className="con-1">
           <div>
           <div>
           <div>
                <div>
                    <label htmlFor="" className="label-main">Email Address</label> <br />
                    <input type="email" className="input-main"/>
                </div>
                <div>
                    <label htmlFor="" className="label-main">Password</label> <br />
                    <input type="password" className="input-main"/>
                </div>
            </div>
           </div>
           <div className="butn-main">
            <button className="btn">Log in</button>
           </div>
           <div className="forgot-main">
            <a href="" className="forgot">Forgot Password?</a>
           </div>
           </div>
                
            </div>
        </div>
    )
}

export default Signin