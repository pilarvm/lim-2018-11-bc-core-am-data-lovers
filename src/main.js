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
  worldbank.frequentIndicator('SH');
});

// btn-indicador-SG
const btnIndicatorSG = document.getElementById('SG');
btnIndicatorSG.addEventListener('click', () => {
  worldbank.frequentIndicator('SG');
});

// btn-indicador-SP
const btnIndicatorSP = document.getElementById('SP');
btnIndicatorSP.addEventListener('click', () => {
  worldbank.frequentIndicator('SP');
});

// btn-indicador-IC
const btnIndicatorIC = document.getElementById('IC');
btnIndicatorIC.addEventListener('click', () => {
  worldbank.frequentIndicator('IC');
});

// btn-indicador-ICF
const btnIndicatorICF = document.getElementById('ICF');
btnIndicatorICF.addEventListener('click', () => {
  worldbank.frequentIndicator('ICF');
});

// btn-indicador-COV
const btnIndicatorCOV = document.getElementById('COV');
btnIndicatorCOV.addEventListener('click', () => {
  worldbank.frequentIndicator('COV');
});

// Función para pinta caption con rango de años
const addTableCaption = (caption) => {
  worldbank.searchRangeYear();
  const node = document.createElement('H3');              
  const textnode = document.createTextNode(`${caption}, del ${dateOne} al ${dateTwo}`);         
  node.appendChild(textnode);                              
  document.getElementById('caption').appendChild(node); 
};
window.main = {
  addTableCaption
};