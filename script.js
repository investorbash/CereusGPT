  const chatContainer = document.getElementById('chat-container');
  const userInput = document.getElementById('user-input');

  function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.textContent = message;
    userMessage.classList.add('message', 'user-message');
    chatContainer.appendChild(userMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function addBotResponse(message) {
    const botMessage = document.createElement('div');
    botMessage.textContent = message;
    botMessage.classList.add('message', 'bot-message');
    chatContainer.appendChild(botMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const message = userInput.value.trim();
      if (message !== '') {
        addUserMessage(message);
        userInput.value = '';
        // Simulating bot response
        setTimeout(() => {
          addBotResponse("This is a bot response.");
        }, 500);
      }
    }
  });

  // Initial bot greeting
  setTimeout(() => {
    addBotResponse("Hello! How can I assist you today?");
  }, 1000);