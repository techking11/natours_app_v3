import TourCard from "../../components/TourCard/TourCard.components";
import { HomeContainer, TourCardContainer } from "./Home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <TourCardContainer>
        <TourCard />
      </TourCardContainer>
    </HomeContainer>
  );
}
