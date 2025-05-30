import { closeInventorySlideHandler, inventorySlideHandler } from "./handlers";
import { closeSlideBtn, createProductBtn, manageInventoryBtn, recordForm } from "./selectors";
import { createProductHandler } from "./inventory";
import { addRecordFormHandler } from "./record";

const listener = () => {
    manageInventoryBtn.addEventListener("click", inventorySlideHandler);
    closeSlideBtn.addEventListener("click", closeInventorySlideHandler);
    createProductBtn.addEventListener("click", createProductHandler);
    recordForm.addEventListener("submit", addRecordFormHandler)
}

export default listener;