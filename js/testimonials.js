export function initTestimonials() {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".testimonial-dot");
  let current = 0;

  function showTestimonial(index) {
    const prevIndex = current;
    current = index;

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
      void testimonials[index].offsetHeight;
      testimonials[index].classList.add("active");
    }, 500);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showTestimonial(parseInt(dot.getAttribute("data-index")));
    });
  });

  // Auto-rotate
  setInterval(() => {
    showTestimonial((current + 1) % testimonials.length);
  }, 5000);
}
