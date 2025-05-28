import { inventorySlideHandler } from "./handlers";
import { manageInventoryBtn } from "./selectors";

const listener = () => {
    manageInventoryBtn.addEventListener("click", inventorySlideHandler);
}

export default listener;