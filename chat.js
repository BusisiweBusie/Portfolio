document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");
    const closeIcon = chatbot.querySelector("header .fa-window-close-o");
    const sendBtn = chatbot.querySelector(".chat-input button");
    const chatInput = chatbot.querySelector(".chat-input textarea");
    const chatbox = chatbot.querySelector(".chatbox");
  
    // Toggle chatbot visibility
    chatbotToggler.addEventListener("click", () => {
      chatbot.classList.toggle("show");
    });
  
    // Add click event listener to close icon
    closeIcon.addEventListener("click", () => {
      chatbot.classList.remove("show");
    });
  
    // Function to create chat message
    const createChatMessage = (message, type) => {
      const chatMessage = document.createElement("li");
      chatMessage.classList.add("chat", type);
  
      const icon = document.createElement("span");
      icon.classList.add("material-symbols-outlined");
      icon.textContent = type === "incoming" ? "smart_toy" : "send";
  
      const text = document.createElement("p");
      text.innerHTML = message;
  
     
      chatMessage.appendChild(text);
      chatbox.appendChild(chatMessage);
      chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    };
  
    // Function to generate response based on user input
    const generateResponse = (message) => {
      message = message.toLowerCase(); // Normalize input for better matching
  
      if (message.includes("hello") || message.includes("hi")) {
        return "I hope you're doing well! How can I assist you today?";
      } else if (message.includes("tech skills") || message.includes("experience")) {
        return "Busie is skilled in HTML, CSS, JavaScript, Node.js, Cisco, MySQL, and more. Would you like specific details about any technology?";
      } else if (message.includes("contact")) {
        return 'You can reach Busie at <a href="Busisiwemcaka@gmail.com"> Busisiwemcaka@gmail.com</a> or connect on <a href="https://www.linkedin.com/in/busisiwe-mcaka-8a9bb91b4?" target="_blank">LinkedIn</a>.';
      } else if (message.includes("what are your soft skills")) {
        return  "For soft skills, I am good at communicating, problem-solving,teamwork and time management";
      } else if (message.includes("github")) { 
        return "You can find Busie's GitHub profile at <a href='https://github.com/BusisiweBusie' target='_blank'>https://github.com/BusisiweBusie</a>.";
      } else if (message.includes("string api") || message.includes("string")) {
       
      return "I'd be happy to tell you more about Busie's Portfolio. Feel free to ask about his skills, projects, GitHub profile, or contact information.";
    }
};
  
    // Handle send button click
    sendBtn.addEventListener("click", () => {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        createChatMessage(userMessage, "outgoing");
        chatInput.value = "";
  
        // Simulate bot response
        setTimeout(() => {
          const response = generateResponse(userMessage);
          createChatMessage(response, "incoming");
        }, 1000);
      }
    });
  
    // Handle Enter key press
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
      }
    });
  });
  