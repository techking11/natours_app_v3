import LogoWhite from "../../assets/img/logo-white.png";
import UserProfile from "../../assets/img/users/default.jpg"

import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogoItem,
  HeaderNavLink,
  HeaderNavSignup,
  NavSearch,
  NavSearchIcon,
  NavSearchInput,
  NavSearchSvg,
  NavUserProfile,
  ToursNavContainer,
  UserNavContainer,
} from "./Header.styles";
import { User } from "../../types/User.types";

export default function Header() {

  const user: User = {
    // id: 1,
    // name: 'Jonas',
    // photo: 'img/users/default.jpg'
  }

  return (
    <HeaderContainer>
      <ToursNavContainer>
        <HeaderNavLink to="/">All tours</HeaderNavLink>
        <NavSearch>
          <NavSearchIcon>
            <NavSearchSvg>
              <use xlinkHref="/img/icons.svg#icon-search"></use>
            </NavSearchSvg>
          </NavSearchIcon>
          <NavSearchInput type="text" placeholder="Search tours" />
        </NavSearch>
      </ToursNavContainer>
      <HeaderLogo>
        <HeaderLogoItem src={LogoWhite} alt="Natours logo" />
      </HeaderLogo>
      <UserNavContainer>
        <HeaderNavLink to="/booking">My bookings</HeaderNavLink>
        {user.id ? (
          <HeaderNavLink to="/account">
            <NavUserProfile src={UserProfile} alt="User Profile" />
            <span>Jonas</span>
          </HeaderNavLink>
        ) : (<>
          <HeaderNavLink to="/auth/login">Log in</HeaderNavLink>
          <HeaderNavSignup to="/auth/signup">Sign up</HeaderNavSignup>
        </>)
        }
      </UserNavContainer>
    </HeaderContainer>
  );
}
