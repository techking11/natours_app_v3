import ReviewsContents from "../../components/ReviewsContents/ReviewsContents.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";

export default function UsersReviews() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <ReviewsContents />
      </div>
    </main>
  );
}
