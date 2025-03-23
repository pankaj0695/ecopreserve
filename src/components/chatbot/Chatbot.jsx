// Chatbot.jsx
import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import { FaUser, FaRobot, FaPaperPlane } from "react-icons/fa";

const Chatbot = ({ title = "Chatbot", onSubmit }) => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello there! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await onSubmit(input);
      setMessages([...newMessages, { type: "bot", text: response }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { type: "bot", text: "Something went wrong!" },
      ]);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.messageWrapper} ${
              msg.type === "user" ? styles.userMsg : styles.botMsg
            }`}
          >
            <div className={styles.icon}>
              {msg.type === "user" ? <FaUser /> : <FaRobot />}
            </div>
            <div className={styles.message}>{msg.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Ask Me Anything........"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.sendButton}>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
