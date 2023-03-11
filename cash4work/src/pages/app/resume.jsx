import React, { useRef } from "react"
const API_URL = "https://cash4-work-backend.vercel.app";


export default function Resume() {
	const form = useRef()

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const response = await fetch(`${API_URL}/resumes`, {
		  method: "POST",
		  body: formData
		});
		// handle response from API here
	  }

	return (
		<div
			style={{ minHeight: "calc(100vh - 64px)" }}
			className="py-8 bg-white mt-4"
		>
			<div className="container mx-auto p-4">
				<h1 className="text-3xl font-bold mb-4">Create Your Resume</h1>
				<form className="bg-white p-6 rounded-lg shadow-md">
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="name"
						>
							Name
						</label>
						<input
							className="border border-gray-300 p-2 w-full"
							id="name"
							type="text"
							name="name"
							placeholder="Your Name"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="email"
						>
							Email
						</label>
						<input
							className="border border-gray-300 p-2 w-full"
							id="email"
							type="email"
							name="email"
							placeholder="Your Email"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="phone"
						>
							Phone
						</label>
						<input
							className="border border-gray-300 p-2 w-full"
							id="phone"
							type="text"
							name="phone"
							placeholder="Your Phone Number"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="education"
						>
							Education
						</label>
						<textarea
							className="border border-gray-300 p-2 w-full"
							id="education"
							name="education"
							rows="3"
							placeholder="Your Education"
						></textarea>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="experience"
						>
							Work Experience
						</label>
						<textarea
							className="border border-gray-300 p-2 w-full"
							id="experience"
							name="experience"
							rows="3"
							placeholder="Your Work Experience"
						></textarea>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							for="skills"
						>
							Skills
						</label>
						<textarea
							className="border border-gray-300 p-2 w-full"
							id="skills"
							name="skills"
							rows="3"
							placeholder="Your Skills"
						></textarea>
					</div>
					<div className="text-center">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Create Resume
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
