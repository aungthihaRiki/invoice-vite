import { closeInventorySlideHandler, inventorySlideHandler } from "./handlers";
import { closeSlideBtn, manageInventoryBtn } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener("click", inventorySlideHandler);
    closeSlideBtn.addEventListener("click", closeInventorySlideHandler);
}

export default listener;