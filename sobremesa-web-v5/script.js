const filters = document.querySelectorAll(".filter");
const events = document.querySelectorAll("[data-tags]");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const value = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    events.forEach((event) => {
      const tags = event.dataset.tags.split(" ");
      const shouldShow = value === "all" || tags.includes(value);
      event.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
