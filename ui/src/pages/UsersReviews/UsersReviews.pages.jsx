import { useDispatch, useSelector } from "react-redux";
import ReviewsContents from "../../components/ReviewsContents/ReviewsContents.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";
import { toggleModal } from "../../store/modal/modal.reducer";
import ModalContainer from "../../components/Modals/ModalContainer/ModalContainer.components";
import UpdateReviewsModal from "../../components/Modals/UpdateReviewsModal/UpdateReviewsModal.components";
import YesNoModal from "../../components/Modals/YesNoModal/YesNoModal.components";

export default function UsersReviews() {

  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const openModal = () => dispatch(toggleModal());

  return (
    <main className="main">
      <ModalContainer showModal={showModal} openModal={openModal}>
        <UpdateReviewsModal openModal={openModal} />
        <YesNoModal openModal={openModal} />
      </ModalContainer>
      <div className="user-view">
        <UserMenu />
        <ReviewsContents openModal={openModal} />
      </div>
    </main>
  );
}
