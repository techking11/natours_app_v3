import styled from "styled-components";

export const SectionHeader = styled.section`
  position: relative;
  height: 38vw;
`

export const HeadingHero = styled.div`
  height: 100%;
`

export const HeadingHeroImg = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  -o-object-position: 50% 25%;
  object-position: 50% 25%;
`

export const HeadingHeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  content: '&nbsp;';
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  opacity: 0.85;
`

export const HeadingBoxer = styled.div`
  position: absolute;
  bottom: 13vw;
  left: 50%;
  top: 35%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export const Heading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
`

export const HeadingPrimary = styled(Heading)`
  font-size: 5rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
`

export const HeadingText = styled.span`
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

export const HeadingBoxGroup = styled.div`
  color: #f7f7f7;
  margin-top: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const HeadingBoxDetail = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.15);
`

export const BoxIcon = styled.svg`
  margin-right: 0.8rem;
  :not(:last-child) {
    margin-right: 4rem;
  }
`

export const HeadingBoxIcon = styled(BoxIcon)`
  height: 2rem;
  width: 2rem;
  fill: currentColor;
  -webkit-filter: drop-shadow(0 0.75rem 0.5rem rgba(0, 0, 0, 0.25));
  filter: drop-shadow(0 0.75rem 0.5rem rgba(0, 0, 0, 0.25));
`

export const HeadingBoxText = styled.span``;