export function initForm() {
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactForm.reset();
    formSuccess.classList.remove("hidden");

    setTimeout(() => {
      formSuccess.classList.add("hidden");
    }, 5000);
  });
}
