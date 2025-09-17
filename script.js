document.addEventListener("DOMContentLoaded", () => {
  const clientForm = document.getElementById("clientForm");
  const braiderForm = document.getElementById("braiderForm");

  if (clientForm) {
    clientForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for booking! We’ll be in touch soon.");
      clientForm.reset();
    });
  }

  if (braiderForm) {
    braiderForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Application received! Our team will review and contact you.");
      braiderForm.reset();
    });
  }
});
