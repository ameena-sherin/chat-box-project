// Welcome message
window.onload = function () {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += "<p><b>Bot:</b> How can I help you? 😊</p>";
}

function sendMessage() {
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let msg = input.value.trim();
    if (msg === "") return;

    // User message
    chatBox.innerHTML += "<p><b>You:</b> " + msg + "</p>";

    // Bot reply
    let reply = getReply(msg.toLowerCase());
    chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(msg) {

    if (msg.includes("hi") || msg.includes("hello")) {
        return "Hello 😊 How are you?";
    }
    else if (msg.includes("how are you")) {
        return "I am fine 💯 What about you?";
    }
    else if (msg.includes("your name")) {
        return "I am a simple chat bot 🤖";
    }
    else if (msg.includes("help")) {
        return "Sure 👍 Tell me your problem";
    }
    else if (msg.includes("bye")) {
        return "Goodbye 👋 Take care!";
    }
    else {
        return "Sorry 😅 I don't understand";
    }
}