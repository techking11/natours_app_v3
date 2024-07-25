import styled from "styled-components";
import { ButtonLink } from "../GlobalStyles/Extensive.styles";

export const CardItem = styled.div`
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  -webkit-transition: 0.3s all;
  transition: 0.3s all;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

// Tour Card Header

export const CardHeader = styled.div`
  position: relative;
`

export const CardDiscount = styled.div`
  position: absolute;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  padding: .5rem 1rem;
  background-color: #f59840;
  top: 0;
  right: 0;
  z-index: 1;
`

export const CardPicture = styled.div`
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
  height: 22rem;
`

export const PictureOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  opacity: 0.7;
`

export const PictureItem = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

export const Heading = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
`

export const HeadingTertirary = styled(Heading)`
  font-size: 2.75rem;
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 70%;
  z-index: 10;
`

export const HeadingItem = styled.span`
  padding: 1rem 1.5rem;
  line-height: 1;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(rgba(125, 213, 111, 0.85)),
    to(rgba(40, 180, 135, 0.85))
  );
  background-image: linear-gradient(
    to bottom right,
    rgba(125, 213, 111, 0.85),
    rgba(40, 180, 135, 0.85)
  );
`

// Tour Card Details

export const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.75rem;
  grid-column-gap: 2rem;
  padding: 2.5rem 3rem;
`

export const SubHeading = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  grid-column: 1 / -1;
`

export const CardText = styled.p`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
`

export const CardData = styled.div`
 font-size: 1.3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; 
`

export const CardIcon = styled.svg`
  margin-right: 0.7rem;
  height: 2rem;
  width: 2rem;
  fill: #55c57a;
`

// Tour Card Footer

export const CardFooter = styled.div`
  background-color: #f7f7f7;
  padding: 2.5rem 3rem;
  border-top: 1px solid #f1f1f1;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: auto;
`

export const FooterItem = styled.p``

export const FooterVal = styled.span`
  font-weight: 700;
`

export const FooterText = styled.span`
  color: #999;
`

export const CardRatings = styled.p`
  grid-row: 2 / 3;
`

export const FooterButton = styled(ButtonLink)`
  grid-row: 1 / 3;
  justify-self: end;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: #55c57a;
  color: #fff;
  padding: 1.25rem 3rem !important;
  border-radius: 10rem;
  
  &:hover {
    text-shadow: none;
  }
  
  &::after {
    background-color: #55c57a;
  }
`