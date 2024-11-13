"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { UserData } from "@/lib/types";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
  user: UserData | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  // Load auth state on mount
  useEffect(() => {
    const storedAuthState = localStorage.getItem("isLoggedIn");
    if (storedAuthState) {
      setIsLoggedIn(JSON.parse(storedAuthState));
    }
    setIsLoading(false);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    setUser({
      id: 0,
      name: "",
      email: "",
      avatar: "",
      reservationCount: 0,
      pastReservations: [],
    });
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, isLoading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
