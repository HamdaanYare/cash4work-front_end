import React, { useState } from "react"

function Contact() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [isSending, setIsSending] = useState(false)
	const [isSent, setIsSent] = useState(false)

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSending(true)
		// try {
		// 	await axios.post("/api/contact", { name, email, message })
		// 	setIsSent(true)
		// 	setName("")
		// 	setEmail("")
		// 	setMessage("")
		// } catch (error) {
		// 	console.error(error)
		// }
		setIsSending(false)
	}

	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="mx-auto py-8 px-4">
				<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
				<form
					onSubmit={handleSubmit}
					className="bg-white p-6 rounded-lg shadow-md"
				>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-gray-700 font-bold mb-2"
						>
							Name
						</label>
						<input
							id="name"
							type="text"
							name="name"
							placeholder="Your Name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							className="border border-gray-300 p-2 w-full"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-bold mb-2"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Your Email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							className="border border-gray-300 p-2 w-full"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className="block text-gray-700 font-bold mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="6"
							placeholder="Your Message"
							value={message}
							onChange={(event) => setMessage(event.target.value)}
							className="border border-gray-300 p-2 w-full"
							required
						/>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							disabled={isSending || isSent}
						>
							{isSending
								? "Sending..."
								: isSent
								? "Sent!"
								: "Send Message"}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact
