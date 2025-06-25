import { Navigate } from "@tanstack/react-router";
import useAuth from "@/hooks/useAuth";

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
