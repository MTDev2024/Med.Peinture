export function initScroll(mobileMenu) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute("href"));

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });
}
