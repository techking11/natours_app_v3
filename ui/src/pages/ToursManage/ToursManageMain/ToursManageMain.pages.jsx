import MainManageTour from "../../../components/ManageTours/MainManageTour/MainManageTour.components";
import UserMenu from "../../../components/UserMenu/UserMenu.components";

export default function ToursManageMain() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <MainManageTour />
      </div>
    </main>
  );
}