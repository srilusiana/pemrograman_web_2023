function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    if (message.trim() !== "") {
        var chatboxMessages = document.getElementById("chatbox-messages");
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        chatboxMessages.appendChild(newMessage);

        // Clear the input field after sending a message
        messageInput.value = "";

        // Scroll to the bottom to show the latest message
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
    }
}
