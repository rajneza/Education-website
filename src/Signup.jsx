import React, { useRef } from "react";
import img4 from "./images/sign_in_pic.jpg"
import { useNavigate } from "react-router-dom";


const Signup = () =>{

    let firstnameRef=useRef();
    let lastnameRef=useRef();
    let emailRef=useRef();
    let phoneRef=useRef();
    let passwordRef=useRef();
    let confirmpasswordRef=useRef();
    let navigate=useNavigate()
    

    let handleclick = (e) =>{
        e.preventDefault()
        let firstname=firstnameRef.current.value;
        let lastname=lastnameRef.current.value;
        let email=emailRef.current.value;
        let phone=phoneRef.current.value;
        let password=passwordRef.current.value;
        let confirm=confirmpasswordRef.current.value;
        if (firstname === "" || lastname === "" || email === "" || phone === "" || password === "" || confirm === "" ) {
            alert("All the fields should be filled")
            if (password !== confirm) {
                alert("Confirm password is not matched")
            } 
        }
        else
        {
            navigate("/signin")
        }
        
    }
    return(
        <div style={{display:"flex"}}>
            
            <div className="image-1">
            <div className="sign-text">
                <h1 className="sign-cont">Sign Up to the Academy</h1>
            </div>
            <img src={img4} alt="" className="image-pic"/>
            
            </div>
            <div className="signup">
                <form>
                    <div>
                        <div className="form-div">
                            <div className="input-div">
                            <label htmlFor="" className="label-main">First name</label> <br />
                            <input type="text" className="input-main" ref={firstnameRef}/>
                            </div>
                            <div>
                            <label htmlFor="" className="label-main">last name</label> <br />
                            <input type="text" className="input-main"  ref={lastnameRef}/>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="input-div">
                            <label htmlFor="" className="label-main">Email</label> <br />
                            <input type="email" className="input-main"  ref={emailRef}/>
                            </div>
                            <div>
                            <label htmlFor="" className="label-main">Phone</label> <br />
                            <input type="number" className="input-main"  ref={phoneRef}/>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="input-div">
                            <label htmlFor="" className="label-main">Password</label> <br />
                            <input type="password" className="input-main"  ref={passwordRef}/>
                            </div>
                            <div>
                            <label htmlFor="" className="label-main">Confirm Password</label> <br />
                            <input type="password" className="input-main"  ref={confirmpasswordRef}/>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="input-div">
                            <label htmlFor="" className="label-main">Course Name</label> <br />
                            <select name="" id="input-select" className="input-main">
                                <option value="" className="input-select">--Select--</option>
                                <option value="" className="input-select">Python Full stack</option>
                                <option value="" className="input-select">MERN Full stack</option>
                                <option value="" className="input-select">Java Full stack</option>
                                <option value="" className="input-select">MEAN Full stack</option>
                            </select>

                            </div>
                            <div>
                            <label htmlFor="" className="label-main"> Course Fees</label> <br />
                            <input type="number" value="20000" className="input-main"/>
                            </div>
                        </div>
                        <div className="butn-main">
                            <button className="btn" id="btn"  onClick={handleclick}>
                            Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup