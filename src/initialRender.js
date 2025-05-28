import { inventorySlide } from "./selectors";

const initialRender = () => {
    console.log("Initial Render");
    inventorySlide.classList.remove("translate-x-full");
}

export default initialRender;