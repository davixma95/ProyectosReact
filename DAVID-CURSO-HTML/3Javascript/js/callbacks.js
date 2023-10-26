// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const ej1 = (array) => {
  array.forEach(element => {
      console.log(element * 2)
  });
}
arrayej1 = [1,2,3,4,5]
// ej1(arrayej1);




// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const ej2 = array => {
  array.forEach(element => {
    console.log(element.toUpperCase());
  });
}
const arraypal = ['mar', 'bosque','Montaña'];
// ej2(arraypal);


// - Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
// - Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

const array = ['mar', 'david','MontAAAAÑa','d'];

const ej3 = array.filter((elements) => {
  // console.log(  elements.toLowerCase());
  // elements = elements.toLowerCase();
  if(elements.toLowerCase().startsWith('m')){
    console.log(`El elemento que si tiene es: ${elements}`)
  } else {
    console.log('No hay');
  }
});



// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

//Ejemplo de spread

// const ej5 = array => {
//   // const nuevoAra = ();
//   [...array].map((elementos) => {
//     console.log(elementos)
//   })
// }

const arrayej5 = [1,2,3,4,5,6,7,8,9,10];
const ej5 =  arrayej5.reduce((acc, element) => {
  // Sino tiene el return no te lo suma
  return acc + element;
})

console.log(ej5)

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:

const arrayej6 = [15,62,33,44,56,16,47,68,39,13];

const ej6 = arrayej6.map((element, index) => {
  // console.log('Elemento',element)
  // console.log('Multiplar uno por otro',element*element)
  // console.log('El pow: ',Math.pow(element,3))
});


// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. Nota, el método split() de los strings, convierte un string en un array.


const ej7 = (palabra) => {
  const arrayPal = palabra.split();
  arrayPal.map((elemento) => {
    console.log(elemento.toUpperCase());
  })

}
const stringej7 = "DaviDmITa";

// ej7(stringej7);


// - Crea una función que reciba un array de nombres y te devuelva un array con los nombres que empiecen por 'A'
const arrayej8 = ['David','Carlos','Amaral', 'Jose', 'Anuario']

const ej8 = arrayej8.map((elemento) => {
  if(elemento.toLowerCase().startsWith('a')){
    console.log('Empieza por A: ',elemento)
  } else {
    console.log('No empieza por A: ',elemento)
  }
})


// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
  const arrayObj = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
  ];

const ej9 = arrayObj.filter(({name, age}) => {
  if(age < 30){
    console.log(`Hola ${name} tienes ${age} años, por eso estas aqui`)
  } else {
    console.log(`Hola ${name} tienes mas o igual a ${age} años, por eso estas aqui`)
  }
});




// - Crea una función que reciba un array relleno con números pares y te diga si todos son pares o no.
const arraySiPares = [2,4,6,8,10,12,144];

const sonTodosPares = (numeros) => numeros % 2 === 0;

console.log(arraySiPares.every(sonTodosPares));

// 🚀


// - Crea una función que reciba un array de números desordenados y los muestre por consola ordenados de mayor a menor.

const numeros = [512,2,43,16,8,101,1,414];

const ordernarNum = numeros.sort((a,b) => {
  // if(a<b) return -1;
  // if(a>b) return 1;// Ordenar palabras
  return b - a; // Ordenar numeros

})

console.log(ordernarNum)

// - Crea una función que reciba un array de 5 palabras y las ordene alfabéticamente.


const palabras = ['Hola','Como','David','Estas','Agua','Tierra','Fuego'];

const ordernarPal = palabras.sort((a,b) => {
  if(a<b) return -1;
  if(a>b) return 1;// Ordenar palabras
})

console.log(ordernarPal)










