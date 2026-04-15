import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthContext } from "../context/AuthContext";

type PrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;