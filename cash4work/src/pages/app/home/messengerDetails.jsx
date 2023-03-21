import React, { useEffect, useState } from "react"
import { FaBriefcase } from "react-icons/fa"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"





function History({ messages }) {
	return (
	  <div className="history">
		{messages.map((message) => (
		  <div
			className={`message ${message.sender === "me" ? "sent" : "received"}`}
			key={message.id}
		  >
			{message.text}
		  </div>
		))}
	  </div>
	);
  }

  function Chat() {
	const [messageText, setMessageText] = useState("");
	const [messageHistory, setMessageHistory] = useState([]);
  
	function handleSendMessage() {
	  if (messageText.trim()) {
		const newMessage = {
		  id: messageHistory.length + 1,
		  sender: "me",
		  text: messageText.trim(),
		};
		setMessageHistory([...messageHistory, newMessage]);
		setMessageText("");
	  }
	}
  
	return (
	  <div className="messenger">
		
		<History messages={messageHistory} />
		<div className="message-input">
		  <input
			type="text"
			placeholder="Type your message"
			value={messageText}
			onChange={(event) => setMessageText(event.target.value)}
		  />
		  <button onClick={handleSendMessage}>Send</button>
		</div>
	  </div>
	);
  }
  

export default function MessengerDetails() {
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = state?.data

	useEffect(() => {
		if (!data) navigate("/Messenger")
	}, [])

	return (
		<div className="w-[100%] py-3 px-8 bg-white overflow-y-auto border-[1px] border-gray-300 border-l-0 md:rounded-tr-xl md:w-[60%]">
			<button onClick={() => navigate("/Messenger")} className="md:hidden">
				<MdOutlineKeyboardBackspace size={30} className="opacity-60" />
			</button>

			<h1 className="text-2xl font-semibold mt-3">{data?.name}</h1>
			{/* <p className="mt-4">
				{data?.organization} • {data?.location}{" "}
				<span className="opacity-60">{data?.datePosted}</span>
				{" • "}
				<span className="opacity-60">
					{data?.numberOfApplicants} applicants
				</span>
			</p> */}

			<div className="mt-4 flex items-center gap-3 opacity-60">
				<FaBriefcase size={20} />
				<div>
					<span>Full-time</span>
					{" • "}
					<span>Front End Developer</span>
				</div>
			</div>

			{/* <p className="mt-6">{data?.description}</p> */}

			{/* <div className="mt-4">
				<span className="font-semibold">Job Responsiblities</span>
				<ul className="list-disc ml-10 mt-4">
					{data?.jobResponsibilities.map((responsiblity, _) => (
						<li key={_}>{responsiblity}</li>
					))}
				</ul>
			</div> */}

			{/* <div className="mt-4">
				<span className="font-semibold">Job Requirements</span>
				<ul className="list-disc ml-10 mt-4">
					{data?.jobRequirements.map((requirement, _) => (
						<li key={_}>{requirement}</li>
					))}
				</ul>
			</div> */}

			<div className="flex items-center gap-2 mt-8 justify-end">
			<Chat />
			{/* <button onClick={() => navigate(`/apply/${data.id}`)} className="bg-primary rounded-full text-white text-base font-semibold px-6 py-2 hover:opacity-80">
				Apply
			</button>

			<button onClick={() => saveJob(data)} className="bg-white border-[1px] border-primary rounded-full text-primary text-base font-semibold px-6 py-2 hover:opacity-80">
					Save
			</button> */}

			</div>
		</div>
	)
}
