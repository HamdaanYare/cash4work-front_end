import React, { useState } from "react";
import "./Messenger.css";
import io from "socket.io-client";
const SERVER_URL = 'http://localhost:8088'; // Replace with your backend server URL

function Conversations({ users, activeConversation, setActiveConversation }) {
  return (
    <div className="conversations">
      <div className="conversation-header">Conversations</div>
      {users.map((user) => (
        <div
          className={`conversation ${
            user.id === activeConversation.id ? "active" : ""
          }`}
          key={user.id}
          onClick={() => setActiveConversation(user)}
        >
          <img src={user.image} alt={user.name} />
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
}

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

function Messenger() {
  const [activeConversation, setActiveConversation] = useState(users[0]);
  const [messageText, setMessageText] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    // Connect to the Socket.IO server
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    // Add event listeners for incoming messages
    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('chat message', () => {
       if (messageText.trim()) {
      const newMessage = {
        id: messageHistory.length + 1,
        sender: "me",
        text: messageText.trim(),
      };
      setMessageHistory([...messageHistory, newMessage]);
      setMessageText("");
      }
      console.log('Sent message');
    });

    return () => {
      // Disconnect from the Socket.IO server when component unmounts
      newSocket.disconnect();
    };
  }, []); // Only run this effect once on component mount
  function handleSendMessage() {
    socket.emit('chat message');
    
  }

  return (
    <div className="messenger">
      <Conversations
        users={users}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
      />
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

export default Messenger;
