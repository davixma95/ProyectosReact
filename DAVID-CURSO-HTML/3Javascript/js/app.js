
// -Ej 1 Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.



/**
 * Es una funcion que revibira un array como param
 *  
 */
const constEj1 =(array) => {
    let numAle = Math.floor(Math.random()*array.length);
    console.log(numAle)
    console.log(array[numAle]);
}

let arrayEj1 = ['1','2','3','4','5'];
constEj1(arrayEj1);

//- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

// - "La suma de todos los números es:[suma]"
// - "La media de todos los números es:[media]"
// - "El mayor es [mayor] y el menor es [menor]"

const ej2 =(array) => {
    if(array.length != 3 || !Array.isArray(array)){
        console.error('No mide 3 el array o no es array')
    } else{
        let suma = array[0] + array[1] + array[2];
        console.log('La suma de todo es: ',suma);

        let media = suma / array.length;
        console.log('La media de todo es: ',media);        

        let mayor = Math.max(array[0],array[1], array[2]);
        // let mayor = Math.max(...array); //Mas nuevo y mejor

        let menor = Math.min(array[0],array[1], array[2]);
        console.log(`El num menor es ${menor} y el num mayor es ${mayor}`)

    }
}
let arrayEj2 = [1,2,3];
ej2(arrayEj2);


//- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const ej3 = array => {
    let numAle = Math.floor(Math.random()*(10 + 1))
    console.log(numAle);
    if(array.includes(numAle)){
        console.log('El numero esta dentro, en la posicion, ', array.indexOf(numAle))
    }else{
        console.error('No esta en ingun lado')
    }
}

let arrayEj3 = [2,4,6,8,10]
ej3(arrayEj3)


// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const Ej4 = array => {
    const numAle = Math.floor(Math.random()*(100 + 1))
    const numAle2 = Math.floor(Math.random()*(100 + 1))
    const numAle3 = Math.floor(Math.random()*(100 + 1))

    array.push(numAle)
    array.unshift(numAle2)
    array.push(numAle3)
    console.log(array)
}
arrayEj4 = [];

Ej4(arrayEj4);



// Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.



const ej5 = array => {
    const pares = [];
    const impares = [];
    const numAle = Math.floor(Math.random()*(10 + 1))
    
    const result1 = numAle * array[0];
    const result2 = numAle * array[1];
    const result3 = numAle * array[2];
    const result4 = numAle * array[3];
    const result5 = numAle * array[4];

    if(result1 % 2 === 0){
        pares.push(result1);
        // console.log(pares)
    }
    else{
        impares.push(result1);
    }
    if(result2 % 2 === 0){
        pares.push(result2);
        // console.log(pares)
    }
    else{
        impares.push(result2);
    }
    if(result3 % 2 === 0){
        pares.push(result3);
        // console.log(pares)
    }
    else{
        impares.push(result3);
    }
    if(result4 % 2 === 0){
        pares.push(result4);
        // console.log(pares)
    }
    else{
        impares.push(result4);
    }
    if(result5 % 2 === 0){
        pares.push(result5);
        // console.log(pares)
    }
    else{
        impares.push(result5);
    }
    console.log(pares)
    console.log(impares)

}

const arrayEj5=[1,2,3,4,5]
ej5(arrayEj5);

// - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array [] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente

const dniLetter = (numeroDNI)=> {
    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    const letra = letrasDNI[numeroDNI % 23];
    console.log(`${numeroDNI}${letra}`);
}

dniLetter(53858408);


// - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']


const ej7 = array => {
    if(array.length === 3 || isArray(array)){

        const primeraL = array[0].substring(0, 1).toUpperCase();
        const ultimaL = array[0].charAt(array[0].length -1).toUpperCase();
        const primeraL2 = array[1].substring(0, 1).toUpperCase();
        const ultimaL2 = array[1].charAt(array[1].length -1).toUpperCase();
        const primeraL3 =array[2].substring(0, 1).toUpperCase();
        const ultimaL3 = array[2].charAt(array[2].length -1).toUpperCase();
        array.push(primeraL);
        array.push(ultimaL);

        array.push(primeraL2);
        array.push(ultimaL2);

        array.push(primeraL3);
        array.push(ultimaL3);

        console.log(array);
    
    } else {
        console.error('No mide 3 ni es un array');
    }
}

const arrayEj7 = ['Mario','Manuel','Garcia'];
//D D M L G A
ej7(arrayEj7)



// Bucles
const numbers = [1,2,3,4,5,6,7];
const numbers2 = [1,2,3,4,5,6,7,'',null,undefined];

const newNumbers = numbers.map(number => number + 2);
const newNumbersF = numbers.filter(number => number % 2 === 0);
const newNumbersF2 = numbers2.filter(number => (number % 2 === 0 && number ));

console.log(newNumbers)
console.log(newNumbersF)
console.log(newNumbersF2)


const arrayPal = ['Bosque','Mar','Hola','Arbol','Montaña'];
const recorrerPal = arrayPal.sort((a,b) => {
    // if(a.toLowerCase() > b.toLowerCase()) return 1;
    // if(a.toLowerCase() < b.toLowerCase()) return -1; Alfabeticamente

    // if(a.toLowerCase() > b.toLowerCase()) return -1;
    if(a.toLowerCase() < b.toLowerCase()) return 1;
});

console.log(recorrerPal);


const numeritos = [1,2,3,4,5,6,7,8,9]

const funReduce = numeritos.reduce((prev, acc) => {
    console.log(prev , acc);
    return prev + acc;
});

console.log('funRecude: ',funReduce);


const array1 = ['g', 'a', 'j'];
const array2 = ['c', 'b', 'e'];
const array3 = array1.concat(array2).sort();

console.log(array3);
