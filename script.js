const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const inverts = document.querySelectorAll(".invert");

const enableDarkMode = () => {
  body.classList.toggle("dark-mode");
  toggle.classList.toggle("toggle-switch");
  inverts.forEach((node) => node.classList.toggle("dark-mode"));
}