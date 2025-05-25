document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-dark-mode");
  const scrollUp = document.getElementById("scroll-up");
  const scrollDown = document.getElementById("scroll-down");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Tema Claro"
      : "🌙 Tema Escuro";
  });

  scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  scrollDown.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
});
