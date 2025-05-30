import { newRecordTemplate, recordForm, recordTable } from "./selectors";
import { products } from "./states";

export const addRecordFormHandler = (event) => {
    event.preventDefault();
    console.log("Add Record");
    // get formdata
    const formData = new FormData(recordForm);
    const productIdForm = formData.get("product_select");
    const productQuantityForm = parseInt(formData.get("product_quantity"));

    // find from products states 
    const currentProduct = products.find(({id}) => id == productIdForm);

    // add to record table UI
    recordTable.append(addRecordRow(currentProduct, productQuantityForm))

    // clear form input
    formData.reset();
}

export const addRecordRow = ({id, name , price}, quantity) => {
    const record = newRecordTemplate.content.cloneNode(true);
    const productName = record.querySelector(".record-name");
    const productPrice = record.querySelector(".record-price");
    const productQuantity = record.querySelector(".record-quantity");
    const productCost = record.querySelector(".record-cost");
    const currentRow = record.querySelector(".record-row");

    currentRow.setAttribute("product-id", id);

    productName.innerText = name;
    productPrice.innerText = price;
    productQuantity.innerText = quantity;
    productCost.innerText = price * quantity;

    return record;
}