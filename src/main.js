/* global worldbank:true */
/* eslint no-undef: "error" */
// let dateOne = 0;
// let dateTwo = 0;


// btn-submit
const btnSubmit = document.getElementById('btn-submit');
let btnIndex = document.getElementById('btn-index');
let btnSearch = document.getElementById('btn-search');

btnSubmit.addEventListener('click', () => {
  searchRangeYear();
  searchMutipleCountry();
  indicator();

  worldbank.showResult();
  
console.log(searchMutipleCountry());
console.log(indicator());
console.log(searchRangeYear());
  // addTableCaption();
});

let addTableCaption = (indi) => {
  const dateRange = searchRangeYear();
  indicator(indi);
  
  let caption = worldbank.indicatiorsCaption();
  const node = document.createElement('H3');              
  const textnode = document.createTextNode(`${caption}, del ${dateRange[0]} al ${dateRange[1]}`);         
  node.appendChild(textnode);                              
  document.getElementById('caption').appendChild(node); 
};



/* *********** FUNCIONES PARA MENÚ DE BÚSQUEDA *********** */
// función para seleccionar multiples paises
const searchMutipleCountry = () => {
  const country = document.frm['country[]'];
  const CountryArray = [];
  for (let i = 0; i < country.length; i++) 
    if (country[i].checked) CountryArray.push(country[i].value);
    // else return alert('Debe selecionar al menos 1 país');
  return CountryArray;
};
// función para seleccionar una rango de fechas
const searchRangeYear = () => {
  const dateRange = [document.frm['date-one'].value, document.frm['date-two'].value];
  if (dateRange[0].value >= dateRange[1].value) return alert('Rango de fecha inválido');
  else return dateRange;
};
// función para conocer indicador deseado
const searchIndicator = () => {
  let indicat = document.frm['category[]'];
  let IndicatorString = '';
  for (let i = 0; i < indicat.length; i++) 
    if (indicat[i].checked) IndicatorString = indicat[i].value;
    // else return 'Debe selecionar 1 categoría';
  return IndicatorString;
};
// función para conocer genero seleccionado
const searchSex = () => {
  let sexArr = document.frm['sex[]'];
  let sexString = '';
  for (let i = 0; i < sexArr.length; i++)
    if (sexArr[i].checked) sexString = sexArr[i].value;
    // else return 'Debe selecionar 1 genero';
  return sexString;
};
// función para identificar indicador específico (según sexo)
const indicator = (ind) => {
  let indicator = '';
  const IndicatorString = searchIndicator();
  const sexString = searchSex();
  if (IndicatorString === 'SL.TLF.BASC.ZS' && sexString === 'FE') indicator = 'SL.TLF.BASC.FE.ZS';
  else if (IndicatorString === 'SL.TLF.BASC.ZS' && sexString === 'MA') indicator = 'SL.TLF.BASC.MA.ZS';
  else if (IndicatorString === 'SL.TLF.INTM.ZS' && sexString === 'FE') indicator = 'SL.TLF.INTM.FE.ZS';
  else if (IndicatorString === 'SL.TLF.INTM.ZS' && sexString === 'MA') indicator = 'SL.TLF.INTM.MA.ZS';
  else if (IndicatorString === 'SL.TLF.ADVN.ZS' && sexString === 'FE') indicator = 'SL.TLF.ADVN.FE.ZS';
  else if (IndicatorString === 'SL.TLF.ADVN.ZS' && sexString === 'MA') indicator = 'SL.TLF.ADVN.MA.ZS';
  else if (IndicatorString === 'SL.TLF.ACTI.ZS' && sexString === 'FE') indicator = 'SL.TLF.ACTI.FE.ZS';
  else if (IndicatorString === 'SL.TLF.ACTI.ZS' && sexString === 'MA') indicator = 'SL.TLF.ACTI.MA.ZS';
  else if (ind === 'SH') indicator = 'SH.ANM.ALLW.ZS';
  else if (ind === 'SG') indicator = 'SG.VAW.REAS.ZS';
  else if (ind === 'SP') indicator = 'SP.POP.TOTL.FE.ZS';
  else if (ind === 'IC') indicator = 'IC.REG.DURS.FE';
  else if (ind === 'ICF') indicator = 'IC.FRM.FEMM.ZS';
  else if (ind === 'COV') indicator = 'per_allsp.cov_pop';
  return indicator;
};

const hidenDiv = (div1, div2) => {
  document.getElementById(div1).style.display = 'block';
  document.getElementById(div2).style.display = 'none';
};

btnIndex.addEventListener('click', () => {
  hidenDiv('index', 'search');
});

btnSearch.addEventListener('click', () => {
  hidenDiv('search', 'index');
});

// Creamos un array vacio
let ElementClick = '';
// Capturamos el click y lo pasamos a una funcion
document.onclick = captureClick;
function captureClick(element) {
  // Funcion para capturar el click del raton
  let click;
  if (element !== null) {
    // Si ha hecho click sobre un destino, lo leemos
    click = element.target;
  }
  // Añadimos el elemento al array de elementos
  ElementClick = click;
  // Una prueba con salida en consola
  switch(ElementClick.id) {
    case 'SH':
    addTableCaption(ElementClick.id);
     break;
    case 'SG':
    indicator('SG');
    break;
    case 'SP':
    indicator('SP');
    break;
    case 'IC':
    indicator('IC');    
    break;
    case 'ICF':
    indicator('ICF');
    break;
    case 'COV':
    indicator('COV');
    break;
    // default:
    //   alert('selección invalida');
  }
}

// // btn-order-asc
// const btnOrderAsc = document.getElementById('order-asc');
// btnOrderAsc.addEventListener('click', () => {
//   worldbank.orderAsc();
// });

// // btn-order-desc
// const btnOrderDesc = document.getElementById('order-desc');
// btnOrderAsc.addEventListener('click', () => {
//   worldbank.orderDesc();
// });



// // Función para pinta caption con rango de años
// const addTableCaption = (caption) => {
//   worldbank.searchRangeYear();
//   const node = document.createElement('H3');              
//   const textnode = document.createTextNode(`${caption}, del ${dateOne} al ${dateTwo}`);         
//   node.appendChild(textnode);                              
//   document.getElementById('caption').appendChild(node); 
// };
