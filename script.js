// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".hero-nav");
  const navList = nav.querySelector("ul");
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".hero-nav ul");
  const navLinks = document.querySelectorAll(".hero-nav ul li a");

  // Toggle mobile menu on hamburger click
  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
    toggleBtn.classList.toggle("open");
  });

   // Close menu when clicking any nav link
   navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Change nav background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});


function sendMSG() {

  const msgSuggesion = document.getElementById("sug")
  const msgInput = document.getElementById("msg");
  const msg = msgInput.value.trim();
  

  if (msg === "") return;

  const chatBox = document.getElementById("chat-box");

  // Append user message
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = msg;
  chatBox.appendChild(userMsg);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input
  msgInput.value = "";

  fetch("https://portfolio-bot-api.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: msg })
  })
    .then(response => response.json())
    .then(data => {
      const botMsg = document.createElement("div");
      botMsg.className = "message bot";
      botMsg.innerHTML = data.answer;
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
      const errMsg = document.createElement("div");
      errMsg.className = "message bot";
      errMsg.textContent = "Sorry, something went wrong.";
      chatBox.appendChild(errMsg);
    });
}

function sendSuggestion(text) {
  document.getElementById("msg").value = text;
  sendMSG();
  const spans = document.querySelectorAll(".suggestion span");
  spans.forEach(span => {
    span.style.display = "none";
  });

}