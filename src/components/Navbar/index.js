import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>
        <NavItems>
  <NavLink to="/skills" style={{color: '#F0E68C', fontSize: '20px'}} activeClassName="active-link">Skills</NavLink>
  <NavLink to="/experience" style={{color: '#F0E68C', fontSize: '20px'}} activeClassName="active-link">Experience</NavLink>
  <NavLink to="/projects" style={{color: '#F0E68C', fontSize: '20px'}} activeClassName="active-link">Projects</NavLink>
  <NavLink to="/education" style={{color: '#F0E68C', fontSize: '20px'}} activeClassName="active-link">Education</NavLink>
  <NavLink to="/contact" style={{color: '#F0E68C', fontSize: '20px'}} activeClassName="active-link">Contact</NavLink>
</NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink to="/about" onClick={() => { setIsOpen(!isOpen); }}>About</MobileLink>
            <MobileLink to="/skills" onClick={() => { setIsOpen(!isOpen); }}>Skills</MobileLink>
            <MobileLink to="/experience" onClick={() => { setIsOpen(!isOpen); }}>Experience</MobileLink>
            <MobileLink to="/projects" onClick={() => { setIsOpen(!isOpen); }}>Projects</MobileLink>
            <MobileLink to="/education" onClick={() => { setIsOpen(!isOpen); }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
