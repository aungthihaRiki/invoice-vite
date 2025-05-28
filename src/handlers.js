import { inventorySlide } from "./selectors";

export const inventorySlideHandler = () => {
    inventorySlide.classList.toggle("translate-x-full");
    inventorySlide.classList.add("duration-300");
};

export const closeInventorySlideHandler = () => {
       inventorySlide.classList.toggle("translate-x-full");
}
