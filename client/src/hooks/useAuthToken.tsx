import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = Cookies.get("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken: string) => {
    Cookies.set("authToken", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    Cookies.remove("authToken");
    setToken(null);
  };

  const saveUserID = (userId: number) => {
    localStorage.setItem("session_id", userId.toString());
    setToken(null);
  };

  const clearUserID = () => {
    localStorage.removeItem("session_id");
    setToken(null);
  };

  return { token, saveToken, clearToken, saveUserID, clearUserID };
};
