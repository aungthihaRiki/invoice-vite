import {
  newProductTemplate,
  newProductName,
  newProductPrice,
  inventoryItems,
  productSelect,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./states";

export const createProductHandler = () => {
  if (
    newProductName.value.trim() !== "" &&
    newProductPrice.value.trim() !== ""
  ) {
    const productId = `product${uuidv4()}`;
    const name = newProductName.value;
    const price = newProductPrice.valueAsNumber;
    // create product ui
    inventoryItems.append(createProductCard(productId, name, price));

    // push to select
    productSelect.append(new Option(name + " - " + price + "mmk", productId));

    // push to product states
    products.push({
        id: productId,
        name: name,
        price: price
    });
    newProductName.value = null;
    newProductPrice.value = null;

  }
};

export const createProductCard = (id, name, price) => {
  const newProduct = newProductTemplate.content.cloneNode(true);
  newProduct.querySelector(".product-card").id = id;
  newProduct.querySelector(".product-name").innerText = name;
  newProduct.querySelector(".product-price").innerText = price;

  return newProduct;
};

export const productRender = (products) => {
  //  initial Render
    products.forEach(({id, name, price}) => {
        inventoryItems.append(createProductCard(id, name, price));
        productSelect.append(new Option(name + " - " + price + "mmk", id));
    });
}
