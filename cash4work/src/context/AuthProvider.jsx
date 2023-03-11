import React, { useContext, createContext, useState } from "react"

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

	const login = async (token, email) => {
		try {
				setUser({token, email})
				localStorage.setItem("user", JSON.stringify({token, email}))
				return true;
		} catch (error) {
			console.log(error)
			return false
		}
	}

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	}

	const authContextValue = {
		user,
		login,
		logout,
	}

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)