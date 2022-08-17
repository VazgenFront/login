import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface StoreInterface {
  posts: {
    isAuth: boolean;
  };
}

export const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const isAuth = useSelector((state: StoreInterface) => state.posts.isAuth);

  return isAuth ? children : <Navigate to="/" replace />;
};
