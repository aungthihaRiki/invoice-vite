import {
  newProductTemplate,
  newProductName,
  newProductPrice,
  inventoryItems,
  productSelect,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";

export const createProductHandler = () => {
  if (
    newProductName.value.trim() !== "" &&
    newProductPrice.value.trim() !== ""
  ) {
    const productId = `product${uuidv4()}`;
    const name = newProductName.value;
    const price = newProductPrice.valueAsNumber;
    inventoryItems.append(createProduct(productId, name, price));

    productSelect.append(new Option(name, productId));
    newProductName.value = null;
    newProductPrice.value = null;
  }
};

export const createProduct = (id, name, price) => {
  const newProduct = newProductTemplate.content.cloneNode(true);
  newProduct.querySelector(".product").id = id;
  newProduct.querySelector(".product-name").innerText = name;
  newProduct.querySelector(".product-price").innerText = price;

  return newProduct;
};
