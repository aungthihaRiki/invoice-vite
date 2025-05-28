import { closeInventorySlideHandler, inventorySlideHandler } from "./handlers";
import { closeSlideBtn, createProductBtn, manageInventoryBtn } from "./selectors";
import { createProductHandler } from "./inventory";

const listener = () => {
    manageInventoryBtn.addEventListener("click", inventorySlideHandler);
    closeSlideBtn.addEventListener("click", closeInventorySlideHandler);
    createProductBtn.addEventListener("click", createProductHandler);
}

export default listener;