import { Navigate } from "react-router";
import { ReactNode } from "react";
import { useAuth } from "@/context/auth-context";
import Spinner from "./spinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <div className="mx-auto text-center">
          <Spinner />
          <h1 className="">Loading</h1>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
