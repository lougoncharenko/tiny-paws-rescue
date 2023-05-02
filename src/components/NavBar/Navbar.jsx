import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
      <img className="logo" src={logo} alt="logo" />
      </a>
      <button 
      className="hamburger"
       onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
           <svg 
            className='mobile_svg'
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="40" 
            height="40">
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#000"></path>
            </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
               <ul>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/'>Home</NavLink>
              </li>   
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/dogs'>Find A buddy</NavLink>
              </li> 
               <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/involvement'>Get Involved</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/about'>About us</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/contact'>Contact Us</NavLink>
              </li>
            </ul>
      
       
      </div>
    </nav>
  );
}