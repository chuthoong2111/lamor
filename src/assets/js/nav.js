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
const btn = document.getElementById("menuBtn");
document.addEventListener("click", function handleClickOutsideBox(event) {
	if (!header.contains(event.target)) {
		let navs = document.querySelectorAll(".showhide-mobile");
		btn.classList.remove("open");
		navs.forEach(function (nav) {
			nav.classList.remove("flex");
			nav.classList.add("hidden");
		});
	}
});
btn.addEventListener("click", showhidemenu);
function showhidemenu() {
	let navs = document.querySelectorAll(".showhide-mobile");
	btn.classList.toggle("open");
	navs.forEach(function (nav) {
		nav.classList.toggle("flex");
		nav.classList.toggle("hidden");
	});
}
