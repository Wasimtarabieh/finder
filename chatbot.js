document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotModal = document.getElementById('chatbot-modal');
    const closeChatbot = document.querySelector('.close-chatbot');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    chatbotToggle.addEventListener('click', () => {
        chatbotModal.style.display = 'block';
    });

    closeChatbot.addEventListener('click', () => {
        chatbotModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === chatbotModal) {
            chatbotModal.style.display = 'none';
        }
    });

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatbotInput.value;
        if (message.trim() === '') return;

        // عرض رسالة المستخدم
        const userMessage = document.createElement('div');
        userMessage.classList.add('chatbot-message', 'user-message');
        userMessage.textContent = message;
        chatbotMessages.appendChild(userMessage);

        // معالجة رسالة التشات بوت
        const botMessage = document.createElement('div');
        botMessage.classList.add('chatbot-message', 'bot-message');
        botMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
        chatbotMessages.appendChild(botMessage);

        // مسح الإدخال
        chatbotInput.value = '';
    }
});
