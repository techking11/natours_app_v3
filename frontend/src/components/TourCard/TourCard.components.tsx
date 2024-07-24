import ToursCover1 from "../../assets/img/tours/tour-1-cover.jpg";

import {
  CardItem,
  CardHeader,
  CardPicture,
  PictureOverlay,
  PictureItem,
  HeadingTertirary,
  HeadingItem,
  CardDetails,
  SubHeading,
  CardText,
  CardData,
  CardIcon,
  CardFooter,
  FooterVal,
  FooterText,
  FooterItem,
  CardRatings,
  FooterButton,
} from "./TourCard.styles";

export default function TourCard() {
  return (
    <CardItem>
      <CardHeader>
        <CardPicture>
          <PictureOverlay>&nbsp;</PictureOverlay>
          <PictureItem src={ToursCover1} alt="Tour 1" />
        </CardPicture>

        <HeadingTertirary>
          <HeadingItem>The Forest Hiker</HeadingItem>
        </HeadingTertirary>
      </CardHeader>

      <CardDetails>
        <SubHeading>Easy 5-day tour</SubHeading>
        <CardText>
          Breathtaking hike through the Canadian Banff National Park
        </CardText>
        <CardData>
          <CardIcon>
            <use xlinkHref="img/icons.svg#icon-map-pin"></use>
          </CardIcon>
          <span>Banff, Canada</span>
        </CardData>
        <CardData>
          <CardIcon>
            <use xlinkHref="img/icons.svg#icon-calendar"></use>
          </CardIcon>
          <span>April 2021</span>
        </CardData>
        <CardData>
          <CardIcon>
            <use xlinkHref="img/icons.svg#icon-flag"></use>
          </CardIcon>
          <span>3 stops</span>
        </CardData>
        <CardData>
          <CardIcon>
            <use xlinkHref="img/icons.svg#icon-user"></use>
          </CardIcon>
          <span>25 people</span>
        </CardData>
      </CardDetails>

      <CardFooter>
        <FooterItem>
          <FooterVal>$297 </FooterVal>
          <FooterText>per person</FooterText>
        </FooterItem>
        <CardRatings>
          <FooterVal>4.9 </FooterVal>
          <FooterText>rating (21)</FooterText>
        </CardRatings>
        <FooterButton to="/tours/64bd36868b4c62a9cb577d8b">Details</FooterButton>
      </CardFooter>
    </CardItem>
  );
}
