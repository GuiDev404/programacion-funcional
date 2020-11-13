// HOISTING

// Las funciones declaradas, se elevan al principio del codigo o hoisting
declarada(); // puedo llamarla tanto arriba como abajo, total se va a elevar al principio del codigo

function declarada(params) {
  return 'Hola';
}

declarada();

// Esto no pasa con las expresiones funcionales

//expresionFuncional(); // Cannot access 'expresionFuncional' before initialization
// const expresionFuncional = undefined; esto es lo que alza

const expresionFuncional = function (cap = '1x1') {
    console.log(cap);
}

function obtenerNumero (){
  function numero(){
    return 80;
  }

  return numero();

  function numero(){
    return 50;
  }
}

obtenerNumero(); // 50

// Interpretacion de javascript

// function obtenerNumero (){
//   function numero(){
//     return 80;
//   }

    // ocurre la sobreescritura
//   function numero(){
//     return 50;
//   }

//   return numero();
// }

// obtenerNumero () // 50
