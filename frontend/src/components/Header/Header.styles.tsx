import styled from "styled-components";
import { ButtonLink } from "../Global/Extensive.styles";

export const HeaderContainer = styled.header`
  background-color: #444;
  padding: 0 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const NavContainer = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const ToursNavContainer = styled(NavContainer)`
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;
`

export const NavSearch = styled.form`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const HeaderNavLink = styled(ButtonLink)``

export const HeaderNavSignup = styled(HeaderNavLink)`
  padding: 1rem 3rem;
  border-radius: 10rem;
  border: 1px solid currentColor !important;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f7f7f7;
    color: #777;
    text-shadow: none;
    border-color: #f7f7f7;
  }
`

export const NavSearchIcon = styled.button`
  background: none;
  border: none;
  margin-right: 0.8rem;
  -webkit-transform: translateY(1px);
  transform: translateY(1px);
`

export const NavSearchSvg = styled.svg`
  height: 2rem;
  width: 2rem;
  fill: #f7f7f7;
`

export const NavSearchInput = styled.input`
  font-family: inherit;
  font-weight: inherit;
  text-transform: uppercase;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #f7f7f7;
  padding-bottom: 3px;
  border-bottom: 1px solid #999;
  width: 18rem;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  
  &::-webkit-input-placeholder {
    color: #999;
  }
    
  &:-ms-input-placeholder {
    color: #999;
  }
    
  &::-ms-input-placeholder {
    color: #999;
  }
    
  &::placeholder {
    color: #999;
  }
    
  &:focus {
    outline: none;
    width: 25rem;
    border-bottom: 1px solid currentColor;
  }
`

export const HeaderLogo = styled.div``

export const HeaderLogoItem = styled.img`
  height: 3.5rem;
`

export const UserNavContainer = styled(NavContainer)`
  -webkit-box-flex: 0;
  -ms-flex: 0 1 40%;
  flex: 0 1 40%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`

export const NavUserProfile = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
`