import UserMenu from "../../components/UserMenu/UserMenu.components";
import UserProfile from "../../components/Profile/UserProfile/UserProfile.components";

export default function UserAccount() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <UserProfile />
      </div>
    </main>
  );
}
