export function initMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const isExpanded = !mobileMenu.classList.contains("hidden");
    menuBtn.setAttribute("aria-expanded", isExpanded);
    menuBtn.setAttribute(
      "aria-label",
      isExpanded
        ? "Fermer le menu de navigation"
        : "Ouvrir le menu de navigation",
    );
  });

  return mobileMenu;
}
