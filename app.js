const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    projects.forEach((project) => {
      const categories = project.dataset.categories.split(" ");
      project.hidden = selected !== "all" && !categories.includes(selected);
    });
  });
});
