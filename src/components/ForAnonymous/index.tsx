import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthObject } from "../../contexts";

const ForAnonymous = () => {
  const { user } = useContext(AuthObject.AuthContext);

  return user ? <Navigate to="/" replace={true} /> : <Outlet />;
};

export default ForAnonymous;
