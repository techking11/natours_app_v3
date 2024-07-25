import { Fragment } from "react/jsx-runtime";
import Hero from "../../components/Hero/Hero.components";
import useTitle from "../../components/UseTitle/UseTitle.components";
import Description from "../../components/Description/Description.components";
import PicturesBoxs from "../../components/Pictures/Pictures.components";
// import MapBoxs from "../../components/MapBox/MapBox.components";
import TourReviews from "../../components/TourReviews/TourReview.components";
import ReviewsModal from "../../components/ReviewsModal/ReviewsModal.components";
import BookTour from "../../components/BookTour/BookTour.components";

export default function Tour() {
  useTitle('The Park Camper | Natours');
  return (
    <Fragment>
      <ReviewsModal />
      <Hero />
      <Description />
      <PicturesBoxs />
      {/* <MapBoxs /> */}
      <TourReviews />
      <BookTour />
    </Fragment>
  )
}