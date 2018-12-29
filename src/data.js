// variables globales 
let dateOne = 0;
let dateTwo = 0;
/* global WORLDBANK:true */
/* eslint no-undef: "error" */

// Funciones para crear tablas dinámicas

const newRowTableCountry = (country) => {
  let nameTable = document.getElementById('table_result');
  let row = nameTable.insertRow(0);
  let countryArr = country;
  countryArr.unshift('Año');
  for (let i = 0; i < countryArr.length; i++) {
    row.insertCell(i).innerHTML = countryArr[i];
  }
};

const newRowTableYear = (dateOne, dateTwo) => {
  let nameTable = document.getElementById('table_result');
  for (let i = dateTwo; i >= dateOne; i--) {
    let row = nameTable.insertRow(0 + 1);
    row.insertCell(0).innerHTML = i;
  }
};

const newRowTableYearProp = (goThroughRight, j, prop) => {
  let row = document.getElementsByTagName('tr')[j];
  let x = row.insertCell(goThroughRight);
  x.innerHTML = prop;
};

// función para seleccionar multiples paises
const searchMutipleCountry = () => {
  const country = document.frm['country[]'];
  const CountryArray = [];
  for (let i = 0; i < country.length; i++) if (country[i].checked) CountryArray.push(country[i].value);
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
  for (let i = 0; i < indicat.length; i++) {
    if (indicat[i].checked) {
      IndicatorString = indicat[i].value;
    }
  }
  return IndicatorString;
};

// función para conocer genero seleccionado
const searchSex = () => {
  let sexArr = document.frm['sex[]'];

  let sexString = '';
  for (let i = 0; i < sexArr.length; i++) {
    if (sexArr[i].checked) {
      sexString = sexArr[i].value;
    }
  }
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
  const arrOrder = [];
  searchRangeYear();
  let country = searchMutipleCountry();
  newRowTableCountry(country);
  newRowTableYear(dateOne, dateTwo);
  country.shift();
  country.forEach((element) => {
    const indicatorsArr = WORLDBANK[element].indicators;
    let goThroughRight = 0;
    let j = 0;
    goThroughRight--;
    let indicatorNameArr = [];
    indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorCode === indicator());
    let indicatorDateArr = [];
    indicatorDateArr = indicatorNameArr[0].data;
    for (let prop in indicatorDateArr) {
      if (prop >= dateOne && prop <= dateTwo) {
        j++;
        newRowTableYearProp(goThroughRight, j, indicatorDateArr[prop]);
      }
      arrOrder.push(indicatorDateArr[prop]);
    }
    return arrOrder;
  });
  console.log(arrOrder);
};
// Ordenar Asc
const orderAsc = () => {
  const arrOrderAsc = showResult();
  const newArrOrderAsc = [];
  for (let i = 0; i <= arrOrderAsc.length; i++) {
    console.log(arrOrderAsc[i]);
    arrOrderAsc[i].sort(function(comparetionOne, comparetionTwo) {
      newArrOrderAsc.push(comparetionOne - comparetionTwo);
    });
  }
  console.log(newArrOrderAsc);
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
  showResult,
  orderAsc  
};