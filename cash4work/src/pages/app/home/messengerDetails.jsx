import React, { useEffect, useState, useCallback } from "react";
import { FaBriefcase } from "react-icons/fa"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import io from "socket.io-client";
const SERVER_URL = 'http://localhost:8088'; // Replace with your backend server URL
import { useAuthContext } from "../../../context"
import "./Messenger.css";
import { Link } from "react-router-dom";
import { jobList } from "./jobsSidebar";
import secrets from "../../../secret";
let estatus = true;
let messageId, stateData;
const History = React.memo(({ messages }) => {
	const { user } = useAuthContext();
	return (
		<div className="chat">
			{messages.map((message) => (
				<div
					className={`message message-${message.sender === user.id ? "sent" : "received"}`}
					key={message.id}
				>
					{message.message}
				</div>
			))}
		</div>
	);
});

const Chat = React.memo(({ id }) => {
	const { user } = useAuthContext();
	const [messageText, setMessageText] = useState("");
	const [messageHistory, setMessageHistory] = useState([]);
  
	const [currentSocket, setCurrentSocket] = useState(null);
	const [socket, setSocket] = useState(null);
	useEffect(() => {
		// Connect to the Socket.IO server
		const newSocket = io(secrets.API);
		setCurrentSocket(newSocket);

		// Add event listeners for incoming messages
		newSocket.on('connect', () => {
			console.log('Connected to server');
			newSocket.emit("chat", messageId);
		});
		newSocket.on('chatHistory', (msg) => {
			setMessageHistory(msg);
			console.log('chatHistory', msg)
		});
		newSocket.on('chat message', (msg) => {
			//handleSendMessage();
			setMessageHistory(prevState => [...prevState, msg]);
			console.log('Sent message', msg);
			console.log('Message History', messageHistory)
		});

		return () => {
			// Disconnect from the Socket.IO server when component unmounts
			console.log('Disconnected from server');
			newSocket.disconnect();
		};
	}, [messageId]); // Only run this effect when messageId changes

	useEffect(() => { // this socket is for getting updates of the messages
		const mainSocket = io(secrets.API);
		setSocket(mainSocket);

		// Add event listeners for incoming messages
		mainSocket.on('connect', () => {
			console.log('Connected to server');
			mainSocket.emit("join", user.id);
		});
		return () => {
			// Disconnect from the Socket.IO server when component unmounts
			console.log('Disconnected from server');
			mainSocket.disconnect(user.id);
		};
	}, []); // Only run this effect once on component mount

	function getDate() {
	let m = new Date();
	let dateString =
		m.getUTCFullYear() +
		"/" +
		("0" + (m.getUTCMonth() + 1)).slice(-2) +
		"/" +
		("0" + m.getUTCDate()).slice(-2) +
		" " +
		("0" + m.getUTCHours()).slice(-2) +
		":" +
		("0" + m.getUTCMinutes()).slice(-2) +
		":" +
		("0" + m.getUTCSeconds()).slice(-2);
	return dateString;
}

	const handleSendMessage = useCallback(() => {
    if (messageText.trim()) {
      const newMessage = {
        id: messageHistory.length + 1,
		  sender: user.id,
		receiver: stateData.posted_by,
		  message: messageText.trim(),
		msg_date: getDate(),
      };
		socket.emit("chat message", [{ conversation_id: messageId, ...newMessage }]);
      setMessageText("");
    }
  }, [messageText, messageHistory, user.email, socket, messageId]);
  
	return (
		<div className="messenger-app-chat">
		
			<History messages={messageHistory} />
			<div className="message-input">
				<input
					type="text"
					placeholder="Type your message"
					className="input"
					value={messageText}
					onChange={(event) => setMessageText(event.target.value)}
				/>
				<button className="send-button" onClick={handleSendMessage}>Send</button>
			</div>
		</div>
	);
});
  

export default function MessengerDetails() {
	const { state } = useLocation()
		const { user } = useAuthContext();

	const navigate = useNavigate()
	const data = state?.data
	stateData = data;
	messageId = data?.conversation_id;
	useEffect(() => {
		if (!data) navigate("/Messenger")
	}, [])

	return (
		<div className="w-[100%] py-3 px-8 bg-white overflow-y-auto border-[1px] border-gray-300 border-l-0 md:rounded-tr-xl md:w-[60%]">
			<button onClick={() => navigate("/Messenger")} className="md:hidden">
				<MdOutlineKeyboardBackspace size={30} className="opacity-60" />
			</button>

			<h1 className="text-2xl font-semibold mt-3">{user.id === data.applied_by ? data.posted_by_fname : data.applied_by_fname}</h1>

			<div className="mt-4 flex items-center gap-3 opacity-60">
				<FaBriefcase size={20} />
				<div>
					<span><Link className="text-primary underline" to={`/jobs/${data.job_id}`} state={{ data: jobList }} >
             			{ data.title }
            		</Link></span>
				</div>
			</div>

			<div className="flex items-center gap-2 mt-8 justify-end">
				<Chat data={ messageId } />
			</div>
		</div>
	)
}
