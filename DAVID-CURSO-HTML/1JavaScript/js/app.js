console.log('HOLA MUNDILLO');

let variable1 = 'Mi nombre es '
let variable2 = 'Davidma';
const anio = 1995;
let array = ['1',
    '2',
    '3'
];

const trabajador = {
    nombre: 'David',
    edad:'28',
    profesion: 'desarrollador',
    direccion: {
        longitud:'123',
        latitud:'456'
    }
}

console.log(variable1, variable2,' naci en el ', anio);
console.log('El uso de SPREAD, ', {...trabajador})

// array.map(valor => {
//     console.log(valor)
// })



console.log(Object.keys(trabajador),' y tambien tengo el valor, que es ', Object.values(trabajador));

let num1 = '1';
let num2 = '3';
const sum = (num1,num2) => {
    let c= num1+num2; // parseInt(num1) + parseInt(num2);
    console.log('La suma es ', c )
}

sum(num1, num2)

