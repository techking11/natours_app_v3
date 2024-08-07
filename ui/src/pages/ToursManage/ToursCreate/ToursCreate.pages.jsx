import CreateTours from "../../../components/ManageTours/CreateTour/CreateTour.components";
import UserMenu from "../../../components/UserMenu/UserMenu.components";

export default function ToursCreate() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <CreateTours />
      </div>
    </main>
  );
}