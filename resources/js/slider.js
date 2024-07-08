import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";

const splide = new Splide("#image-slider", {
    type: "loop",
    drag: "free",
    focus: "center",
    pauseOnHover: false,
    arrows: false,
    pauseOnFocus: false,
    perPage: window.innerWidth > 768 ? 6 : 2,
    autoScroll: {
        speed: 1,
    },
});
const testimonials = new Splide("#testimonial-slider", {
    type: "loop",
    drag: "free",
    focus: "center",
    pauseOnHover: false,
    arrows: false,
    pauseOnFocus: false,
    perPage: window.innerWidth > 768 ? 4 : 1,
    autoScroll: {
        speed: 1,
    },
});

splide.mount({ AutoScroll });
testimonials.mount({ AutoScroll });
