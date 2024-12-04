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
closeIcon.addEventListener('click', () => {
  // Hide the chatbot by removing the "show" class
  chatbot.classList.remove('show');
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

  let responseStep = 0;
  const responses = [
      "Well, I have both technical skills and soft skills. Do you want me to tell you specifically what they are?",
      "For technical skills, I am good at HTML, CSS, JavaScript, Node.js, MySQL, Cisco, and GitHub.  ",
      "For soft skills, I am good at communicating, problem-solving, teamwork and time management",
      "I'm still learning! For further assistance, please contact Busisiwe@gmail.com 😊"
  ];

  // Handle send button click
  sendBtn.addEventListener("click", () => {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
          createChatMessage(userMessage, "outgoing");
          chatInput.value = "";

          // Simulate bot response
          setTimeout(() => {
              const response = responseStep < responses.length ? responses[responseStep] : responses[responses.length - 1];
              createChatMessage(response, "incoming");
              if (responseStep < responses.length) {
                  responseStep++;
              }
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
