import LogoGreen from "../../assets/img/logo-green.png";
import {
  FooterContainer,
  Copyright,
  FooterLogo,
  LogoItem,
  NavContainer,
  NavItem,
  NavLink,
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <LogoItem src={LogoGreen} alt="Natours" />
      </FooterLogo>
      <NavContainer>
        <NavItem>
          <NavLink to="/about-us">About us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/download">Download apps</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/guide">Become a guide</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/careers">Careers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavContainer>
      <Copyright>
        &copy; by Nay Myo Aung - Software Engineer. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
