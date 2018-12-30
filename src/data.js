// variables globales 
let dateOne = 0;
let dateTwo = 0;
/* global WORLDBANK:true */
/* eslint no-undef: "error" */

// Funciones para crear tablas dinámicas

const addTableCaption = (caption) => {
  const node = document.createElement('H3');              
  const textnode = document.createTextNode(`${caption}, del ${dateOne} al ${dateTwo}`);         
  node.appendChild(textnode);                              
  document.getElementById('caption').appendChild(node); 
};

const newRowTableCountry = (country) => {
  let nameTable = document.getElementById('table_result');
  let row = nameTable.insertRow(0);
  let countryArr = country.slice(0);
  countryArr.unshift('Año');
  for (let i = 0; i < countryArr.length; i++) row.insertCell(i).innerHTML = countryArr[i];
};

const newRowTableYear = (dateOne, dateTwo) => {
  let nameTable = document.getElementById('table_result');
  for (let i = dateTwo; i >= dateOne; i--) {
    let row = nameTable.insertRow(0 + 1);
    row.insertCell(0).innerHTML = i;
  }
};

const newRowTableYearProp = (j, prop) => {
  let row = document.getElementsByTagName('tr')[j];
  let x = row.insertCell(-1);
  x.innerHTML = prop;
};

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


// const promResult = (array) =>{
//   let sum = array.reduce((previous, current) => current += previous);
//   let avg = sum / array.length;
// console.log(avg);

// }
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
const indicator = () => {
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
  return indicator;
};

// FILTRAR POR INDICADOR
const showResult = () => {
  let contador = 0;
  let matrix = [];
  let country = searchMutipleCountry();
  searchRangeYear();
  newRowTableCountry(country);
  newRowTableYear(dateOne, dateTwo);
  let indicatorNameArr = [];
  country.forEach((element) => {
    let j = 0;
    let indicatorResult = [];
    const indicatorsArr = WORLDBANK[element].indicators;
    indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorCode === indicator());
    if (contador === 0) addTableCaption(indicatorNameArr[0].indicatorName);
    contador++;
    let indicatorDateArr = [];
    indicatorDateArr = indicatorNameArr[0].data;
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
    console.log(`esto es push de indicatorResult ${indicatorResult}`);
    matrix.push(indicatorResult);
    // let m = 0;
    // if (m<country.length) {
    //   m++;
    //   matrix[h, m] = indicatorResult;
    console.log(`esto es matrix (en proceso)  ${matrix}`);
    // }
    // console.log(h);
    // indicatorResult.slice(0);
    // indicatorResultForCountry = indicatorResult.slice(2);
    // promResult(indicatorResult);
    // matrix.push(indicatorResultForCountry);
    // contMatrizGo++;
  });
  // console.log('esto es matrix ' + matrix.slice(2));
  // console.log(`${indicatorResult.length} / ${country.length}`);
  // for (let n = 0; n < (indicatorResult.length / country.length); n++) {
  //   matrix [n] =[];
  //   for(let m = 0; m<country.length; m++) {
  //     console.log(`esto es n: ${n} y esto es m: ${m}`);
  //     console.log(`esto es push matrix: ${matrix[n][m] = indicatorResult}`);
  //   } 
  // }
  console.log(`esto es matrix (fuera de for): ${matrix}`);
  // matrix.push(indicatorResult);    
  return matrix; 
};
const orderAsc = () => {
  let matriz = showResult();
  alert(matriz);
  // una vez que rotorne ma matriz adecuada se ordenara de modos ASC y DESC
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
  orderAsc,
  showResult
};