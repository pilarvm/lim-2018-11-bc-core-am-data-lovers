

// const crearBotonera = () => {
  
  
//   let filaBotones = document.getElementById("btn-enviar");
//   let nombreBotones = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"];
//   nombreBotones.forEach(nombre => {
//     let boton = crearBoton(nombre);
//     filaBotones.appendChild(boton);
//   });
//   let boton = crearNuevoBoton("AAA");
//   filaBotones.innerHTML = filaBotones.innerHTML + boton;
//   //filaBotones.appendChild(boton1);
//   //filaBotones.appendChild(boton2);
//   //filaBotones.appendChild(boton3);
// }

// const crearBoton = (etiqueta) => {
//   let btn = document.createElement("BUTTON");
//   btn.innerHTML = etiqueta;
  
//   return btn;
// }

// const crearNuevoBoton = (etiqueta) => {
//   let elemento = `<BUTTON>${etiqueta}</BUTTON>`;
//   return elemento;
// }

// crearBotonera();

// const crearFila = () => {

// }


const createBodyTable = () => {
  let tr = document.createElement("TR");
  tr.innerHTML = createRowTable();
  
  return tr;
}
createRowTable = (etiqueta) => {
  let td = document.createElement("TD");
  td.innerHTML = etiqueta;
  return td;
}
// btn-submit
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', () => {
  showResult();
});
