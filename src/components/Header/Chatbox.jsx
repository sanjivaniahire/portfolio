import React, { useState, useRef, useEffect } from 'react';
import './Chatbox.css';

const Chatbox = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatboxRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleClose = () => {
    setMessages([]);
    setInputValue('');
    onClose();
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h3>Chat</h3>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      </div>
      <div className="chatbox-messages" ref={chatboxRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <form className="chatbox-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="message-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
