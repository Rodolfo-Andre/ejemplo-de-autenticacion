import type { User } from "@supabase/supabase-js";
import type { IAuthContext, IAuthProvider } from "../../interfaces";
import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { SupabaseService } from "../../services";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const userR = await SupabaseService.auth.getUser();
    const userData = userR.data.user;
    setUser(userData);
    setIsLoading(false);
  };

  const login = useCallback((user: User) => {
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    SupabaseService.auth.signOut();
    setUser(null);
  }, []);

  const contextValue = useMemo(() => {
    return {
      user,
      login,
      logout,
    };
  }, [user]);

  if (isLoading)
    return (
      <Backdrop
        sx={{
          color: "#fff",
          flexDirection: "column",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress color="inherit" />
        <Typography>Cargando...</Typography>
      </Backdrop>
    );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default {
  AuthContext,
  AuthProvider,
};
