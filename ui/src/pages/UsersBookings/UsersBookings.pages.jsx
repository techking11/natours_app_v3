import BookingContents from "../../components/BookingContents/BookingContents.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";

export default function UsersBookings() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <BookingContents />
      </div>
    </main>
  );
}
