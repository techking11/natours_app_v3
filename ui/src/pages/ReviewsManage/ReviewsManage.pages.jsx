import ManageReviews from "../../components/ManageReviews/ManageReviews.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";

export default function ReviewsManage() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <ManageReviews />
      </div>
    </main>
  );
}
