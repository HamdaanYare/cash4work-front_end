import React, { useState } from "react"
import {useRef} from 'react';
import { useAuthContext } from "../../context"
import { Link, useNavigate } from "react-router-dom"
import secrets from "../../secret";

export default function PostWorker() {
	let btnRef = useRef();
	let navigate = useNavigate();
//	const API_URL = "http://localhost:8088"; // Replace with your backend server URL
	const { user } = useAuthContext();
	const [form, setForm] = useState({
		title: "",
		description: "",
		location: "",
		salary: 0,
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("user: "+user.token+" "+user.email+" "+user.id+"");
		console.log(form);
		btnRef.current.setAttribute("disabled", "disabled");
		fetch(secrets.API_2+"/worker", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({...form, user_id: user.id})
		}).then((response) => response.json())
			.then((data) => {
				console.log(data);
				navigate("/workers/"+data.id, { state: { form } });
			})
	}

	return (
		<div style={{ minHeight: "calc(100vh - 64px)" }} className="py-8">
			<form
				onSubmit={handleSubmit}
				className="bg-white flex flex-col mx-auto w-full max-w-3xl rounded-xl py-6 px-7 overflow-hidden shadow-lg shadow-gray-200"
			>
				<h1 className="font-semibold text-2xl mb-2">Post a Job</h1>

				<label className="text-gray-700" htmlFor="title">
					Title
				</label>
				<input
					className="border-[1.5px] border-gray-400 rounded-md py-[6px] px-2 mt-1 mb-4"
					type="text"
					id="title"
					value={form.title}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, title: e.target.value }))
					}
				/>

				<label className="text-gray-700" htmlFor="salary">
					Salary
				</label>
				<input
					className="border-[1.5px] border-gray-400 rounded-md py-[6px] px-2 mt-1 mb-4"
					type="text"
					id="salary"
					value={form.salary}
					onChange={(e) =>
						setForm((prev) => ({
							...prev,
							salary: e.target.value,
						}))
					}
				/>

				<label className="text-gray-700" htmlFor="location">
					Location
				</label>
				<input
					className="border-[1.5px] border-gray-400 rounded-md py-[6px] px-2 mt-1 mb-4"
					type="text"
					id="location"
					value={form.location}
					onChange={(e) =>
						setForm((prev) => ({
							...prev,
							location: e.target.value,
						}))
					}
				/>

				<label className="text-gray-700" htmlFor="description">
					Description
				</label>
				<textarea
					className="border-[1.5px] border-gray-400 rounded-md py-[6px] px-2 mt-1 mb-4"
					id="description"
					rows="10"
					value={form.description}
					onChange={(e) =>
						setForm((prev) => ({
							...prev,
							description: e.target.value,
						}))
					}
				></textarea>

				<button ref={btnRef} className="bg-primary rounded-full text-white text-base font-semibold px-6 py-2 hover:opacity-80">
					Post
				</button>
			</form>
		</div>
	)
}

