import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const API_URL = "https://cash4-work-backend.vercel.app";

function Signup() {
	const passwordRef = useRef(null)
	const emailRef = useRef(null)
	const nameRef = useRef(null)

	const handleSubmit = async (e) => {
	//	let navigate = useNavigate();
		e.preventDefault()
		let fname = document.getElementById("fname").value,
		lname = document.getElementById("lname").value,
		email = document.getElementById("email").value,
		password = document.getElementById("password").value,
		dob = document.getElementById("dob").value;
		console.log(fname,lname,email,password,dob);
		try{
			const response = await fetch(API_URL+"/user/signup",
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ fname: fname, lname: lname, email: email, password: password, dob: dob })
			}).then((response) => response.json())
			.then((data) => {
				return document.getElementById('error').innerHTML = data.message;
			//	navigate('/jobs');

			})
		}catch(error) {
			return error;
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
						Register
					</h2>

					<div className="flex flex-col mt-4 mb-4">
						<label htmlFor="name" className="mb-1">
							First Name
						</label>
						<input
							ref={nameRef}
							type="name"
							id="fname"
							className="px-4 py-3 bg-gray-100 rounded-md"
							required
						/>
					</div>
					<div className="flex flex-col mt-4 mb-4">
						<label htmlFor="name" className="mb-1">
							Last Name
						</label>
						<input
							ref={nameRef}
							type="name"
							id="lname"
							className="px-4 py-3 bg-gray-100 rounded-md"
							required
						/>
					</div>

					<div className="flex flex-col mt-4 mb-4">
						<label htmlFor="email" className="mb-1">
							Email
						</label>
						<input
							ref={emailRef}
							type="email"
							id="email"
							className="px-4 py-3 bg-gray-100 rounded-md"
							required
						/>
					</div>

					<div className="flex flex-col mt-4 mb-4">
						<label htmlFor="password" className="mb-1">
							Password
						</label>
						<input
							ref={passwordRef}
							type="password"
							id="password"
							className="px-4 py-3 bg-gray-100 rounded-md"
							required
						/>
					</div>
					<div className="flex flex-col mt-4 mb-4">
						<label htmlFor="name" className="mb-1">
							Date of Birth
						</label>
						<input
							ref={nameRef}
							type="date"
							id="dob"
							className="px-4 py-3 bg-gray-100 rounded-md"
							required
						/>
					</div>

					<button
						type="submit"
						className="bg-primary text-white w-full py-3 rounded-md cursor-pointer hover:opacity-80"
					>
						Sign Up
					</button>
					<p className="text-sm mt-6 text-center">
						Already have an account?{" "}
						<Link className="text-primary underline" to="/login">
							Log in
						</Link>
					</p>
				</form>			
			</div>
		</div>
	)
}

export default Signup
