import { createContext, useContext, useEffect, useState } from "react";
import { useAuthToken } from "@/hooks/useAuthToken";

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  userId: string | null;
  login: (token: string, userId: number) => void;
  logout: () => void;
};

type AuthContextProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthContextProps> = ({
  children,
}: AuthContextProps) => {
  const {
    token,
    saveToken,
    clearToken,
    userId,
    saveUserID,
    clearUserID,
    clearUserRole,
  } = useAuthToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(token)
  );

  const login = (newToken: string, userId: number) => {
    saveToken(newToken);
    saveUserID(userId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearToken();
    clearUserID();
    clearUserRole();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(Boolean(token));
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, logout, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
