import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #f7f7f7;
  padding: 6rem 4rem 3rem 4rem;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 0.75rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const FooterLogo = styled.div`
  grid-row: 1 / 3;
  -ms-flex-item-align: center;
  align-self: center;
`

export const LogoItem = styled.img`
  height: 3rem;
`

export const NavContainer = styled.ul`
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

export const NavItem = styled.li`
  margin-left: 1.5rem;
`

export const NavLink = styled(Link)`
  color: #777;
  text-decoration: none !important;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  
  &:hover,
  &:active {
    color: #55c57a;
  }
`

export const Copyright = styled.p`
  justify-self: end;
  color: #999;
`