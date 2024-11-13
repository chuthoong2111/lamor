// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.batch([".card", ".item", ".Marquee-tag"], {
  opacity: 0,
  interval: 0.1,
  batchMax: 4,
  y: 100,
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: batch,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse", // Đảm bảo hiệu ứng có thể lặp lại khi cuộn qua
    }
  }),
});


// menu humberger
const btn = document.getElementById("menuBtn");
const nav = document.querySelectorAll(".showhide-mobile");
const header = document.getElementById("top");
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
	if (btn.classList.contains("open")) {
		// gsap.set("body", { overflow: "auto" });
		// gsap.set("body", { overflowY: "hidden" });
	} else {
		gsap.fromTo(
			"nav a",
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, delay: 0.15, stagger: 0.15 }
		);
		// gsap.set("body", { overflow: "auto" });
	}
	navs.forEach(function (nav) {
		nav.classList.toggle("flex");
		nav.classList.toggle("hidden");
	});
}
// thumb left/right
