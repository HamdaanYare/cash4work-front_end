import React, { useEffect, useState, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MessengerListItem from "./messengerListItem";
import { useAuthContext } from "../../../context";
const API_URL = "http://localhost:8088";

const MessengerSidebar = React.memo(() => {
	const { pathname } = useLocation();
  const pathReqExp = /^\/Messenger\/\w{1,}$/;
  const { user } = useAuthContext();
  const [conversations, setConversations] = useState([]);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (conversationId, data) => {
      navigate(`${conversationId}`, { state: { data } });
    },
    [navigate]
  );
	//let conv = new Set();
	const conversationsRef = useRef([]);

  useEffect(() => {
    fetch(API_URL + "/message/list/" + user.id)
      .then((response) => response.json())
      .then((data) => {
        console.log("MessengerSidebar: ", data);

        let convMap = new Map();
        data.forEach(e => {
          let conversation_id = e.applied_by + "-" + e.posted_by + "-" + e.job_id;
          if (!convMap.has(conversation_id)) {
            convMap.set(conversation_id, { conversation_id, ...e });
          }
        });

        const newConversations = [...convMap.values()];
        if (
          newConversations.length !== conversationsRef.current.length ||
          newConversations.some((conv, index) => conv.conversation_id !== conversationsRef.current[index]?.conversation_id)
        ) {
          setConversations(newConversations);
          conversationsRef.current = newConversations;
        }
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
          <MessengerListItem
            key={conv.conversation_id}
            data={conv}
            handleClick={() => handleClick(conv.conversation_id, conv)}
          />
        ))}
			</div>
		</div>
	)
});

export default MessengerSidebar;
