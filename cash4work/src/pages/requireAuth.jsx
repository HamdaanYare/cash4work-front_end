import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/navbar"
import { useAuthContext } from "../context"

export default function RequireAuth() {
  const location = useLocation()
  const { user } = useAuthContext()

  const isAuthenticated = () => {
	console.log(localStorage.getItem("user"));
    return user && user.token;
  }

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return isAuthenticated() ? <Navigate to="/jobs" /> : <Outlet />
  }

  return isAuthenticated() ? (
    <div className="bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  )
}
