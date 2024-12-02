document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById("chat-window");
    const messageInput = document.querySelector(".message-input");
    const sendMessageButton = document.getElementById("send-message");
    const chatFooterForm = document.querySelector(".chat-form");
  
    const responses = {
      "hello": "Hi there! 👋 How can I assist you today?",
      "portfolio": "You can find my projects in the portfolio section of my website!",
      "skills": "I am skilled in JavaScript, React, Node.js, and more. Let me know if you'd like to know specifics.",
      "contact": "Feel free to reach out via the contact section. I'd love to connect!",
      "default": "I'm not sure I understand. Can you rephrase your question?",
    };
  
    const createMessageElement = (text, sender) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `message ${sender}-message`;
      const messageTextDiv = document.createElement("div");
      messageTextDiv.className = "message-text";
      messageTextDiv.innerHTML = text;
      messageDiv.appendChild(messageTextDiv);
      return messageDiv;
    };
  
    const addMessage = (text, sender) => {
      const messageElement = createMessageElement(text, sender);
      chatWindow.appendChild(messageElement);
      chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
    };
  
    const getResponse = (input) => {
      const normalizedInput = input.toLowerCase().trim();
      return responses[normalizedInput] || responses["default"];
    };
  
    const handleUserInput = (event) => {
      event.preventDefault();
      const userText = messageInput.value.trim();
      if (userText) {
        addMessage(userText, "user");
        const botResponse = getResponse(userText);
        setTimeout(() => addMessage(botResponse, "bot"), 500); // Simulate typing delay
        messageInput.value = ""; // Clear input
      }
    };
  
    sendMessageButton.addEventListener("click", handleUserInput);
    chatFooterForm.addEventListener("submit", handleUserInput);
  });
  