/* global worldbank:true */
/* eslint no-undef: "error" */
require('../src/data.js');

// chequear todas las funciones
describe('worldbank.newRowTableCountry', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.newRowTableCountry).toBe('function');
  });
});
describe('worldbank.newRowTableYear', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.newRowTableYear).toBe('function');
  });
});
describe('worldbank.newRowTableYearProp', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.newRowTableYearProp).toBe('function');
  });
});
describe('worldbank.searchMutipleCountry', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.searchMutipleCountry).toBe('function');
  });
});
describe('worldbank.searchRangeYear', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.searchRangeYear).toBe('function');
  });
});
describe('worldbank.searchIndicator', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.searchIndicator).toBe('function');
  });
});
describe('worldbank.searchSex', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.searchSex).toBe('function');
  });
});
describe('worldbank.indicator', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.indicator).toBe('function');
  });
});
describe('worldbank.showResult', () => {
  it('Debería ser una funcion', () => {
    expect(typeof worldbank.showResult).toBe('function');
  });
});

// chequear retorno de todas las funciones
//   it('debería retornar un array, con el valor de los paises seleccionados', () => {
//     expect(worldbank.searchMutipleCountry()).toEqual(output);
//   });
//   it('debería retornar un nuevo array, no modificar el original', () => {
//     expect(potter.cambiarPropiedad(input)).not.toEqual(input);
//   });
// });

//   it('deberia agregar la propiedad insignia a todos los estudiantes de hogwarts', () => {
//     expect(potter.agregaPropiedad(input)).toEqual(output2);
//   });
//   it('debería retornar un nuevo array, no cambiar el array original', () => {
//     expect(potter.agregaPropiedad(input)).not.toEqual(input);
//   });
// });
//   it('debería retornar un nuevo array con las casas de howards de manera única', () => {
//     expect(potter.filtrarCasasUnicas(input)).toEqual(output3);
//   });
// });