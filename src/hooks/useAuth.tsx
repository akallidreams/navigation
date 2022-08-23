import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, memo, ReactNode, useContext, useState } from "react";

interface IAuthContext {
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    user: any;
    isAuthenticated: boolean;
  };
  actions: {
    setTokens: (tokens: { accessToken: string; refreshToken: string }) => void;
    clearAuth: () => void;
    setUser: (user: any) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
  };
}

const defaultAuthContext = {
  data: {
    tokens: {
      accessToken: "",
      refreshToken: "",
    },
    user: null,
    isAuthenticated: false,
  },
  actions: {
    setTokens: (tokens: { accessToken: string; refreshToken: string }) => {},
    clearAuth: () => {},
    setUser: () => {},
    setIsAuthenticated: () => {},
  },
};

const AuthContext = createContext<IAuthContext>(defaultAuthContext);

export const AuthProvider = memo(
  ({ children }: { children: ReactNode | ReactNode[] }) => {
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setTokens = ({
      accessToken,
      refreshToken,
    }: {
      accessToken: string;
      refreshToken: string;
    }) => {
      handleAccessToken(accessToken);
      handleRefreshToken(refreshToken);
    };

    const handleUser = async (user: any) => {
      await setUser(user);
      setAuthStorage();
    };

    const handleAccessToken = async (accessToken: string) => {
      await setAccessToken(accessToken);
      setAuthStorage();
    };

    const handleRefreshToken = async (refreshToken: string) => {
      await setRefreshToken(refreshToken);
      setAuthStorage();
    };

    const clearAuthStorage = async () => {
      setAccessToken("");
      setRefreshToken("");
      setUser({});
      setIsAuthenticated(false);
      await AsyncStorage.removeItem("auth");
    };

    const setAuthStorage = async () => {
      await AsyncStorage.setItem(
        "auth",
        JSON.stringify({ accessToken, refreshToken, user })
      );
    };

    const auth = {
      data: {
        tokens: {
          accessToken,
          refreshToken,
        },
        user,
        isAuthenticated,
      },
      actions: {
        setTokens,
        setUser: handleUser,
        setIsAuthenticated,
        clearAuth: clearAuthStorage,
      },
    };

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
  }
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
