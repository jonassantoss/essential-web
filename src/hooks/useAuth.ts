import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		console.error("useAuth hook should be used inside an AuthProvider");
	}

	return context;
};

export default useAuth;
