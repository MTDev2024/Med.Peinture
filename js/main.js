import { initMenu } from "./menu.js";
import { initTestimonials } from "./testimonials.js";
import { initForm } from "./form.js";
import { initScroll } from "./scroll.js";

const mobileMenu = initMenu();
initTestimonials();
initForm();
initScroll(mobileMenu);
