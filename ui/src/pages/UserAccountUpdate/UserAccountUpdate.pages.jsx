import ProfileUpdate from "../../components/Profile/ProfileUpdate/ProfileUpdate.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";

export default function UserAccountUpdate() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <ProfileUpdate />
      </div>
    </main>
  );
}
