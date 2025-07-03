"use client";

import { UserType } from "@/schema/auth.schema";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useCallback, useContext, useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const AppContext = React.createContext<{
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  user: UserType;
  setUser: (user: UserType) => void;
}>({
  isAuth: false,
  setIsAuth: () => {},
  user: {
    id: "",
    email: "",
    name: null,
    status: "ACTIVE",
    created_at: "",
    updated_at: "",
  },
  setUser: () => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuthState] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>({
    created_at: "",
    email: "",
    id: "",
    name: null,
    status: "ACTIVE",
    updated_at: "",
  });
  const userInfo =
    typeof window !== "undefined" && localStorage.getItem("userInfo");
  const setIsAuth = useCallback((isAuth: boolean) => {
    if (isAuth) {
      setIsAuthState(true);
    } else {
      setIsAuthState(false);
      //   removeTokensFromLocalStorage();
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, [userInfo]);

  return (
    // Provide the client to your App
    <AppContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppContext.Provider>
  );
}
