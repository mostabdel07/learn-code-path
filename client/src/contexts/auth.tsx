import { createContext, useContext, useEffect, useState } from "react";
import { useAuthToken } from "@/hooks/useAuthToken";

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

type AuthContextProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthContextProps> = ({
  children,
}: AuthContextProps) => {
  const { token, saveToken, clearToken } = useAuthToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(token)
  );

  const login = (newToken: string) => {
    saveToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(Boolean(token));
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
