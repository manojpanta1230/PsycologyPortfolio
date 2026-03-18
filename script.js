const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (item) {
      item.classList.toggle("open");
    }
  });
});

const contactForm = document.getElementById("contact-form");
if (contactForm && window.emailjs) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.sendForm("service_fdc2bgt", "template_fczmkax", contactForm).then(
      () => {
        alert("Message sent successfully.");
        contactForm.reset();
      },
      () => {
        alert("Message could not be sent. Please try again.");
      }
    );
  });
}

const sharedFooter = document.getElementById("site-footer");
if (sharedFooter) {
  const currentYear = new Date().getFullYear();
  sharedFooter.innerHTML = `
    <div class="container footer-grid">
      <div>
        <div class="footer-brand-wrap">
          <img src="image/logo.png" alt="Dilip Shrestha logo" class="footer-logo">
          <h3>Dilip Shrestha</h3>
        </div>
        <p>Counseling Psychologist and Gestalt Psychotherapist based in Lalitpur, Nepal.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <p><a href="/service">Services</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/gallery">Gallery</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>
      <div>
        <h3>Follow</h3>
        <div class="social-links">
          <a href="http://facebook.com/dilip.shrestha.5055" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="http://www.linkedin.com/in/dilip-shrestha-9b8a85211" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/psychology_with_dilip" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© ${currentYear} Dilip Shrestha. All Rights Reserved. Made by <a href="https://birvex.tech" target="_blank" rel="noopener noreferrer" style="color: green;">Birvex Tech Pvt Ltd</a></p>
    </div>
  `;
}

const isHomePage = window.location.pathname === "/" || window.location.pathname === "/index.html";
if (isHomePage) {
  const certificateModal = document.createElement("div");
  certificateModal.className = "certificate-modal";
  certificateModal.setAttribute("id", "certificate-modal");
  certificateModal.setAttribute("role", "dialog");
  certificateModal.setAttribute("aria-modal", "true");
  certificateModal.setAttribute("aria-label", "Certificate preview");

  certificateModal.innerHTML = `
    <div class="certificate-modal-content">
      <button type="button" class="certificate-close" aria-label="Close certificate modal">&times;</button>
      <img src="/image/sir%20certificate.JPG" alt="Dilip Shrestha certificate" class="certificate-image">
    </div>
  `;

  document.body.appendChild(certificateModal);

  const closeButton = certificateModal.querySelector(".certificate-close");
  const closeModal = () => {
    certificateModal.classList.add("hidden");
  };

  window.setTimeout(() => {
    certificateModal.classList.add("show");
  }, 120);

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && certificateModal.classList.contains("show")) {
      closeModal();
    }
  });
}
