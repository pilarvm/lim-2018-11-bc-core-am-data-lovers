// variables globales 
let dateOne = 0;
let dateTwo = 0;
/* global WORLDBANK:true */
/* eslint no-undef: "error" */

/* *********** FUNCIONES PARA CREAR TABLAS DINÁMICAS *********** */

// Función para pinta caption con rango de años
const addTableCaption = (caption) => {
  const node = document.createElement('H3');              
  const textnode = document.createTextNode(`${caption}, del ${dateOne} al ${dateTwo}`);         
  node.appendChild(textnode);                              
  document.getElementById('caption').appendChild(node); 
};
// Función para conocer caption de indicators
const indicatiorsCaption = (indicatorsArr, ind) => {
  let nameLimit = 0;
  let indicatorNameArr = [];
  indicatorNameArr = indicatorsArr.filter(populationElement => (populationElement.indicatorCode === indicator(ind) && populationElement.countryCode === 'PER'));
  if (nameLimit === 0)addTableCaption(indicatorNameArr[0].indicatorName);
  nameLimit++;
  return indicatorNameArr;
};
// Función que retorna fila de paises seleccionados
const newRowTableCountry = (country) => {
  let nameTable = document.getElementById('table_result');
  let row = nameTable.insertRow(0);
  let countryArr = country.slice(0);
  countryArr.unshift('Año');
  for (let i = 0; i < countryArr.length; i++) row.insertCell(i).innerHTML = countryArr[i];
};
// Función que retorna columna de años seleccionados
const newRowTableYear = (dateOne, dateTwo) => {
  let nameTable = document.getElementById('table_result');
  for (let i = dateTwo; i >= dateOne; i--) {
    let row = nameTable.insertRow(0 + 1);
    row.insertCell(0).innerHTML = i;
  }
};
// Función que retorna los resultdos segun pais y año seleccionado
const newRowTableYearProp = (j, prop) => {
  let row = document.getElementsByTagName('tr')[j];
  let x = row.insertCell(-1);
  x.innerHTML = prop;
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
  dateOne = document.frm['date-one'].value;
  dateTwo = document.frm['date-two'].value;
  if (dateOne.value >= dateTwo.value) return alert('Rango de fecha inválido');
  else return dateOne, dateTwo;
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

/* *********** FUNCIONES ESPECIALIZADAS *********** */
// Función con forEach 
const showForEach = (country, dateOne, dateTwo, ind) => {
  let matrix = [];
  country.forEach((element) => {
    let j = 0;
    let indicatorDateArr = [];
    let indicatorResult = [];
    let indicatorNameArr = [];
    const indicatorsArr = WORLDBANK[element].indicators;
    indicatorNameArr = indicatiorsCaption(indicatorsArr, ind);
    indicatorDateArr = indicatorNameArr[0].data;
    // console.log(indicatorDateArr);
    for (let prop in indicatorDateArr) {
      if (prop >= dateOne && prop <= dateTwo) { // prop hace referencia a la propiedad del objeto (en este caso años)
        let indDateArrTwoDec = 0;
        j++; // contador de rango de años (ejem: 2010 a 2012 recorre de 0 a 1 - 2 veces) - debe estar en la parte superior
        // condicional que combierte los "" string (espacios vacios) en 0 para evitar que toFixed genere error
        if (typeof(indicatorDateArr[prop]) === 'number') indDateArrTwoDec = indicatorDateArr[prop].toFixed(2);
        else indDateArrTwoDec = 0;
        newRowTableYearProp(j, indDateArrTwoDec);
        indicatorResult.push(indDateArrTwoDec);
      }
    }
    // console.log(`esto es push de indicatorResult ${indicatorResult}`);
    matrix.push(indicatorResult);
  //   console.log(`esto es matrix (en proceso)  ${matrix}`);
  });
  // console.log(`esto es matrix (fuera de for): ${matrix}`);
  return matrix;
};
// FILTRAR POR INDICADOR
const showResult = () => {
  let country = searchMutipleCountry();
  searchRangeYear();
  newRowTableCountry(country);
  newRowTableYear(dateOne, dateTwo);
  showForEach(country, dateOne, dateTwo);
};

// Función para promedio EN PROCESO
const promResult = (array) => {
  let sum = array.reduce((previous, current) => current += previous);
  let avg = sum / array.length;
  console.log(avg);
};
// Función para ordenar Ascendentemente
const orderAsc = () => {
  let matriz = showResult();
  alert(matriz);
  // una vez que rotorne ma matriz adecuada se ordenara de modos ASC
};

// Función para ordenar Ascendentemente
const orderDesc = () => {
  let matriz = showResult();
  alert(matriz);
  // una vez que rotorne ma matriz adecuada se ordenara de modos DESC
};
const indicatorSH = () => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = 'SH';
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
const indicatorSG = () => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = 'SG';
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
const indicatorSP = () => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = 'SP';
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
const indicatorIC = () => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = 'IC';
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
const indicatorICF = () => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = 'ICF';
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
const indicatorCOV = () => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = 'COV';
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
window.worldbank = {
  newRowTableCountry,
  newRowTableYear,
  newRowTableYearProp,
  searchMutipleCountry,
  searchRangeYear,
  searchIndicator,
  searchSex,
  indicator,
  promResult,
  orderAsc,
  orderDesc,
  indicatorSH,
  indicatorSG,
  indicatorSP,
  indicatorIC,
  indicatorICF,
  indicatorCOV,
  showResult
};