document.querySelectorAll(".faq-wrap").forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active-accordion");

    document.querySelectorAll(".faq-wrap").forEach((el) => {
      el.classList.remove("active-accordion");
    });

    if (!isActive) {
      item.classList.add("active-accordion");
    }
  });
});
