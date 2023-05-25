import React, { createContext } from "react";

type User = {
  id: number;
  username: string;
  email: string;
  personal_data: any;
  created_at: string;
  updated_at: string;
};

type UserContextProps = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});
