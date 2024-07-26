import UpdateTour from "../../../components/ManageTours/UpdateTour/UpdateTours.components";
import UserMenu from "../../../components/UserMenu/UserMenu.components";

export default function ToursUpdate() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <UpdateTour />
      </div>
    </main>
  );
}