import {
  newRecordTemplate,
  recordForm,
  recordNet,
  recordTable,
  recordTax,
  recordTotal,
} from "./selectors";
import { products } from "./states";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const addRecordFormHandler = (event) => {
  event.preventDefault();
  console.log("Add Record");
  // get formdata
  const formData = new FormData(recordForm);
  const productIdForm = formData.get("product_select");
  const productQuantityForm = parseInt(formData.get("product_quantity"));

  // find from products states
  const currentProduct = products.find(({ id }) => id == productIdForm);

  // add to record table UI
  recordTable.append(addRecordRow(currentProduct, productQuantityForm));

  updateCalculation();

  // clear form input
  recordForm.reset();
};

export const addRecordRow = ({ id, name, price }, quantity) => {
  const record = newRecordTemplate.content.cloneNode(true);
  const productName = record.querySelector(".record-name");
  const productPrice = record.querySelector(".record-price");
  const productQuantity = record.querySelector(".record-quantity");
  const productCost = record.querySelector(".record-cost");
  const currentRow = record.querySelector(".record-row");

  currentRow.setAttribute("product-id", id);
  currentRow.setAttribute("id", `record${uuidv4()}`);

  productName.innerText = name;
  productPrice.innerText = price;
  productQuantity.innerText = quantity;
  productCost.innerText = price * quantity;

  return record;
};

const calculateTax = (total, percentage = 5) => (total / 100) * percentage;

const calculateCostTotal = () => {
  let total = 0;
  recordTable.querySelectorAll(".record-cost").forEach((e) => {
    total += parseFloat(e.innerText);
  });
  return total;
};

const recordRemove = (recordId) => {
  Swal.fire({
    title: "Are you sure to delete this?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      recordTable.querySelector(`#${recordId}`).remove();
      updateCalculation();
      Swal.fire({
        title: "Deleted!",
        text: "Your record has been deleted.",
        icon: "success",
      });
    }
  });
};

export const recordGroupHandler = (e) => {
  // remove target row
  if (e.target.classList.contains("record-remove-btn")) {
    const record = e.target.closest(".record-row");
    recordRemove(record.id);
  }
  // console.log("Remove");
};

const updateCalculation = () => {
  const total = calculateCostTotal();
  const tax = calculateTax(total);
  const netAmount = total + tax;

  recordTotal.innerText = `${total} mmk`;
  recordTax.innerText = `${tax} mmk`;
  recordNet.innerText = `${netAmount} mmk`;
};
