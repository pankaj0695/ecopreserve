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
      const formattedResponse = formatResponse(response);
      setMessages([...newMessages, { type: "bot", text: formattedResponse }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { type: "bot", text: "Something went wrong!" },
      ]);
    }
  };

  const formatResponse = (response) => {
    if (response.match(/\d+\.\s/)) {
      const points = response.split(/\d+\.\s/).filter((point) => point.trim());
      return (
        <ul>
          {points.map((point, index) => (
            <li key={index}>{applyBoldFormatting(point.trim())}</li>
          ))}
        </ul>
      );
    }
    return applyBoldFormatting(response);
  };

  const applyBoldFormatting = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
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
            <div className={styles.message}>
              {msg.type === "bot" && typeof msg.text === "object" ? (
                msg.text
              ) : (
                <span>{msg.text}</span>
              )}
            </div>
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
