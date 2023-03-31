import React, { useContext, createContext, useState, useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
	console.log("user", user)
	  const login = (token, email, id) => {
		return new Promise((resolve) => {
		  setUser({ token, email, id });
		  localStorage.setItem("user", JSON.stringify({ token, email, id }));
		  resolve(true);
		});
	  };
	  

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
		return <Navigate to="/login" />
	}

	const authContextValue = {
		user,
		login,
		logout,
	}

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)