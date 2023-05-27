import { createContext, useContext, useEffect, useState } from "react";
import { useAuthSession } from "@/hooks/useAuthSession";

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface Session {
  user: User;
  token: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  session: Session | null;
  login: (session: Session) => void;
  logout: () => void;
};

type AuthContextProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  session: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthContextProps> = ({
  children,
}: AuthContextProps) => {
  const { session, saveSession, clearSession } = useAuthSession();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(session)
  );

  const login = (session: Session) => {
    saveSession(JSON.stringify(session));

    setIsAuthenticated(true);
  };

  const logout = () => {
    clearSession();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const parsedSession = session ? JSON.parse(session) : null;
    setIsAuthenticated(Boolean(parsedSession));
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        session: session ? JSON.parse(session) : null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
