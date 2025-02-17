import React from 'react'
import {Link} from "react-router-dom"
const NavBar = ({dispatch}) => {
  return (
    <div className='mainSection'>
        <div className="navSection"><h1>Title</h1></div>
        <div className="menuSection">

            {/* <Link to='/vollyBall' className='link'>
            <div className="menu">Home</div>
            </Link>

            <Link to='/hocky' className='link'>
            <div className="menu">About</div>
            </Link>

            <Link to='/pubgi' className='link'>
            <div className="menu">Services</div>
            </Link>

            <Link to='/cricket' className='link'>
            <div className="menu">ContactUs</div>
            </Link> */}
            <button onClick={() =>dispatch({type : "show_Home"})}>Home</button>
            <button onClick={() =>dispatch({type : "show_About"})}>About</button>
            <button onClick={() =>dispatch({type : "show_ContactUs"})}>ContactUs</button>
            <button onClick={() =>dispatch({type : "show_Services"})}>Services</button>
               
        </div>
        <div className="User">
            <h4>LogIn/LogOut</h4>
        </div>
    </div>
  )
}

export default NavBar