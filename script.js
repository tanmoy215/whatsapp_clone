document.getElementById('sendMessage').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
  
    if (messageText) {
      const chatBody = document.querySelector('.chat-body');
      const newMessage = document.createElement('div');
      newMessage.className = 'message sent';
      newMessage.textContent = messageText;
  
      chatBody.appendChild(newMessage);
      messageInput.value = '';
      chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }
  });
  