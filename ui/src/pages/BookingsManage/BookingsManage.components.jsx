import UserMenu from "../../components/UserMenu/UserMenu.components";
import ManageBookings from "../../components/ManageBookings/ManageBookings.components";

export default function BookingsManage() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <ManageBookings />
      </div>
    </main>
  );
}
