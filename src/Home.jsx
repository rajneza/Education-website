import React from 'react';
import img1 from './images/homepic.jpg'
import img2 from './images/logo.jpg'
import img3 from './images/container.jpg'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home=()=>{
    return(
        <div> 
            <nav className='navbar'>
                <div className='logo-main'>
                <img src={img2} alt="" className='logo-img'/>
                </div>
                  <div className='links-main'>
                    <Link to="" className='links'>Home</Link>
                    <Link to="" className='links'>About us</Link>
                    <Link to="/signin" className='links'>Sign in</Link>
                    <Link to="/signup" className='links'>Sign up</Link>
                    <Link to="" className='links'>Contact Us</Link>
                  </div>
            </nav>
            <div className='container'>
                <div className='container-content'>
                    <img src={img3} alt="" className='container-img1'/>
                    <h1 className='text'><span className='text1'>Online <br /> Education <br /></span><span className='text2'> Website <br />Solution</span></h1>
                </div>
                <div className='container-img'>
                    <img src={img1} alt="" className='cont-img'/>
                </div>
            </div>

        </div>
    )
}

export default Home