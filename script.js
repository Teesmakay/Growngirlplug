// Enhanced Website Interaction Script
// Adds smoother UX, form validation, and better alerts

document.addEventListener("DOMContentLoaded", () => {
  const clientForm = document.getElementById("clientForm");
  const braiderForm = document.getElementById("braiderForm");

  function validateForm(form) {
    const inputs = form.querySelectorAll("input, textarea");
    for (let field of inputs) {
      if (field.hasAttribute("required") && !field.value.trim()) {
        field.style.border = "2px solid #D9534F"; // red highlight
        return false;
      } else {
        field.style.border = "1px solid #ccc";
      }
    }
    return true;
  }

  function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.textContent = message;

    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add("show"), 50);

    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 300);
    }, 2500);
  }

  if (clientForm) {
    clientForm.addEventListener("submit", e => {
      e.preventDefault();

      if (!validateForm(clientForm)) {
        showPopup("Please fill in all required fields.");
        return;
      }

      showPopup("Thank you for booking! We’ll be in touch soon.");
      clientForm.reset();
    });
  }

  if (braiderForm) {
    braiderForm.addEventListener("submit", e => {
      e.preventDefault();

      if (!validateForm(braiderForm)) {
        showPopup("Please complete all required fields.");
        return;
      }

      showPopup("Application received! Our team will review and contact you.");
      braiderForm.reset();
    });
  }
});

// Popup styling
const style = document.createElement("style");
style.textContent = `
  .popup-message {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #D8A39D;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    z-index: 9999;
  }
  .popup-message.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
