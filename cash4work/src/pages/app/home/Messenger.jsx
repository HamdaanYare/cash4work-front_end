import React from 'react';
import './Messenger.css';

function Messenger() {
  return (
    <div className="messenger-container">
      <div id="convList" className="conversation-list">
        <div className="conversation">
          <div className="conversation-photo">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="conversation" />
          </div>
          <div className="conversation-info">
            <h1>John Doe</h1>
            <p>Last message received</p>
          </div>
        </div>
        <div className="conversation">
          <div className="conversation-photo">
            <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="conversation" />
          </div>
          <div className="conversation-info">
            <h1>Jane Smith</h1>
            <p>Last message received</p>
          </div>
        </div>
        <div className="conversation">
          <div className="conversation-photo">
            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="conversation" />
          </div>
          <div className="conversation-info">
            <h1>Jack Johnson</h1>
            <p>Last message received</p>
          </div>
        </div>
      </div>
      <div id="chat" className="chat">
        <div className="chat-header">
          <div className="chat-photo">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="chat" />
          </div>
          <div className="chat-info">
            <h1>John Doe</h1>
            <p>Last seen 10 minutes ago</p>
          </div>
        </div>
        <div className="chat-history">
          <div className="chat-message">
            <p>Hello!</p>
          </div>
          <div className="chat-message">
            <p>How are you doing?</p>
          </div>
          <div className="chat-message">
            <p>Let's meet up soon!</p>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message here..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messenger;

