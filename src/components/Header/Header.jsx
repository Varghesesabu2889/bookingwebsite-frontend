import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Button } from 'reactstrap';
import logo from '../../assets/images/IMG_20240317_201244.jpg';
import './header.css';

const nav__link = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];

const Header = () => {


  return (
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            {/* menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      activeClassName="active__link"
                      exact={item.path === '/home'}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* buttons */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className='btn secondary__btn' ><Link to={'/login'}>
                  Login
                </Link></Button>
                <Button className='btn primary__btn'><Link to={'/register'}>
                  Register
                </Link></Button>
              </div>
              <span className='mobile__menu'>
                <Link>
                  <i className="ri-menu-line"></i>
                </Link>
              </span>
            </div>
          </div>
        </Row>
      </Container>
  );
};

export default Header;
