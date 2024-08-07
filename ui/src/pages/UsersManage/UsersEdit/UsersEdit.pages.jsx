import EditUser from "../../../components/ManageUsers/EditUsers/EditUser.components";
import UserMenu from "../../../components/UserMenu/UserMenu.components";

export default function UsersCreateManage() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <EditUser />
      </div>
    </main>
  );
}