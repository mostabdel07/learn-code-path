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

  return { token, saveToken, clearToken };
};
