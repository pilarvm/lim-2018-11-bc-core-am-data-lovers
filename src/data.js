// variables globales 
let dateOne = 0;
let dateTwo = 0;
// función para seleccionar multiples paises
function searchMutipleCountry() {
  const country = document.frm['country[]'];
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

// const example = () => {
//   return 'example';
// };

// window.example = example;

// //seleccionar pais
// let selectCountry = (country) => {
//   return WORLDBANK.country;
//  };
//  console.log(selectCountry("PER"));
 
 
//  let dateRange = (country,dateInitial,dateEnd) => {
//   //const country="PER";
//   const positionId= 3;
//   const arraicito=[];
//  for( let i = dateInitial; i<=dateEnd; i++){
//   arraicito[i] = WORLDBANK[country].indicators[positionId].data[i];
//  }
//  return arraicito;
//  };
//  console.table(dateRange("CHL",1990,2013));
//  }

//FILTRAR POR INDICADOR

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
