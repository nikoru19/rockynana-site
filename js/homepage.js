document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Roles Accordion ---------- */
  const roleItems = document.querySelectorAll(".role-item");

  roleItems.forEach(item => {
    const title = item.querySelector("h3");
    const content = item.querySelector("p");

    title.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      // Close all role items
      roleItems.forEach(i => i.querySelector("p").style.display = "none");

      // Toggle current item
      content.style.display = isOpen ? "none" : "block";
    });
  });

  /* ---------- Optional: Fade-in sections on scroll ---------- */
  const fadeSections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeSections.forEach(section => {
    section.classList.add("opacity-0"); // initially hidden
    observer.observe(section);
  });
});
