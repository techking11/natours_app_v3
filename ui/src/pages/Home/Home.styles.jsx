import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: #f7f7f7;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
`

export const TourCardContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7rem;
`