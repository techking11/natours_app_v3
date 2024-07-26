import MainManagerUser from "../../../components/ManageUsers/MainManagerUsers/MainManagerUser.components";
import UserMenu from "../../../components/UserMenu/UserMenu.components";

export default function UsersMainManage() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <MainManagerUser />
      </div>
    </main>
  );
}