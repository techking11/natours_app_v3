import { useDispatch, useSelector } from "react-redux";

import Hero from "../../components/Hero/Hero.components";
import useTitle from "../../components/UseTitle/UseTitle.components";
import Description from "../../components/Description/Description.components";
import PicturesBoxs from "../../components/Pictures/Pictures.components";
import TourReviews from "../../components/TourReviews/TourReview.components";
import BookTour from "../../components/BookTour/BookTour.components";
import ModalContainer from "../../components/Modals/ModalContainer/ModalContainer.components";
import ReviewsModal from "../../components/Modals/ReviewsModal/ReviewsModal.components";
import { toggleModal } from "../../store/modal/modal.reducer";

export default function Tour() {

  useTitle('The Park Camper | Natours');
  const dispatch = useDispatch();

  const showModal = useSelector((state) => state.modal.showModal);
  const openModal = () => dispatch(toggleModal());

  return (
    <>
      <ModalContainer showModal={showModal} openModal={openModal}>
        <ReviewsModal />
      </ModalContainer>
      <Hero />
      <Description />
      <PicturesBoxs />
      <TourReviews openModal={openModal} />
      <BookTour />
    </>
  )
}