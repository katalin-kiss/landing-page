import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Wander in Japan
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth="true"
                  duration={300}
                  spy={true}
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="currenttours"
                  smooth="true"
                  duration={300}
                  spy={true}
                  offset={-80}
                >
                  Current Tours
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="travelalone"
                  smooth="true"
                  duration={300}
                  spy={true}
                  offset={-80}
                >
                  Travel Alone
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth="true"
                  duration={300}
                  spy={true}
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink
                  to="contact"
                  smooth="true"
                  duration={300}
                  spy="true"
                  offset={-80}
                >
                  Any Questions?
                </NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
