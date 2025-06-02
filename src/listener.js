import { closeInventorySlideHandler, inventorySlideHandler } from "./handlers";
import { closeSlideBtn, createProductBtn, manageInventoryBtn, recordForm, recordTable } from "./selectors";
import { createProductHandler } from "./inventory";
import { addRecordFormHandler, recordGroupHandler } from "./record";

const listener = () => {
    manageInventoryBtn.addEventListener("click", inventorySlideHandler);
    closeSlideBtn.addEventListener("click", closeInventorySlideHandler);
    createProductBtn.addEventListener("click", createProductHandler);
    recordForm.addEventListener("submit", addRecordFormHandler);
    recordTable.addEventListener("click", recordGroupHandler);
}

export default listener;