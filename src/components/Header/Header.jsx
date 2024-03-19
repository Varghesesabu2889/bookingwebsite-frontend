import React,{useRef,useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap'; 
import logo from '../../assets/images/logo.jpg';
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

const headerRef = useRef(null)

const stickyHeaderFunc = ()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || 
      document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')

      }
  })
}

useEffect(()=>{
stickyHeaderFunc()
return window.removeEventListener('scroll',stickyHeaderFunc)
},[])


  return (
    <header className='header' ref={headerRef}>
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
              <Button className='btn secondary__btn' as={Link} to={'/login'}>
                Login
              </Button>
              <Button className='btn primary__btn' as={Link} to={'/register'}>
                Register
              </Button>
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
    </header>
  );
};

export default Header;
