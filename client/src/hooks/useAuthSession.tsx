import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const useAuthSession = () => {
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    const storedsession = Cookies.get("session");
    if (storedsession) {
      setSession(storedsession);
    }
  }, []);

  const saveSession = (session: string) => {
    Cookies.set("session", session);
    setSession(session);
  };

  const clearSession = () => {
    Cookies.remove("session");
    setSession(null);
  };

  return {
    session,
    saveSession,
    clearSession,
  };
};
