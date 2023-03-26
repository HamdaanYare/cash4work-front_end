import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import MessengerListItem from "./messengerListItem"
import { useAuthContext } from "../../../context"
const API_URL = 'http://localhost:8088'; // Replace with your backend server URL
const USERS = [
    {
      id: 1,
      name: "John Smith",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Mark Brown",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Michael Wilson",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Laura Lee",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "David Kim",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];


export default function MessengerSidebar() {
	const { pathname } = useLocation()
	const pathReqExp = /^\/Messenger\/\w{1,}$/
	const { user } = useAuthContext()
	const [conversations, setConversations] = useState([]);
	let conv = [];
	useEffect(() => {
		fetch(API_URL + "/message/list/" + user.id)
			.then((response) => response.json())
			.then((data) => {
				console.log("MessengerSidebar: ", data);
				
				data.forEach(e => {
					let conversation_id = e.applied_by+"-"+e.posted_by+"-"+e.job_id;
					conv.push({conversation_id, ...e});
				});
				setConversations(conv);
				console.log("MessengerSidebar Conv: ", conv);
			});
	}, []);
	return (
		<div
			className={`${
				pathReqExp.test(pathname) ? "hidden" : "flex"
			} w-full bg-white border-[1px] border-r-0 border-gray-300 overflow-hidden flex-col md:rounded-tl-xl md:w-[40%] md:flex`}
		>
			<div className="bg-primary text-white p-3">
				<h2 className="text-base">Chat</h2>
				<p className="text-[12px]">{conversations.length} people</p>
			</div>

			<div className="h-full overflow-y-scroll flex-1">
				{conversations.map((conv) => (
					console.log("msgSideBar conv",conv),
					<MessengerListItem key={conv.conversation_id} data={conv} />
				))}
			</div>
		</div>
	)
}
