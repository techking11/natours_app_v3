import { useDispatch, useSelector } from "react-redux";
import ManageReviews from "../../components/ManageReviews/ManageReviews.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";
import { toggleModal } from "../../store/modal/modal.reducer";
import UpdateReviewsModal from "../../components/Modals/UpdateReviewsModal/UpdateReviewsModal.components";
import ModalContainer from "../../components/Modals/ModalContainer/ModalContainer.components";

export default function ReviewsManage() {

  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const openModal = () => dispatch(toggleModal());

  return (
    <main className="main">
      <ModalContainer showModal={showModal} openModal={openModal}>
        <UpdateReviewsModal openModal={openModal} />
      </ModalContainer>
      <div className="user-view">
        <UserMenu />
        <ManageReviews openModal={openModal} />
      </div>
    </main>
  );
}
