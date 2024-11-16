// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.set([".card", ".item", ".Marquee-tag"], {y: 20, autoAlpha: 0,});
// Sử dụng ScrollTrigger.batch để xử lý nhiều phần tử cùng một lúc
ScrollTrigger.batch([".card", ".item", ".Marquee-tag"], {

  interval: 0.1,
  batchMax: 6,  // Số lượng phần tử tối đa được xử lý cùng lúc
  onEnter: batch => gsap.to(batch, {
    autoAlpha: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: batch, // Sử dụng batch như trigger
      start: "top 90%",  // Khi phần tử đầu tiên của batch chạm tới center của viewport
      end: "bottom 10%", // Khi phần tử cuối cùng trong batch đi qua center của viewport
      toggleActions: "play none none reverse", // Đảm bảo hiệu ứng lặp lại khi cuộn lên và xuống
    }
  }),
});


// Chọn tất cả các phần tử có class '.my-class-1', '.my-class-2', '.my-class-3', ...
// gsap.utils.batch(['.card", ".item", ".Marquee-tag'], (elements) => {
//   gsap.fromTo(
//     elements,
//     {
//       opacity: 0,
//       y: 100,
//     },
//     {
//       opacity: 1,
//       y: 0,
//       scrollTrigger: {
//         trigger: elements, // Các phần tử này sẽ là trigger
//         start: 'top 90%',   // Bắt đầu khi phần tử cách 2% từ trên cùng
//         end: 'top 10%',     // Kết thúc khi phần tử đi qua điểm 10% từ trên
//         scrub: true,        // Đồng bộ hiệu ứng với cuộn chuột
//         markers: false,     // Tắt markers (có thể bật khi debug)
//         toggleActions: 'restart pause resume reverse', // Lặp lại hiệu ứng khi cuộn lên hoặc xuống
//       }
//     }
//   );
// });


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
