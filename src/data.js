// variables globales 
let dateOne = 0;
let dateTwo = 0;
// función para seleccionar multiples paises
function searchMutipleCountry() {
  const country = document.frm['country[]'];
  const CountryArray = [];
  for (let i = 0; i < country.length; i++) {
    if (country[i].checked) {
      CountryArray.push(country[i].value);
    }
  }
  return CountryArray;
}
// función para seleccionar una rango de fechas
function searchRangeYear() {
  dateOne = document.frm['date-one'].value;
  dateTwo = document.frm['date-two'].value;
  if (dateOne.value >= dateTwo.value) {
    alert('Rango de fecha inválido');
  }
  return dateOne;
}



//FILTRAR POR INDICADOR
const showResult = () => {
  searchRangeYear();
  let country = searchMutipleCountry();
  country.forEach((element) => {
    let cualquiera = {};
    indicatorsArr=  WORLDBANK[element].indicators;
    console.log(indicatorsArr);
    
    let indicatorNameArr = [];
    indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorName === 'Fuerza laboral con educación intermedia (% del total)');
    console.log(indicatorNameArr);
    console.log(dateOne+dateTwo);
   
    let indicatorDateArr = {};
    indicatorDateArr = indicatorNameArr.filter(populationElement =>
     (populationElement.data[dateTwo]));
    console.log(indicatorDateArr);
    
 
    
  });   
};


const population = (arr) => {
  arr=  WORLDBANK.PER.indicators;
  
  //return populationArr;
};
window.worldbank = {
  showResult,
  population
  
};