// core version + navigation, pagination modules:
import Swiper, {
	Navigation,
	Pagination,
	// Grid
} from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/grid";

const swiper = new Swiper(".banner", {
	modules: [Navigation, Pagination],
	pagination: {
		el: ".swiper-pagination",
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
const swiper2 = new Swiper(".roomSwiper", {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	spaceBetween: 20,
	slidesPerGroup: 1,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1280: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
	},
	pagination: {
		el: ".swiper-pagination",
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
const swiper3 = new Swiper(".tourSwiper", {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	spaceBetween: 20,
	slidesPerGroup: 1,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1280: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
	},
	pagination: {
		el: ".swiper-pagination",
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
