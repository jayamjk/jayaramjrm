document.addEventListener("DOMContentLoaded", () => {
  /* MOBILE MENU */
  const toggle = document.getElementById("menuToggle");
  const close = document.getElementById("closeMenu");
  const nav = document.getElementById("navMenu");

  toggle?.addEventListener("click", () => nav.classList.add("active"));
  close?.addEventListener("click", () => nav.classList.remove("active"));

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });

  /* FIGMA POPUP – DYNAMIC PER CASE */
  document.querySelectorAll(".open-figma").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const embedUrl = btn.dataset.embed;
      const fileUrl = btn.dataset.file;

      const overlay = document.getElementById("figmaOverlay");
      const iframe = document.getElementById("figmaFrame");
      const externalBtn = document.getElementById("figmaExternal");

      iframe.src = embedUrl;
      externalBtn.href = fileUrl;

      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  /* CLOSE FIGMA POPUP */
  document.getElementById("closeFigma")?.addEventListener("click", () => {
    const overlay = document.getElementById("figmaOverlay");
    const iframe = document.getElementById("figmaFrame");

    iframe.src = ""; // reset
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  /* CLICK OUTSIDE TO CLOSE */
  document.getElementById("figmaOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "figmaOverlay") {
      const iframe = document.getElementById("figmaFrame");
      iframe.src = "";
      e.target.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

 /* PDF PREVIEW POPUP */
document.querySelectorAll(".open-pdf").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const pdfUrl = btn.dataset.embed;
    const overlay = document.getElementById("pdfOverlay");
    const iframe = document.getElementById("pdfFrame");
    const downloadBtn = document.getElementById("downloadPdfBtn");

    iframe.src = pdfUrl;
    downloadBtn.href = pdfUrl.split("#")[0]; // clean download URL

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});


  /* CLOSE BUTTON */
  document.getElementById("closePdf").addEventListener("click", () => {
    const overlay = document.getElementById("pdfOverlay");
    const iframe = document.getElementById("pdfFrame");

    iframe.src = "";
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  /* CLICK OUTSIDE TO CLOSE */
  document.getElementById("pdfOverlay").addEventListener("click", (e) => {
    if (e.target.id === "pdfOverlay") {
      const iframe = document.getElementById("pdfFrame");

      iframe.src = "";
      e.target.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  /* CONTACT POPUP */
  const openContact = document.getElementById("openContact");
  const closeContact = document.getElementById("closeContact");
  const contactOverlay = document.getElementById("contactOverlay");

  openContact?.addEventListener("click", (e) => {
    e.preventDefault();
    contactOverlay.classList.add("active");
    nav.classList.remove("active");
    document.body.style.overflow = "hidden";
  });

  closeContact?.addEventListener("click", () => {
    contactOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  contactOverlay?.addEventListener("click", (e) => {
    if (e.target === contactOverlay) {
      contactOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

