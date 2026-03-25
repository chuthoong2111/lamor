import "../scss/fix.css";
import "../scss/onlybooking.scss";
import "../scss/book.scss";
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((btn) => {
  const targetSelector = btn.getAttribute("data-bs-target");
  const collapse = document.querySelector(targetSelector);

  const item = btn.closest(".accordion-item");

  btn.addEventListener("click", (e) => {
    e.preventDefault(); // chặn bootstrap (nếu có)

    const isOpen = collapse.classList.contains("show");

    if (isOpen) {
      // đóng
      collapse.style.height = collapse.scrollHeight + "px";

      requestAnimationFrame(() => {
        collapse.style.height = "0px";
      });

      collapse.classList.remove("show");
      item.classList.remove("active");
      btn.classList.add("collapsed");
    } else {
      // mở (multi-open, không đóng item khác)
      collapse.classList.add("show");
      item.classList.add("active");
      btn.classList.remove("collapsed");

      collapse.style.height = collapse.scrollHeight + "px";
    }
  });

  // reset height sau animation
  collapse.addEventListener("transitionend", () => {
    if (collapse.classList.contains("show")) {
      collapse.style.height = "auto";
    }
  });
});