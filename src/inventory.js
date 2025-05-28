import { newProductTemplate, newProductName, newProductPrice, inventoryItems } from "./selectors";
import { v4 as uuidv4 } from 'uuid';

export const createProductHandler = () => {
    if(newProductName.value.trim() !== "" && newProductPrice.value.trim() !== ""){
        inventoryItems.append(createProduct(newProductName.value, newProductPrice.valueAsNumber));
        newProductName.value = null;
        newProductPrice.value = null;
    }
}

export const createProduct = (name, price) => {
const newProduct =  newProductTemplate.content.cloneNode(true);
    newProduct.querySelector(".product").id = `product${uuidv4()}`;
    newProduct.querySelector(".product-name").innerText = name;
    newProduct.querySelector(".product-price").innerText = price;
    return newProduct;
}
