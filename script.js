// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  const isExpanded = !mobileMenu.classList.contains("hidden");
  menuBtn.setAttribute("aria-expanded", isExpanded);
  menuBtn.setAttribute(
    "aria-label",
    isExpanded ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"
  );
});

// Testimonial slider
const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".testimonial-dot");
let currentTestimonial = 0;

function showTestimonial(index) {
  const prevIndex = currentTestimonial;
  currentTestimonial = index;

  // Fade out current card
  testimonials[prevIndex].classList.remove("active");

  // Update dots immediately
  dots.forEach((dot) => {
    dot.classList.remove("bg-blue-600");
    dot.classList.add("bg-gray-300");
  });
  dots[index].classList.remove("bg-gray-300");
  dots[index].classList.add("bg-blue-600");

  // After fade-out, swap display then fade in
  setTimeout(() => {
    testimonials[prevIndex].classList.add("hidden");
    testimonials[index].classList.remove("hidden");
    // Force reflow so the browser registers display:block before the opacity transition
    void testimonials[index].offsetHeight;
    testimonials[index].classList.add("active");
  }, 500);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-index"));
    showTestimonial(index);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  let nextTestimonial = currentTestimonial + 1;
  if (nextTestimonial >= testimonials.length) {
    nextTestimonial = 0;
  }
  showTestimonial(nextTestimonial);
}, 5000);

// Contact form submission
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Here you would typically send the form data to a server
  // For this example, we'll just show the success message
  contactForm.reset();
  formSuccess.classList.remove("hidden");

  // Hide success message after 5 seconds
  setTimeout(() => {
    formSuccess.classList.add("hidden");
  }, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
