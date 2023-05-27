import { useEffect, useState } from "react";
import { AES, enc } from "crypto-js";

const secretKey = "YourSecretKey"; // Replace with your own secret key

export const useAuthSession = () => {
  const [session, setSession] = useState<string | null>(null);

  useEffect(() => {
    const encryptedData = localStorage.getItem("session");
    if (encryptedData) {
      const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
        enc.Utf8
      );

      setSession(decryptedData);
    }
  }, []);

  const saveSession = (session: string) => {
    const encryptedData = AES.encrypt(session, secretKey).toString();

    localStorage.setItem("session", encryptedData);
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
