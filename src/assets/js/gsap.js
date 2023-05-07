// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray("section");
gsap.set(sections, { opacity: 0 });

sections.forEach((section) => {
	ScrollTrigger.create({
		trigger: section,
		start: "top center",
		end: "bottom center",

		onEnter: () => {
			gsap.to(section, { opacity: 1 });
			//   video.play();
		},
		// onEnterBack: () => (section, { opacity: 0 }),
		// onLeave: () => (section, { opacity: 0 }),
		// onLeaveBack: () => (section, { opacity: 0 }),
	});
});
// usage:
// usage:
ScrollTrigger.batch([".card", ".item", ".Marquee-tag"], {
	interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
	batchMax: 4, // maximum batch size (targets)
	onEnter: (batch) =>
		gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
	onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
	onEnterBack: (batch) =>
		gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
	onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
	// you can also define things like start, end, etc.
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
