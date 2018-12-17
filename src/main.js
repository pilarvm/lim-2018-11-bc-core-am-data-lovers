alert("hola");

//función para seleccionar multiples paises
function searchMutipleCountry(){
    const country=document.frm['country[]'];
    const lengthCountry=country.length;
    const SearchCountry=[];
    let validationYesNo=0;
    for(let i=0;i<lengthCountry;i++){
        if(country[i].checked){
            SearchCountry.push(country[i].value);
            validationYesNo=1;
        }
        if (validationYesNo==0){
            alert('Seleccione al menos un país');
            return false;
        }
    }
    return SearchCountry;
}
//función para seleccionar una categoria
function searchOneCategory(){
    const category=document.frm['category[]'];
    const lengthCategory=category.length;
    const searchCategory="";
    let validationNoYes=0;
    for(let j=0;j<lengthCategory;j++){
        if(category[j].checked) return category[j].value;
    }
}
//función para seleccionar una rango de fechas
function searchRangeYear(){
    const dateOne=document.frm['date-one'];
    const dateTwo=document.frm['date-two'];
    const range=[];
    if(dateOne.value<=dateTwo.value){
        range.push(dateOne.value);
        range.push(dateTwo.value);
        return range;
    }else{
        alert('Rango de fecha inválido');
        return false;
    }
}
//btn-submit
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
    // viewHome.classList.remove('hidden');
    // viewHome.classList.add('show');
    const searchTotal=[];
    searchTotal.push(searchMutipleCountry());
    searchTotal.push(searchOneCategory());
    searchTotal.push(searchRangeYear());
    //return searchTotal;
   console.log(searchTotal);
});