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

const swiper = new Swiper('.banner', {
	modules: [Navigation, Pagination],
	pagination: {
		el: ".swiper-pagination",
	},
});