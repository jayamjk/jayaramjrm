document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const close = document.getElementById("closeMenu");
  const nav = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    nav.classList.add("active");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
