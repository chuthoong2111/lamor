const nav = document.querySelectorAll(".showhide-mobile");
const header = document.getElementById("top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    // adjust this value based on site structure and header image height
    header.classList.add("nav-sticky");
    header.classList.add("pt-scroll");
  } else {
    header.classList.remove("nav-sticky");
    header.classList.remove("pt-scroll");
  }
});
