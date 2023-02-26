import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/navbar"
import { useAuthContext } from "../context"

export default function RequireAuth() {
	const location = useLocation()
	const { user } = useAuthContext()

	if (location.pathname === "/login" || location.pathname === "/signup") {
		return user ? <Navigate to="/jobs" /> : <Outlet />
	}

	return user ? (
		<>
			<Navbar />
			<div className="max-w-6xl mx-auto">
				<Outlet />
			</div>
		</>
	) : (
		<Navigate to={"/login"} state={{ from: location }} replace />
	)
}
