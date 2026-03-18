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
      <p>© ${currentYear} Dilip Shrestha. All Rights Reserved.</p>
    </div>
  `;
}
