import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from "../../images/logo2.png"
function Header() {
    return(
        <nav className='ui raised very segment'>
            <a href= "/home" className='ui teal inverted segment'>TOP JOBS</a>
            <a href= "/home"><img src={logo} className='logo'></img></a>
            <div className='ui right floated header'>
                <button className='ui button'>
                 <Link to="/home"> Home </Link>
                </button>
                <button className='ui button'>
                <Link to="/jobs"> Jobs </Link>
                </button>
                 <button className='ui button contact-button'>
                 <Link to="/contact"> Contact Us </Link>
                </button>
            </div>
        </nav>
    ) 
}
export default Header;