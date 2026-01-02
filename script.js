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

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openFigma");
  const overlay = document.getElementById("figmaOverlay");
  const closeBtn = document.getElementById("closeFigma");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
