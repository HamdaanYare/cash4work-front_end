import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { useAuthContext } from "../context";
const API_URL = "https://cash4-work-backend.vercel.app";

export default function RequireAuth() {
  const location = useLocation();
  const { user, logout } = useAuthContext();

  useEffect(() => {
    if (user) {
      fetch(API_URL + "/user/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: user.token, email: user.email }),
      })
        .then((response) => {
          console.log("Response", response);
          if (!response.ok) {
            throw new Error("Verification failed");
          }
        })
        .catch((error) => {
          console.log(error);
          // Logout the user if verification fails
          logout();
        });
    }
  }, [user]);
  // If user object is not present, navigate to the login page
  if (user === null) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  // If the user is on the login or signup page, redirect them to the jobs page
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return <Navigate to="/jobs" />;
  }

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
