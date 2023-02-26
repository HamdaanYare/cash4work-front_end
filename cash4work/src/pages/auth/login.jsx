import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context"
const API_URL = "https://cash4-work-backend.vercel.app";
//const [errorM, setErrorM] = useState('');

function Login() {
	const passwordRef = useRef('null')
	const emailRef = useRef(null)
	

	const { setUser } = useAuthContext()
	let navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		let email = document.getElementById('email').value,
		password = document.getElementById('password').value;
		try{
			const response = await fetch(API_URL+"/user/login", //here we are using the "fetch" to call the API
			{// I have already added link of the API in the variable API_URL
				method: 'POST', //method of request is POST. if you wanna do something else, you write here
				headers: { 'Content-Type': 'application/json' },//just basic header
				body: JSON.stringify({ email: email, password: password })//here's the contents we sending to the backend server. in this case email and pass
			}).then((response) => response.json())//ignore this
			.then((data) => {//here we are taking response data that the backend server sent us
				if("accessToken" in data) //here we are checking if there is accessToken in the data
				{//if there is, that means user has logged in successfully. and backend is not gonna send any message in this case
					// do the storing here
					//now you need to store the accessToken on the frontend. in the browser of the user
					// and you gonna use that to verify if the user is logged in or not
					// you can ask misha to help you with it
					document.getElementById('error').innerHTML = "Logged in successfully";
				}
				else document.getElementById('error').innerHTML = data.message;//anything else is coming as JSON response. it has a message object
				//so we are accessing the message object with data.message.
			//	navigate('/jobs');
			})
		}catch(error) {
			return [];
		}
	}

	return (
		<div className="bg-gray-100 h-screen flex flex-col justify-center items-center px-4 text-base">
			<div className="w-full max-w-md">
				<h4 id="error"></h4>
				<form
					onSubmit={handleSubmit}
					className="bg-white p-8 rounded-lg"
				>
					<h2 className="text-center font-semibold text-xl">
						Log In
					</h2>

					<div className="flex flex-col mt-4 mb-4">
						<label htmlFor="email" className="mb-1">
							Email
						</label>
						<input
							ref={emailRef}
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
							ref={passwordRef}
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
	)
}

export default Login
