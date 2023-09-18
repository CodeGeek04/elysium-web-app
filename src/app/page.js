'use client';

import React, { useState } from 'react';
import './page.css';

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [agentBubble1, setAgentBubble1] = useState('');
  const [agentBubble2, setAgentBubble2] = useState('');
  const [agentBubble3, setAgentBubble3] = useState('');
  const [butlerBubble, setButlerBubble] = useState('');

  const handleSendMessage = () => {
    const newMessage = inputMessage;
    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Update the agent's bubble based on the input message
    if (newMessage === '1') {
      setAgentBubble1('Agent Message 1');
      setButlerBubble('AI Butler Message');
      moveImage(1);
      setTimeout(() => {
        setButlerBubble('');
        setAgentBubble1('');
      }, 1900)
    } else if (newMessage === '2') {
      setAgentBubble2('Agent Message 2');
      setButlerBubble('AI Butler Message');
      moveImage(2);
      setTimeout(() => {
        setButlerBubble('');
        setAgentBubble2('');
      }, 1900)
    } else {
      setAgentBubble3('Agent Message 3');
      setButlerBubble('AI Butler Message');
      moveImage(3);
      setTimeout(() => {
        setButlerBubble('');
        setAgentBubble3('');
      }, 1900)
    }
  };

  const moveImage = (imageNumber) => {
    const spriteContainer = document.querySelector(`.sprite-container${imageNumber}`);
    const butler = document.querySelector('.butler');
    if (spriteContainer) {
      spriteContainer.classList.add('animate-image');
      butler.classList.add('animate-image');
      setTimeout(() => {
        spriteContainer.classList.remove('animate-image');
        butler.classList.remove('animate-image');
      }, 2000);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className="message user">
              {message}
            </div>
          ))}
        </div>

        <div className="butler-container">
          <img src="./ai-butler.png" alt="butler" className="butler" height="50px" width="50px" />
          {butlerBubble && <div className="bubble agent">{butlerBubble}</div>}
        </div>

        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>

      <div className="sprite-container1">
        <img src="./cyborg_sprite.png" alt="Sprite 1" className="sprite sprite1" />
        {agentBubble1 && <div className="bubble agent">{agentBubble1}</div>}
      </div>

      <div className="sprite-container2">
        <img src="./robot_sprite.png" alt="Sprite 2" className="sprite sprite2" />
        {agentBubble2 && <div className="bubble agent">{agentBubble2}</div>}
      </div>

      <div className="sprite-container3">
        <img src="./humanoid_sprite.png" alt="Sprite 3" className="sprite sprite3" />
        {agentBubble3 && <div className="bubble agent">{agentBubble3}</div>}
      </div>
    </main>
  );
}
