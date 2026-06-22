const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

const form = document.getElementById("contactForm");

// const successBox = document.getElementById("successMessage");
const errorBox = document.getElementById("errorMessage");
const successModal = document.getElementById("successModal");
const successOkBtn = document.getElementById("successOkBtn");

function showSuccessModal() {
  successModal.classList.remove("hidden");
}

successOkBtn.addEventListener("click", () => {
  successModal.classList.add("hidden");
});

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");

  setTimeout(() => {
    errorBox.classList.add("hidden");
  }, 3000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!fullName || !email || !phone || !subject || !message) {
    showError("Please fill in all fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  // Get existing messages
  const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

  // Add new message
  messages.push({
    fullName,
    email,
    phone,
    subject,
    message,
    date: new Date().toLocaleString(),
  });

  // Save back to localStorage
  localStorage.setItem("contactMessages", JSON.stringify(messages));

  // Show success message
  // showSuccess("Message sent successfully!");
  showSuccessModal();

  // Clear form
  form.reset();
});

// Scroll Top
const scrollTopBtn = document.getElementById("scroll-top");

scrollTopBtn.addEventListener("click", function (e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
