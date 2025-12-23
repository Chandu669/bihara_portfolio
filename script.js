function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navMenu").classList.remove("active");
}