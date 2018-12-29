// variables globales 
let dateOne = 0;
let dateTwo = 0;
let contador =0;
/* global WORLDBANK:true */
/* eslint no-undef: "error" */

// Funciones para crear tablas dinámicas

const addTableCaption = (caption) => {
let node = document.createElement("H3");              
let textnode = document.createTextNode(caption+'Años '+dateOne+' '+dateTwo);         
node.appendChild(textnode);                              
document.getElementById("caption").appendChild(node); 
}

const newRowTableCountry = (country) => {
  let nameTable = document.getElementById('table_result');
  let row = nameTable.insertRow(0);
  let countryArr = country.slice(0);
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


const promResult = (array) =>{
  let sum = array.reduce((previous, current) => current += previous);
  let avg = sum / array.length;
console.log(avg);

}
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
  let matrix=[];
  searchRangeYear();
  let country = searchMutipleCountry();
  newRowTableCountry(country);
  newRowTableYear(dateOne, dateTwo);
  
  country.forEach((element) => {
    const indicatorsArr = WORLDBANK[element].indicators;
    let goThroughRight = 0;
    let j = 0;
    let indicatorResult=[];
    goThroughRight--;
    let indicatorNameArr = [];
    
    indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorCode === indicator());
    if (contador==0) addTableCaption(indicatorNameArr[0].indicatorName);
    contador++;
    let indicatorDateArr = [];
    indicatorDateArr = indicatorNameArr[0].data;
  
    for (let prop in indicatorDateArr) {
      
      if (prop >= dateOne && prop <= dateTwo) {
        j++;
        newRowTableYearProp(goThroughRight, j, indicatorDateArr[prop].toFixed(2));
        indicatorResult.push(indicatorDateArr[prop].toFixed(2));
        
      }
    }
  console.log(indicatorResult);
  promResult(indicatorResult);
matrix.push(indicatorResult);
console.log(matrix);
  });
    
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
  showResult
  
};