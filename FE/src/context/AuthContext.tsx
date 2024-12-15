import { createContext, ReactNode, useState } from "react";
import AuthType from "../types/model/UserType";

interface IAuthContext {
	user: AuthType | null;
	token: string | null;
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
	const [token, setToken] = useState<string | null>(
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsInVzZXJfaWQiOjEsInJvbGUiOjEsImNvbXBhbnlfaWQiOjEsImV4cCI6MTczNDI1NTg5MH0.I2IkpM19OHG0ayv3_sLYc0SKq2WYfQDNUt8BdzsD1CM"
	);

	return <AuthContext.Provider value={{ user, token }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
