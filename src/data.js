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