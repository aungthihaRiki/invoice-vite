import { productRender } from "./inventory";
import { inventorySlide } from "./selectors";
import { products } from "./states";

const initialRender = () => {
    console.log("Initial Render");
    inventorySlide.classList.remove("translate-x-full");
    productRender(products);
}

export default initialRender;