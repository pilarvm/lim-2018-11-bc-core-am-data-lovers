// btn-submit
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
/* global worldbank:true */
/* eslint no-undef: "error" */
  worldbank.showResult();
});