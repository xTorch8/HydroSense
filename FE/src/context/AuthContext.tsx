import { createContext, ReactNode, useEffect, useState } from "react";
import AuthType from "../types/model/UserType";
import getUserInformationHandler from "../api/auth/getUserInformationHandler";
import axios from "axios";
import { useNavigate } from "react-router";

interface IAuthContext {
	user: AuthType | null;
	token: string | null;
	isTokenValidHandler: () => {};
}

interface IAuthProvider {
	children: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
	const [user, setUser] = useState<AuthType | null>({
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		role: 1,
		companyId: 1,
	});

	const [token, setToken] = useState<string>(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsInVzZXJfaWQiOjEsInJvbGUiOjEsImNvbXBhbnlfaWQiOjEsImV4cCI6MTczNDQ3NzEwNX0.8pMSVhdgFaDbINR_HmOYlygbT5Y5mQ-P1rgbTEgwGS4"
	);

	const isTokenValidHandler = async (): Promise<boolean> => {
		// return true;
		// const response = await getUserInformationHandler({ token: token });

		// if (axios.isAxiosError(response)) {
		// 	return false;
		// } else {
		// 	return true;
		// }

		try {
			const response = await getUserInformationHandler({ token: token });
	
			if (axios.isAxiosError(response)) {
				console.error("Token validation failed:", response.message);
				return false; 
			}
	
			return true; 
		} catch (error) {
			console.error("Error during token validation:", error);
			return false;
		}
	};

	useEffect(() => {
		if (user == null) {
			setToken("token");
		}
	}, [user]);

	return <AuthContext.Provider value={{ user, token, isTokenValidHandler }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
