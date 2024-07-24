import Filters from "../../components/Filters/Filters.components";
import Paginate from "../../components/Paginate/Paginate.components";
import TourCard from "../../components/TourCard/TourCard.components";
import useTitle from "../../components/UseTitle/UseTitle.components";
import { HomeContainer, TourCardContainer } from "./Home.styles";

export default function Home() {
  useTitle('Natours | Exciting tours for adventurous people');
  const newArr = [1, 2, 3, 4, 5, 6];
  return (
    <HomeContainer>
      <div className="overview-container">
        < Filters />
        <TourCardContainer>
          {
            newArr.map((i) => <TourCard key={i} />)
          }
        </TourCardContainer>
        <Paginate />
      </div>
    </HomeContainer>
  );
}
