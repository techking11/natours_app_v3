import React from "react";
import LogoWhite from "../../assets/img/logo-white.png";
import UserProfile from "../../assets/img/users/default.jpg"
import { HeaderProps } from "../../types/User.types";

import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavLink,
  HeaderNavSignup,
  NavSearch,
  NavSearchIcon,
  NavSearchInput,
  NavUserProfile,
  ToursNavContainer,
  UserNavContainer,
} from "./Header.styles";

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <HeaderContainer>
      <ToursNavContainer>
        <HeaderNavLink to="/">All tours</HeaderNavLink>
        <NavSearch>
          <NavSearchIcon>
            <svg>
              <use xlinkHref="/img/icons.svg#icon-search"></use>
            </svg>
          </NavSearchIcon>
          <NavSearchInput type="text" placeholder="Search tours" />
        </NavSearch>
      </ToursNavContainer>
      <HeaderLogo>
        <img src={LogoWhite} alt="Natours logo" />
      </HeaderLogo>
      <UserNavContainer>
        <HeaderNavLink to="/booking">My bookings</HeaderNavLink>
        {user ? (
          <HeaderNavLink to="/account">
            <NavUserProfile src={UserProfile} alt="User Profile" />
            <span>Jonas</span>
          </HeaderNavLink>
        ) : (<>
          <HeaderNavLink to="/login">Log in</HeaderNavLink>
          <HeaderNavSignup to="/sign-up">Sign up</HeaderNavSignup>
        </>)
        }
      </UserNavContainer>
    </HeaderContainer>
  );
}

export default Header
