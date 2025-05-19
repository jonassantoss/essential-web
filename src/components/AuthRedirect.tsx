import { Navigate } from "@tanstack/react-router";

export default function AuthRedirect() {
  const authenticated = false;
  let path = "";

  if (authenticated) {
    path = "/dashboard";
  } else {
    path = "/login";
  }

  return <Navigate to={path} />;
}
