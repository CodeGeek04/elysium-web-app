'use client'

import React, { useState } from 'react';
import './page.css';

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  const handleSendMessage = () => {
    setMessages([...messages, inputMessage]);
    setInputMessage('');
    if (inputMessage === '1') {
      moveImage(1);
    } else if (inputMessage === '2') {
      moveImage(2);
    } else {
      moveImage(3);
    }
  };

  const moveImage = (imageNumber) => {
    const spriteContainer = document.querySelector(`.sprite-container${imageNumber}`);
    setShowBubble(true);
    if (spriteContainer) {
      spriteContainer.classList.add('animate-image');
      setTimeout(() => {
        spriteContainer.classList.remove('animate-image');
      }, 2000);
    }
    setShowBubble(false);
  };

  return (
    <main>

      <div className="sprite-container1">
        {/* <button onClick={() => moveImage(1)}>Move Image 1</button> */}
        <img src="./cyborg_sprite.png" alt="Sprite 1" className="sprite sprite1" />
        <if showBubble><div className="bubble">Let me do it</div></if>
        <else></else>
      </div>

      <div className="sprite-container2">
        {/* <button onClick={() => moveImage(2)}>Move Image 2</button> */}
        <img src="./robot_sprite.png" alt="Sprite 2" className="sprite sprite2" />
        <if showBubble><div className="bubble">Let me do it</div></if>
        <else></else>
      </div>

      <div className="sprite-container3">
        {/* <button onClick={() => moveImage(3)}>Move Image 3</button> */}
        <img src="./humanoid_sprite.png" alt="Sprite 3" className="sprite sprite3" />
        <if showBubble><div className="bubble">Let me do it</div></if>
        <else></else>
      </div>
      
      <div className="container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <div className="input-container" style={{ color: 'blue', gap: '32px' }}>
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
      
    </main>
  );
}
