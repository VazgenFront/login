import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreInterface } from "./interfaces";

export const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const isAuth = useSelector((state: StoreInterface) => state.login.isAuth);

  return isAuth ? children : <Navigate to="/" replace />;
};
