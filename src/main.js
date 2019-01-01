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

// btn-order-desc
const btnOrderDesc = document.getElementById('order-desc');
btnOrderAsc.addEventListener('click', () => {
  worldbank.orderDesc();
});

/* buscar un modo de invocar a todos con un swich o if-else */

// btn-indicador-SH
const btnIndicatorSH = document.getElementById('SH');
btnIndicatorSH.addEventListener('click', () => {
  worldbank.indicatorSH();
});

// btn-indicador-SG
const btnIndicatorSG = document.getElementById('SG');
btnIndicatorSG.addEventListener('click', () => {
  worldbank.indicatorSG();
});

// btn-indicador-SP
const btnIndicatorSP = document.getElementById('SP');
btnIndicatorSP.addEventListener('click', () => {
  worldbank.indicatorSP();
});

// btn-indicador-IC
const btnIndicatorIC = document.getElementById('IC');
btnIndicatorIC.addEventListener('click', () => {
  worldbank.indicatorIC();
});

// btn-indicador-ICF
const btnIndicatorICF = document.getElementById('ICF');
btnIndicatorICF.addEventListener('click', () => {
  worldbank.indicatorICF();
});

// btn-indicador-COV
const btnIndicatorCOV = document.getElementById('COV');
btnIndicatorCOV.addEventListener('click', () => {
  worldbank.indicatorCOV();
});