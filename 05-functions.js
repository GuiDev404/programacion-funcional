/** 
   CLOSURES
 - Relacionado con el ambito de la variable
 - Es una funcion que retorna otra funcion, y esta funcion interna se lleva, una referencia del ambito superior 
 
*/
// ---------< EJEMPLO 1 >------------

function funcion1 (){
    let variableLocal = 1;

    function funcionInterna (){
        console.log(variableLocal);
    }

    return funcionInterna;
}

let veriableExterna = funcion1(); // aca la funcion ya se ejecuto

// veriableExterna(); // sin embargo, mantiene una referencia del ambito superior
 
// ---------< EJEMPLO 2 >------------

function funcion2 (){
    let variableLocal = 2;

    function funcionInterna (){
        console.log(variableLocal);
    }

    funcionExterna(funcionInterna);
}

function funcionExterna (funcion){
    funcion();
}

// funcion2();

// ---------< EJEMPLO 3 >------------

function porcent (porcentaje){
    return (function (total){
        // se captura el parametro/variable 'porcentaje' al momento de crear esta funcion anonima en una construccion 
        // denominada 'clousure'
        return {
            total: total,
            descuento: total * (porcentaje / 100)
        }
    })
}

let porcentaje11 = porcent(11);
let porcentaje21 = porcent(21);

let { total, descuento } = porcentaje11(1050);
let descuentoAplicado = total - descuento;
console.log('Res 11%: ', descuentoAplicado);

let { total: total2, descuento: descuento2 } = porcentaje21(1050);
let descuentoAplicado2 = total2 - descuento2;
console.log('Res 21%: ', descuentoAplicado2);

// ---------< EJEMPLO 4 >------------

const increment = init => () => init++; 

let incrementOne = increment(0);

// console.log(incrementOne());
// console.log(incrementOne());
// console.log(incrementOne());

// let incrementTwo = increment(2);
// console.log(incrementOne());
// console.log(incrementOne());
// console.log(incrementOne());

// ---------< EJEMPLO 4 >------------
// WORNING ONLY BROWSER

const API = DOMINIO => (RECURSO,ID) => {
    const URL = `${DOMINIO}/${RECURSO}/${ID.toString()}`;

    return fetch(URL)
            .then(res => res.json())
}

// const base = API('https://jsonplaceholder.typicode.com');
// const Todo = base('todos',2);
// const Users = base('users',2);

// Todo
//     .then(result => console.log(result) )
//     .catch(console.error)

// Users
//     .then(result => console.log(result) )
//     .catch(console.error)