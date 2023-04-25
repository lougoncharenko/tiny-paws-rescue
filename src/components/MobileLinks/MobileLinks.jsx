import React from 'react';
import { NavLink} from 'react-router-dom';

const MobileLinks = () => {
    return (
        <section className="mobile_container_nav_links" role="navigation" aria-describedby="mobile_container_nav_links">
        <ul>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/about'>About us</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/dogs'>Find A buddy</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/dogs'>Get Involved</NavLink>
              </li>
              <li className="nav_item" aria-describedby="nav_item">
                <NavLink to='/dogs'>Contact Us</NavLink>
              </li>
            </ul>
        </section>  
    )
}

export default MobileLinks;