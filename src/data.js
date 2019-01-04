// variables globales 
/* global WORLDBANK:true */
/* eslint no-undef: "error" */

/* *********** FUNCIONES PARA CREAR TABLAS DINÁMICAS *********** */
// Función para pinta caption con rango de años
// Función para conocer caption de indicators
const indicatiorsCaption = (indicatorsArr, ind) => {
  let indicatorNameArr = [];
  indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorCode === ind);
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



/* *********** FUNCIONES ESPECIALIZADAS *********** */
// Función con forEach 
// const showForEach = (country, dateOne, dateTwo, ind) => {
//   let matrix = [];
//   let nameLimit = 0;
//   country.forEach((element) => {
//     let j = 0;
//     let indicatorDateArr = [];
//     let indicatorResult = [];
//     let indicatorNameArr = [];
//     const indicatorsArr = WORLDBANK[element].indicators;
//     indicatorNameArr = indicatiorsCaption(indicatorsArr, ind);
//     indicatorDateArr = indicatorNameArr[0].data;
//     if (nameLimit === 0) addTableCaption(indicatorNameArr[0].indicatorName);
//     nameLimit++;
//     // console.log(indicatorDateArr);
//     for (let prop in indicatorDateArr) {
//       if (prop >= dateOne && prop <= dateTwo) { // prop hace referencia a la propiedad del objeto (en este caso años)
//         let indDateArrTwoDec = 0;
//         j++; // contador de rango de años (ejem: 2010 a 2012 recorre de 0 a 1 - 2 veces) - debe estar en la parte superior
//         // condicional que combierte los "" string (espacios vacios) en 0 para evitar que toFixed genere error
//         if (typeof(indicatorDateArr[prop]) === 'number') indDateArrTwoDec = indicatorDateArr[prop].toFixed(2);
//         else indDateArrTwoDec = '';
//         newRowTableYearProp(j, indDateArrTwoDec);
//         indicatorResult.push(indDateArrTwoDec);
//       }
//     }
//     // console.log(`esto es push de indicatorResult ${indicatorResult}`);
//     matrix.push(indicatorResult);
//   //   console.log(`esto es matrix (en proceso)  ${matrix}`);
  // });
  // console.log(`esto es matrix (fuera de for): ${matrix}`);
  // console.log (matrix);
// };
// FILTRAR POR INDICADOR
const showResult = () => {
  // let country = searchMutipleCountry();
  // searchRangeYear();
  // newRowTableCountry(country);
  // newRowTableYear(dateOne, dateTwo);
  // showForEach(country, dateOne, dateTwo);
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
const frequentIndicator = (ind) => {
  let country = ['PER', 'CHL', 'MEX', 'BRA'];
  const indicator = ind;
  newRowTableCountry(country);
  newRowTableYear(2017, 2017);
  showForEach(country, 2017, 2017, indicator);
};
window.worldbank = {
  // newRowTableCountry,
  // newRowTableYear,
  // newRowTableYearProp,
  // promResult,
  // orderAsc,
  // orderDesc,
  // frequentIndicator,
  // indicatiorsCaption,
  indicatiorsCaption,
  showResult
};