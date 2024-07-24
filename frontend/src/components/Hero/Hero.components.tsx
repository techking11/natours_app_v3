import {
  HeadingBoxer,
  HeadingBoxDetail,
  HeadingBoxGroup,
  HeadingBoxIcon,
  HeadingBoxText,
  HeadingPrimary,
  HeadingText,
  SectionHeader,
  HeadingHero,
  HeadingHeroOverlay,
  HeadingHeroImg,
} from "./Hero.styles";

import Tour1Cover from "../../assets/img/tours/tour-1-cover.jpg"

export default function Hero() {
  return (
    <SectionHeader>
      <HeadingHero>
        <HeadingHeroOverlay />
        <HeadingHeroImg src={Tour1Cover} alt="The Mountain Biker" />
      </HeadingHero>
      <HeadingBoxer>
        <HeadingPrimary>
          <HeadingText>The Park <br />Camper Tour</HeadingText>
        </HeadingPrimary>
        <HeadingBoxGroup>
          <HeadingBoxDetail>
            <HeadingBoxIcon>
              <use xlinkHref="img/icons.svg#icon-clock"></use>
            </HeadingBoxIcon>
            <HeadingBoxText>10 days</HeadingBoxText>
          </HeadingBoxDetail>
          <HeadingBoxDetail>
            <HeadingBoxIcon>
              <use xlinkHref="img/icons.svg#icon-map-pin"></use>
            </HeadingBoxIcon>
            <HeadingBoxText>Las Vegas, USA</HeadingBoxText>
          </HeadingBoxDetail>
        </HeadingBoxGroup>
      </HeadingBoxer>
    </SectionHeader>
  );
}
