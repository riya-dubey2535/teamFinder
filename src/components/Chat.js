import React, { useState } from 'react';
import '../index.css'; 

const Chat = () => {
  const [messages, setMessages] = useState(['Welcome to the team chat!']);

  const sendMessage = () => {
    setMessages([...messages, 'New message sent']);
  };

  return (
    <div>
      <h2>Team Chat</h2>
      <ul>
        {messages.map((msg, index) => <li key={index}>{msg}</li>)}
      </ul>
      <button onClick={sendMessage}>Send a Message</button>
    </div>
  );
};

export default Chat;
