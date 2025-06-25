import { useNavigate } from "@tanstack/react-router";
import { createContext, useCallback, useMemo, useState } from "react";

interface AuthContextData {
	login: (email: string, password: string) => void;
	logout: () => void;
	isAuthenticated: boolean;
	// userInfo: UserInfo;
}

const AuthContext = createContext({} as AuthContextData);
const { Provider } = AuthContext;

function AuthProvider({ children }: { children: React.ReactNode }) {
	// const [userInfo, setUserInfo, deleteUserInfo] = useLocalStorage<UserInfo>(
	//   "@user_info",
	//   {
	//     email: "",
	//     password: "",
	//   }
	// );
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	const login = useCallback(
		(email: string, password: string) => {
			if (email === "jonas@gmail.com" && password === "123456") {
				setIsAuthenticated(true);
				navigate({ to: "/dashboard" });
			}
		},
		[navigate],
	);

	const logout = useCallback(() => {
		setIsAuthenticated(false);
		navigate({ to: "/login" });
	}, [navigate]);

	const AuthValues = useMemo(() => {
		return {
			login,
			logout,
			isAuthenticated,
		};
	}, [login, logout, isAuthenticated]);

	return <Provider value={AuthValues}>{children}</Provider>;
}

export { AuthContext, AuthProvider };
