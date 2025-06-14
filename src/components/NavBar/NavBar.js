import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />

      <Hamburger onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </Hamburger>

      <NavLinks className={menuOpen ? 'active' : ''}>
        <NavOptions>
          <NavLink>Home</NavLink>
          <NavLink>Movies</NavLink>
          <NavLink>TV shows</NavLink>
          <NavLink>Latest</NavLink>
          <NavLink>My list</NavLink>
        </NavOptions>

        <NavIcons>
          <i className="fa-solid fa-magnifying-glass icons"></i>
          <i className="fa-solid fa-gift icons"></i>
          <i className="fa-solid fa-bell icons"></i>
            <Avatar
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="User avatar"
      />
        </NavIcons>
      </NavLinks>

    
    </NavbarContainer>
  );
}

export default NavBar;




const NavbarContainer = styled.div`
  position: fixed;
  background-color: transparent;
  height: 27px;
  padding: 14px;
  width: 100%;
  transition: background-color 1s ease;
  display: flex;
  align-items: center;
  z-index: 1000;

  &.scrolled {
    background-color: #111;
  }
`;
 const Logo = styled.img`
  width: 105px;
  padding-left: 21px;
`;

 const Hamburger = styled.div`
  display: none;
  color: white;
  font-size: 24px;
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  width: 86%;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
    top: 54px;
    right: 0;
    width: 100%;
    background-color: #111;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;

    &.active {
      display: flex;
    }
  }
`;
const NavOptions = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled.p`
  color: white;
  margin-left: 45px;
  font-weight: 100;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 5px 0;
    margin-left: 20px;
  }
`;

const NavIcons = styled.div`
  color: white;
  display: flex;

  .icons {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-top: 15px;
    gap: 1em;
  }
`;

const Avatar = styled.img`
  width: 30px;
  margin: 0 21px;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: 10px;
  }
`;
