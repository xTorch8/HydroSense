import { createContext, ReactNode, useState } from "react";
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
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsInVzZXJfaWQiOjEsInJvbGUiOjEsImNvbXBhbnlfaWQiOjEsImV4cCI6MTczNDMwNTUxN30.AAh-fZylNdRokwhSjE-GsB2nJLOR5wtJeZU8LLE939k"
	);

	const isTokenValidHandler = async (): Promise<boolean> => {
		const response = await getUserInformationHandler({ token: token });

		if (axios.isAxiosError(response)) {
			return false;
		} else {
			return true;
		}
	};

	return <AuthContext.Provider value={{ user, token, isTokenValidHandler }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
