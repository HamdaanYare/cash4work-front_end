import { React, useRef } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/navbar"
import { useAuthContext } from "../context"
const API_URL = "https://cash4-work-backend.vercel.app";


export default function RequireAuth() {
  const location = useLocation()
  const { user } = useAuthContext()
  let Authenticated = useRef(false);
  const isAuthenticated = async () => {
    console.log(user);
    if (user) {
      try {
        const response = await fetch(API_URL + "/user/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( {token: user.token, email: user.email} ),
        });
        if (response.ok) {
          Authenticated = true;
          return;
        } else {
          Authenticated = false;
          return;
        }
      } catch (error) {
        console.log(error);
        Authenticated = false;
        return;
      }
    }
    else Authenticated = false;
  }
  isAuthenticated();
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return Authenticated ? <Navigate to="/jobs" /> : <Outlet />
  }

  return Authenticated ? (
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
