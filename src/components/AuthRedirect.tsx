import useAuth from "@/hooks/useAuth";
import { Navigate } from "@tanstack/react-router";

export default function AuthRedirect() {
  const { isAuthenticated } = useAuth();
  let path = "";

  if (isAuthenticated) {
    path = "/dashboard";
  } else {
    path = "/login";
  }

  return <Navigate to={path} />;
}
