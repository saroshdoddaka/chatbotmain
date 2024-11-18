// Ensure DOM elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  // Chatbot responses
  const responses = {
    "hi": "Hello! How can I assist you with information about the Akshaya Patra Foundation?",
    "hello": "Hi there! Feel free to ask anything about Akshaya Patra fundraisers or our mission.",
    "hey": "Hey! What would you like to know about Akshaya Patra?",
    "what is this fundraiser about": "This fundraiser supports the Akshaya Patra Foundation, which provides mid-day meals to underprivileged schoolchildren in India, ensuring they stay in school and receive proper nutrition.",
    "how does my donation help": "Your donation helps provide hot, nutritious meals to children. For example, $20 feeds a child for an entire school year, allowing them to focus on their education instead of hunger.",
    "how can i donate": "You can donate via our official website at www.akshayapatra.org/donate or through bank transfer details provided on the website.",
    "events": "Upcoming events: Charity Gala on Nov 20, 6 PM at the Grand Ballroom, and a Virtual Walkathon on Nov 25 to raise awareness and funds.",
    "volunteer": "We welcome volunteers! Opportunities include helping with event management, fundraising campaigns, and social media outreach. Sign up at www.akshayapatra.org/volunteer.",
    "proof": "Akshaya Patra is transparent with its impact. We share annual reports and real stories of children helped by your donations. Check these at www.akshayapatra.org/impact.",
  };

  // Append message to chat
  function appendMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
  }

  // Handle user input
  function handleUserInput() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (!userMessage) return;

    appendMessage(`You: ${userInput.value}`, "user-message");

    // Bot response
    let botResponse = responses[userMessage];

    // Handle related questions or unrecognized input
    if (!botResponse) {
      if (userMessage.includes("akshaya patra") || userMessage.includes("donation") || userMessage.includes("fundraiser")) {
        botResponse = "It seems you're asking about Akshaya Patra! Can you clarify your question? You can ask about donations, events, volunteering, or our mission.";
      } else {
        botResponse = "I'm sorry, I didn't understand that. Can you rephrase or ask something about Akshaya Patra?";
      }
    }

    setTimeout(() => appendMessage(`Chatbot: ${botResponse}`, "bot-message"), 500);

    userInput.value = ""; // Clear input
  }

  // Event listeners
  sendBtn.addEventListener("click", handleUserInput);
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior, especially form submission
      handleUserInput();
    }
  });
});



