
function newRowTable(prop,result)
{

	var name_table=document.getElementById("table_result");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = '<p name="numero_f[]" class="non-margin">'+prop+'</p>';
    cell2.innerHTML = '<p name="codigo_p[]" class="non-margin">'+result+'</p>';
}







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
  return 0;
}

function searchIndicator() {
  let indicat = document.frm['category[]'];

  let IndicatorString = "";
  for (let i = 0; i < indicat.length; i++) {
    if (indicat[i].checked) {
      IndicatorString= indicat[i].value;
    }
  }
  return IndicatorString;
}


function searchSex() {
  let sexArr = document.frm['sex[]'];

  let sexString = "";
  for (let i = 0; i < sexArr.length; i++) {
    if (sexArr[i].checked) {
      sexString=sexArr[i].value;
    }
  }
  return sexString;
}
function indicator() {
  let indicator ="";
  const IndicatorString = searchIndicator();
  const sexString = searchSex();
  if (IndicatorString==="SL.TLF.BASC.ZS" && sexString==="FE")return indicator="SL.TLF.BASC.FE.ZS";
  else if (IndicatorString==="SL.TLF.BASC.ZS" && sexString==="MA")return indicator="SL.TLF.BASC.MA.ZS";
  else if (IndicatorString==="SL.TLF.INTM.ZS" && sexString==="FE")return indicator="SL.TLF.INTM.FE.ZS";
  else if (IndicatorString==="SL.TLF.INTM.ZS" && sexString==="MA")return indicator="SL.TLF.INTM.MA.ZS";
  else if (IndicatorString==="SL.TLF.ADVN.ZS" && sexString==="FE")return indicator="SL.TLF.ADVN.FE.ZS";
  else if (IndicatorString==="SL.TLF.ADVN.ZS" && sexString==="MA")return indicator="SL.TLF.ADVN.MA.ZS";
  else if (IndicatorString==="SL.TLF.ACTI.ZS" && sexString==="FE")return indicator="SL.TLF.ACTI.FE.ZS";
  else if (IndicatorString==="SL.TLF.ACTI.ZS" && sexString==="MA")return indicator="SL.TLF.ACTI.MA.ZS";

}


//FILTRAR POR INDICADOR
const showResult = () => {
  
  searchRangeYear();
  let country = searchMutipleCountry();
  country.forEach((element) => {
    indicatorsArr=  WORLDBANK[element].indicators;
    
    let indicatorNameArr = [];
    indicatorNameArr = indicatorsArr.filter(populationElement => populationElement.indicatorCode === indicator());
    let indicatorDateArr = [];
    indicatorDateArr = indicatorNameArr[0].data;
    

    
    for (let prop in indicatorDateArr){
      if(prop >= dateOne && prop <= dateTwo){
        newRowTable(prop,indicatorDateArr[prop]);
      }
    }
 
  });   
};


window.worldbank = {
  showResult  
};