import { useEffect, useState } from "react";

export const useAuthSession = () => {
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    const storedsession = localStorage.getItem("session");

    if (storedsession) {
      setSession(storedsession);
    }
  }, []);

  const saveSession = (session: string) => {
    localStorage.setItem("session", session);
    setSession(session);
  };

  const clearSession = () => {
    localStorage.removeItem("session");
    setSession(null);
  };

  return {
    session,
    saveSession,
    clearSession,
  };
};
