import TourCard from "../../components/TourCard/TourCard.components";
import { HomeContainer, TourCardContainer } from "./Home.styles";

export default function Home() {
  const newArr = [1, 2, 3, 4, 5, 6];
  return (
    <HomeContainer>
      <TourCardContainer>
        {
          newArr.map((i) => <TourCard key={i} />)
        }
      </TourCardContainer>
    </HomeContainer>
  );
}
