import React, { useContext, createContext, useState } from "react"

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [user, setUser] = useState({})

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
