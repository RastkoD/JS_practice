document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const panelId = button.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    button.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      requestAnimationFrame(() => {
        panel.style.maxHeight = "0";
      });
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      button.click();
    }
  });
});
