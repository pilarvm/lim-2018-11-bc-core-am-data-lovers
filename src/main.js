/* global worldbank:true */
/* eslint no-undef: "error" */
// btn-submit
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
  worldbank.showResult();
});
// btn-order-asc
const btnOrderAsc = document.getElementById('order-asc');
btnOrderAsc.addEventListener('click', () => {
  worldbank.orderAsc();
});