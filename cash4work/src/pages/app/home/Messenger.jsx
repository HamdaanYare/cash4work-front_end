// import React, { Component } from 'react';
// import './Messenger.css';




// class Messenger extends Component {
//   state = {
//     conversations: [
//       {
//         id: 1,
//         name: 'John',
//         history: [
//           { text: 'Hey!', timestamp: 1621274390714, sender: 'John' },
//           { text: 'What\'s up?', timestamp: 1621274407896, sender: 'Me' },
//         ],
//       },
//       {
//         id: 2,
//         name: 'Sarah',
//         history: [
//           { text: 'Hello!', timestamp: 1621274390714, sender: 'Sarah' },
//           { text: 'How are you?', timestamp: 1621274407896, sender: 'Me' },
//         ],
//       },
//     ],
//     activeConversation: {
//       id: 1,
//       name: 'John',
//       history: [
//         { text: 'Hey!', timestamp: 1621274390714, sender: 'John' },
//         { text: 'What\'s up?', timestamp: 1621274407896, sender: 'Me' },
//       ],
//     },
//     message: '',
//   };

//   handleConversationClick = (conversation) => {
//     this.setState({ activeConversation: conversation });
//   };

//   handleSendMessage = () => {
//     const { conversations, activeConversation, message } = this.state;

//     // Create a new message object with the text and timestamp
//     const newMessage = {
//       text: message,
//       timestamp: Date.now(),
//       sender: 'Me',
//     };

//     // Add the new message to the active conversation's history
//     const updatedConversations = conversations.map((conversation) => {
//       if (conversation.id === activeConversation.id) {
//         return {
//           ...conversation,
//           history: [...conversation.history, newMessage],
//         };
//       }
//       return conversation;
//     });

//     // Update the state with the new message and updated conversations
//     this.setState({
//       conversations: updatedConversations,
//       activeConversation: {
//         ...activeConversation,
//         history: [...activeConversation.history, newMessage],
//       },
//       message: '',
//     });
//   };

//   render() {
//     const { conversations, activeConversation, message } = this.state;

//     return (
//       <div className="messenger">
//         <div className="conversations">
//           {conversations.map((conversation) => (
//             <div
//               key={conversation.id}
//               className={`conversation ${conversation.id === activeConversation.id ? 'active' : ''}`}
//               onClick={() => this.handleConversationClick(conversation)}
//             >
//               {conversation.name}
//             </div>
//           ))}
//         </div>
//         <div className="conversation-history">
//           <div className="conversation-header">{activeConversation.name}</div>
//           <div className="history">
//             {activeConversation.history.map((message) => (
//               <div key={message.timestamp} className={`message ${message.sender === 'Me' ? 'sent' : 'received'}`}>
//                 {message.text}
//               </div>
//             ))}
//           </div>
//           <div className="message-input">
//             <input type="text" value={message} onChange={(event) => this.setState({ message: event.target.value })} />
//             <button onClick={this.handleSendMessage}>Send</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Messenger;

// import React, { useState } from "react";
// import './Messenger.css';

// const users = [
//   {
//     id: 1,
//     name: "John Smith",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Mark Brown",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     id: 5,
//     name: "Michael Wilson",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     id: 6,
//     name: "Laura Lee",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
//   {
//     id: 7,
//     name: "David Kim",
//     image: "https://randomuser.me/api/portraits/men/7.jpg",
//   },
// ];

// function Conversations({ users, activeConversation, setActiveConversation }) {
//   return (
//     <div className="conversations">
//       <div className="conversation-header">Conversations</div>
//       {users.map((user) => (
//         <div
//           className={`conversation ${
//             user.id === activeConversation.id ? "active" : ""
//           }`}
//           key={user.id}
//           onClick={() => setActiveConversation(user)}
//         >
//           <img src={user.image} alt={user.name} />
//           <span>{user.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// function History({ messages }) {
//   return (
//     <div className="history">
//       {messages.map((message) => (
//         <div
//           className={`message ${message.sender === "me" ? "sent" : "received"}`}
//           key={message.id}
//         >
//           {message.text}
//         </div>
//       ))}
//     </div>
//   );
// }

// function Messenger() {
//   const [activeConversation, setActiveConversation] = useState(users[0]);
//   const [messageText, setMessageText] = useState("");
//   const [messageHistory, setMessageHistory] = useState([]);

//   function handleSendMessage() {
//     if (messageText.trim()) {
//       const newMessage = {
//         id: messageHistory.length + 1,
//         sender: "me",
//         text: messageText.trim(),
//       };
//       setMessageHistory([...messageHistory, newMessage]);
//       setMessageText("");
//     }
//   }

//   return (
//     <div className="messenger">
//       <Conversations
//         users={users}
//         activeConversation={activeConversation}
//         setActiveConversation={setActiveConversation}
//       />
//       <History messages={messageHistory} />
//       <div className="message-input">
//         <input
//           type="text"
//           placeholder="Type your message"
//           value={messageText}
//           onChange={(event) => setMessageText(event.target.value)}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default Messenger;

// const style = `
// .messenger {
//     display: flex;
//     flex-direction: row;
//     height: 100%;
//     width: 100%;
//   }
  
//   .conversations {
//     display: flex;
//     flex-direction:
//   }  


// `

import React, { useState } from "react";
import "./Messenger.css";

const users = [
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
