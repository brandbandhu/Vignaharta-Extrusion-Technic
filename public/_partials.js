/* Shared header & footer markup injected into each page */
document.write(`
<div class="nav-backdrop"></div>
<header class="site-header">
  <div class="header-top">
    <div class="container">
      <div class="info">
        <span>📞 <a href="tel:+919876543210" data-i18n="top.phone">+91 98765 43210</a></span>
        <span>✉ <a href="mailto:info@vignahartaet.com" data-i18n="top.email">info@vignahartaet.com</a></span>
        <span data-i18n="top.hours">Mon - Sat: 9:00 AM - 7:00 PM</span>
      </div>
      <div class="lang-toggle" role="group" aria-label="Language">
        <button data-lang="en">EN</button>
        <button data-lang="mr">मराठी</button>
      </div>
    </div>
  </div>
  <div class="header-main">
    <div class="container">
      <a href="home.html" class="logo">
        <div class="logo-mark">VET</div>
        <div class="logo-text">
          <strong>Vignaharta Extrusion Technic</strong>
          <span>Vignaharta Enterprise</span>
        </div>
      </a>
      <nav>
        <ul class="nav-list">
          <li><a href="home.html" data-i18n="nav.home">Home</a></li>
          <li><a href="about.html" data-i18n="nav.aboutShort">About</a></li>
          <li><a href="vision-mission.html" data-i18n="nav.vm">Vision & Mission</a></li>
          <li><a href="company-profile.html" data-i18n="nav.profile">Company Profile</a></li>
          <li><a href="products.html" data-i18n="nav.products">Products</a></li>
          <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </nav>
      <div class="header-cta">
        <a href="contact.html" class="btn btn-primary" data-i18n="cta.enquire">Enquire Now</a>
        <button class="menu-toggle" aria-label="Menu">☰</button>
      </div>
    </div>
  </div>
</header>
`);

window.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container">
      <div class="foot-grid">
        <div class="foot-col foot-about">
          <a href="home.html" class="logo" style="margin-bottom:18px">
            <div class="logo-mark">VET</div>
            <div class="logo-text">
              <strong>Vignaharta Extrusion Technic</strong>
              <span>Vignaharta Enterprise</span>
            </div>
          </a>
          <p data-i18n="foot.about">Vignaharta Extrusion Technic & Vignaharta Enterprise — manufacturer of industrial extrusion machinery, precision spare parts, and chemical machinery for the pipe manufacturing industry.</p>
        </div>
        <div class="foot-col">
          <h4 data-i18n="foot.links">Quick Links</h4>
          <ul>
            <li><a href="home.html" data-i18n="nav.home">Home</a></li>
            <li><a href="about.html" data-i18n="nav.aboutShort">About</a></li>
            <li><a href="vision-mission.html" data-i18n="nav.vm">Vision & Mission</a></li>
            <li><a href="company-profile.html" data-i18n="nav.profile">Company Profile</a></li>
            <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4 data-i18n="foot.cats">Product Categories</h4>
          <ul>
            <li><a href="products.html#vet">VET – Extruder Machines</a></li>
            <li><a href="products.html#vet">Screw Barrels</a></li>
            <li><a href="products.html#vet">Gear Boxes</a></li>
            <li><a href="products.html#ve">VE – Spare Parts</a></li>
            <li><a href="products.html#pe">PE – Chemical Machinery</a></li>
          </ul>
        </div>
        <div class="foot-col">
          <h4 data-i18n="foot.contact">Contact Info</h4>
          <ul class="foot-contact">
            <li><span class="ic">📍</span><span data-i18n="ct.addr">Dhok Kunj / Enclave Area, Industrial Zone, Maharashtra, India</span></li>
            <li><span class="ic">📞</span><a href="tel:+919876543210" data-i18n="top.phone">+91 98765 43210</a></li>
            <li><span class="ic">✉</span><a href="mailto:info@vignahartaet.com" data-i18n="top.email">info@vignahartaet.com</a></li>
            <li><span class="ic">💬</span><a href="https://wa.me/919876543210" target="_blank">WhatsApp Chat</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span data-i18n="foot.rights">© 2025 Vignaharta Extrusion Technic. All rights reserved.</span>
      </div>
    </div>`;
  document.body.appendChild(footer);

  const wa = document.createElement("a");
  wa.href = "https://wa.me/919876543210";
  wa.target = "_blank";
  wa.className = "wa-float";
  wa.setAttribute("aria-label", "WhatsApp");
  wa.innerHTML = "💬";
  document.body.appendChild(wa);

  // re-apply translations after footer mount
  if (window.applyLangCurrent) window.applyLangCurrent();
  const lang = localStorage.getItem("vet-lang") || "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (window.translations && window.translations[lang]?.[k])
      el.innerHTML = window.translations[lang][k];
  });
});
