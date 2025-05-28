import { inventorySlide } from "./selectors";

export const inventorySlideHandler = () => {
    inventorySlide.classList.toggle("translate-x-full");
};
