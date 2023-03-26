import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context"
//const API_URL = "https://cash4-work-backend.vercel.app";
const API_URL = "http://localhost:8088";


function Login() {
  const [error, setError] = useState(null);
  const { login  } = useAuthContext();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await fetch(API_URL + "/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        const { accessToken, id } = data;
        console.log(id);
        login(accessToken, email, id).then(() => {
          navigate("/jobs");
        });
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };
  

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center px-4 text-base">
      <div className="w-full max-w-md">
        <h4 id="error" style={{ paddingLeft: "35%" }}>
          {error}
        </h4>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg">
          <h2 className="text-center font-semibold text-xl">Log In</h2>

          <div className="flex flex-col mt-4 mb-4">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 bg-gray-200 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex justify-between">
              <label htmlFor="password" className="mb-1">
                Password
              </label>

              <Link
                to="#"
                className="text-primary hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              className="px-4 py-3 bg-gray-200 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white w-full py-3 rounded-md cursor-pointer hover:opacity-80"
          >
            Log in
          </button>
          <p className="text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link className="text-primary underline" to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
