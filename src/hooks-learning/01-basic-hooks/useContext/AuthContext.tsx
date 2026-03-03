"use client"
import { createContext, useContext, useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
};

type AuthContentType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContentType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = () => {
    setUser({ id: 1, name: "rajender kumar" });
  };

  const logout = () => {
    setUser(null);
  };
  const value = useMemo(() => {
    return {
      user,
      login,
      logout,
    };
  }, [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
   if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
