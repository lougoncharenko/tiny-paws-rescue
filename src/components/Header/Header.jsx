import React from 'react';
import { NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css'
import {Container, Row} from 'reactstrap'
import logo from '../../assets/logo.png'


const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
              <div className="navigation">
                <ul className="menu">
                  <li className="nav_item">
                    <NavLink to='home'>Home</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='about'>About our Company</NavLink>
                  </li>
                  <li className="nav_item">
                    <NavLink to='dogs'>Find A Buddy</NavLink>
                  </li>
                </ul>
              </div>
              <div className="nav_icons">
              <Link to={'/cart'}><span className="cart_icon" >
                <i class="ri-shopping-cart-line ri-lg"></i>
                   <span className="badge">{1}</span>
                </span></Link>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
