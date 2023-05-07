import { useAuth } from "@/contexts/auth";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
}
