import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthObject } from "../../contexts";

const ForAuthenticated = () => {
  const { user } = useContext(AuthObject.AuthContext);

  return user ? <Outlet /> : <Navigate to="/sign-in" replace={true} />;
};

export default ForAuthenticated;
