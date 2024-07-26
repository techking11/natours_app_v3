import SecurityContent from "../../components/SecurityContent/SecurityContent.components";
import UserMenu from "../../components/UserMenu/UserMenu.components";

export default function AccountSecurity() {
  return (
    <main className="main">
      <div className="user-view">
        <UserMenu />
        <SecurityContent />
      </div>
    </main>
  );
}
