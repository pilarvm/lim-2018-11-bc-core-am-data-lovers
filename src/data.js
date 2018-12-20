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

  const SearchCountry = [];
  for (let i = 0; i < country.length; i++) {
    if (country[i].checked) {
      SearchCountry.push(country[i].value);
    }
  }
  return SearchCountry;
}
// función para seleccionar una rango de fechas
function searchRangeYear() {
  dateOne = document.frm['date-one'].value;
  dateTwo = document.frm['date-two'].value;
  if (dateOne.value >= dateTwo.value) {
    alert('Rango de fecha inválido');
  }
  return 0;
}
//FILTRAR POR INDICADOR

const showResult = () => {
    searchRangeYear();
    const country=searchMutipleCountry();
    let newArr=[];
    for(let i = 0; i <= country.length; i++){
        const textIndicatorName="Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)";
        let pais = country[i];
        // console.log(country[i]);
        newArr.push(Object.assign({}, WORLDBANK[pais].indicators, {}));
        console.log(newArr);
    //    const selectIndicator = indi.filter(indi => indi.indicatorName === textIndicatorName);
    //    console.table(selectIndicator);
    }
}
window.WORLDBANK = {
    showResult,
};



// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



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

// const indi=WORLDBANK.PER.indicators;
// const textindicatorCode='SL.TLF.PART.FE.ZS';
// const iniDate=1990;
// const lastDate=2010;


// const selectIndicator = indi
// .filter(indi => indi.indicatorCode === textindicatorCode);

// console.log(selectIndicator);

// const selectIndicator = indi
// .filter(indi => indi.indicatorCode === textindicatorCode);

// console.log(selectIndicator);
