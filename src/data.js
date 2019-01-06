// variables globales 
/* global WORLDBANK:true */
/* eslint no-undef: "error" */




/* *********** FUNCIONES PARA CREAR TABLAS DINÁMICAS *********** */
// Función para conocer caption de indicators

const indicatiorsCaption = (indicatorsArr,ind) => {
  // indicatorsArr = WORLDBANK[element].indicators;
  let indicatorNameArr = [];
  indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorCode === ind);
  return indicatorNameArr;
};
// // Función que retorna fila de paises seleccionados
// const newRowTableCountry = (country) => {
//   let nameTable = document.getElementById('table_result');
//   let row = nameTable.insertRow(0);
//   let countryArr = country.slice(0);
//   countryArr.unshift('Año');
//   for (let i = 0; i < countryArr.length; i++) row.insertCell(i).innerHTML = countryArr[i];
// };





/* *********** FUNCIONES ESPECIALIZADAS *********** */
// Función con forEach 
const showResult = (country, arrYear, ind) => {
  let matrix = [];
  // let nameLimit = 0;
  country.forEach((element) => {
    let j = 0;
    let indicatorDateArr = [];
    let indicatorResult = [];
    let indicatorNameArr = [];
    const indicatorsArr = WORLDBANK[element].indicators;
    console.log(indicator)
    indicatorNameArr = indicatiorsCaption(indicatorsArr, ind);
    indicatorDateArr = indicatorNameArr[0].data;
    // if (nameLimit === 0) addTableCaption(indicatorNameArr[0].indicatorName);
    // nameLimit++;
    // console.log(indicatorDateArr);
    for (let prop in indicatorDateArr) {
      if (prop >= arrYear[0] && prop <= arrYear[1]) { // prop hace referencia a la propiedad del objeto (en este caso años)
        let indDateArrTwoDec = 0;
        j++; // contador de rango de años (ejem: 2010 a 2012 recorre de 0 a 1 - 2 veces) - debe estar en la parte superior
        // condicional que combierte los "" string (espacios vacios) en 0 para evitar que toFixed genere error
        if (typeof (indicatorDateArr[prop]) === 'number') indDateArrTwoDec = indicatorDateArr[prop].toFixed(2);
        else indDateArrTwoDec = '';
        // newRowTableYearProp(j, indDateArrTwoDec);
        indicatorResult.push(indDateArrTwoDec);
      }
    }
    matrix.push(indicatorResult);
  });

  return matrix;
};

// Función para promedio
const promResult = (array) => {
  let prom = [];
  array.forEach(element => {
    let sum = element.reduce((previous, current) => {return (parseInt(previous) + parseInt(current))},0);
    let avg = sum / element.length;
    prom.push(avg.toFixed(2));    
  });
  return prom;
};








// Función para ordenar Ascendentemente
const orderAsc = (matriz) => {
  let reversed=[];
  console.log(matriz);
  let matriz1 =[...matriz];
  console.log(matriz1);
  for (let i = 0; i < matriz1.length; i++) {
    reversed.push(matriz1[i].reverse());
  }
  return reversed;
  // una vez que rotorne ma matriz adecuada se ordenara de modos ASC
};

// Función para ordenar Ascendentemente
const orderDesc = () => {
  let matriz = showResult();
  alert(matriz);
  // una vez que rotorne ma matriz adecuada se ordenara de modos DESC
};
// const frequentIndicator = (ind) => {
//   let country = ['PER', 'CHL', 'MEX', 'BRA'];
//   const indicator = ind;
//   newRowTableCountry(country);
//   newRowTableYear(2017, 2017);
//   showForEach(country, 2017, 2017, indicator);
// };
window.worldbank = {
  // newRowTableCountry,
  // newRowTableYear,
  // newRowTableYearProp,
  // promResult,
  orderAsc,
  // orderDesc,
  // frequentIndicator,
  // indicatiorsCaption,
  indicatiorsCaption,
  showResult
};