// Leo Club of Kathmandu Budigandaki — shared site script

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Mark current page's nav link as active
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });

  // Contact form: no backend yet on a static site — guide the user to email/social instead
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.querySelector("#form-status");
      if (status) {
        status.textContent =
          "This form isn't wired to a backend yet on this static site. Please reach us via Facebook or LinkedIn below, or connect a form service (e.g. Formspree) once ready.";
      }
    });
  }

  // Footer year
  var yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = "2026";
  }
});
