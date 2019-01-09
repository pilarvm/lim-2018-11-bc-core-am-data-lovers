/* global worldbank:true */
/* eslint no-undef: "error" */
let matrix=[];
let dateRange=[];

// btn-submit
const btnSubmit = document.getElementById('btn-submit');
let btnIndex = document.getElementById('btn-index');
let btnSearch = document.getElementById('btn-search');
btnSubmit.addEventListener('click', () => {
   matrix = worldbank.showResult(searchMutipleCountry(), searchRangeYear(), indicator());
  generaTabla(matrix, 'des');
  generateSumaryTable(promResult(matrix),searchMutipleCountry())
 
});

const generateSumaryTable = (prom,arrCountry)=>{


  const bodyProm = document.getElementsByTagName('body')[0];
  const tablaProm   = document.createElement('TABLE');
  const node = document.createElement('CAPTION');
  const textnode = document.createTextNode(`Promedio por paises`);         
  node.appendChild(textnode);  
  const tblBodyProm = document.createElement('TBODY');
  const hileraProm = document.createElement('tr');
  arrCountry.forEach(element => {
    const celdaProm = document.createElement('th');
    let textoCeldaProm = document.createTextNode(element);
    celdaProm.appendChild(textoCeldaProm);
    hileraProm.appendChild(celdaProm);
    // document.getElementById('prom').innerHTML =`${element} `;  
  });
  const hileraProm1 = document.createElement('tr');
  prom.forEach(element => {
    const celdaProm = document.createElement('td');
    let textoCeldaProm = document.createTextNode(element);
    celdaProm.appendChild(textoCeldaProm);
    hileraProm1.appendChild(celdaProm);
  // document.getElementById('prom').innerHTML =`${element} `;  
  });
  tblBodyProm.appendChild(hileraProm);
  tblBodyProm.appendChild(hileraProm1);
  
    // posiciona el <tbody> debajo del elemento <table>
  tablaProm.appendChild(tblBodyProm);

  tablaProm.appendChild(node);
  // appends <table> into <body>
  bodyProm.appendChild(tablaProm);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tablaProm.setAttribute("border", "2");
  
// document.getElementById('prom').appendChild(node);
}

const generaTabla = (matr, origin) => {
  // Obtener la referencia del elemento body
  const body = document.getElementsByTagName('body')[0];
  // Crea un elemento <table> y un elemento <tbody>
  //let caption =worldbank.indicatiorsCaption();
  const tabla   = document.createElement('TABLE');
  const tblBody = document.createElement('TBODY');

  const arrCountry= searchMutipleCountry();
  const range = searchRangeYear();

  const node = document.createElement('CAPTION');              
  const textnode = document.createTextNode(`${caption}, del ${dateRange[0]} al ${dateRange[1]}`);         
  node.appendChild(textnode);                              


  const hileraYear = document.createElement('tr');
  if(origin==='des') {
  for (let i =range[0]-1; i <=  range[1]; i++) {
    const celdaYear = document.createElement('th');
    let textoCeldaYear = document.createTextNode(i);
     if (i===range[0]-1){
       textoCeldaYear = document.createTextNode('País');
     }
    celdaYear.appendChild(textoCeldaYear);
    hileraYear.appendChild(celdaYear);
  }
} else if(origin==='asc') {
  for (let i = range[1]; i >= range[0]-1; i--) {
    const celdaYear = document.createElement('th');
    let textoCeldaYear = document.createTextNode(i+1);
     if (i===range[1]){
       textoCeldaYear = document.createTextNode('País');
     }
    celdaYear.appendChild(textoCeldaYear);
    hileraYear.appendChild(celdaYear);
  }
}
  tblBody.appendChild(hileraYear);
  // Crea las celdas
  for (let i = 0; i < matr.length; i++) {
    // Crea las hileras de la tabla
    const hilera = document.createElement("tr");
    const celdaTitulo = document.createElement("th");  
    const textoCeldaTitulo = document.createTextNode(arrCountry[i]);
    celdaTitulo.appendChild(textoCeldaTitulo);
    hilera.appendChild(celdaTitulo);
    for (var j = 0; j < matr[i].length; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      const celda = document.createElement("td");
      const textoCelda = document.createTextNode(matr[i][j]);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
};

let addTableCaption = (indi) => {
  const dateRange = searchRangeYear();
  indicator(indi);
  let caption = worldbank.indicatiorsCaption();
  const node = document.createElement('H3');              
  const textnode = document.createTextNode(`${caption}, del ${dateRange[0]} al ${dateRange[1]}`);         
  node.appendChild(textnode);                              
  document.getElementById('caption').appendChild(node); 
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
  dateRange = [document.frm['date-one'].value, document.frm['date-two'].value];
  if (dateRange[0].value >= dateRange[1].value) return alert('Rango de fecha inválido');
  else return dateRange;
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
const indicator = () => { // ind
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
  // else if (ind === 'SH') indicator = 'SH.ANM.ALLW.ZS';
  // else if (ind === 'SG') indicator = 'SG.VAW.REAS.ZS';
  // else if (ind === 'SP') indicator = 'SP.POP.TOTL.FE.ZS';
  // else if (ind === 'IC') indicator = 'IC.REG.DURS.FE';
  // else if (ind === 'ICF') indicator = 'IC.FRM.FEMM.ZS';
  // else if (ind === 'COV') indicator = 'per_allsp.cov_pop';
  console.log(indicator);
  return indicator;
};

const hidenDiv = (div1, div2) => {
  document.getElementById(div1).style.display = 'block';
  document.getElementById(div2).style.display = 'none';
};

btnIndex.addEventListener('click', () => {
  hidenDiv('index', 'search');
});

btnSearch.addEventListener('click', () => {
  hidenDiv('search', 'index');
});

// Creamos un array vacio
let ElementClick = '';
// Capturamos el click y lo pasamos a una funcion
document.onclick = captureClick;
function captureClick(element) {
  // Funcion para capturar el click del raton
  let click;
  if (element !== null) {
    // Si ha hecho click sobre un destino, lo leemos
    click = element.target;
  }
  // Añadimos el elemento al array de elementos
  ElementClick = click;
  // Una prueba con salida en consola
  switch(ElementClick.id) {
    case 'SH':
    addTableCaption(ElementClick.id);
     break;
    case 'SG':
    indicator('SG');
    break;
    case 'SP':
    indicator('SP');
    break;
    case 'IC':
    indicator('IC');    
    break;
    case 'ICF':
    indicator('ICF');
    break;
    case 'COV':
    indicator('COV');
    break;
    // default:
    //   alert('selección invalida');
  }
}

 // btn-order-asc
  const btnOrderAsc = document.getElementById('order-asc');
  btnOrderAsc.addEventListener('click', () => {
    console.log(matrix);
    reverseMatrix = worldbank.orderAsc(matrix);
    generaTabla(reverseMatrix, 'asc');
  });

// btn-order-desc
const btnOrderDesc = document.getElementById('order-desc');
btnOrderDesc.addEventListener('click', () => {
  generaTabla(matrix, 'des');
});



