let num1 = 1;
let num2 = 3;
let num3 = 5;

const calcularMedia = (num1, num2, num3) => {
    console.log((num1 + num2 + num3) / 3);
    return (num1 + num2 + num3) / 3;
}

let descuento = 30;
let precio = 5;
const aplicarDescuento = (descuento, precio) => {
    return precio - (precio * (descuento / 100));
}

console.log(aplicarDescuento(descuento, precio));

let palabra1 = 'Hola';
let palabra2 = 'Davidma';
const unirConGuion = (palabra1, palabra2) => {
    return palabra1 + '-' + palabra2;
}
console.log( unirConGuion(palabra1, palabra2));

let kilometros = 100;
const convertirKilometrosAMetros = (kilometros) =>  {
    return kilometros * 1000;
}

console.log(convertirKilometrosAMetros(kilometros))

let horas = 21;
const convertirHorasASegundos = (horas) => {
    return horas * 3600;
}
console.log(convertirHorasASegundos(horas));

let kmh = 5;
const convertirVelocidad = (kmh) => {
    let metrosPorSegundo = convertirKilometrosAMetros(kmh) / 3600;
    return metrosPorSegundo;
}

console.log(convertirVelocidad(kmh));


let nombre = 'Davidmita';
const sayHello = (nombre) => {
    console.log(`Hola ${nombre}`)
}
sayHello(nombre);

let lado1 = 4;
let lado2 = 5
const calculateSquareArea = (lado1,lado2) =>{
    let area = lado1 * lado2;
    console.log(`El area de un cuadrado de ${lado1} y de ${lado2} es: `,area)
}
calculateSquareArea(lado1, lado2);

const calculateTriangleArea = (base, altura) => {
    const area = (base * altura) / 2;
    console.log(`El área del triángulo es: ${area}`);
}
calculateTriangleArea(5, 8);

const calculateCircleArea = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    console.log(`El área del círculo es: ${area}`);
}
  
calculateCircleArea(5);

const celsiusToFahrenheit = (gradosC) => {
    let fan = gradosC * 1.8 +32;
    console.log(`Los grados ${gradosC} son: ` ,fan)
}

const fahrenheitToCelsius = (gradosF) => {
    let gradosC = (gradosF -32) / 1.8;
    console.log(`Los grados Celsius de ${gradosF} son:  ${gradosC}`)
}

fahrenheitToCelsius(90);


const totalPrice = (price) => {
    const ivaRate = 0.16;
    const totalPrice = price + (price * ivaRate);
    console.log(totalPrice)
    return totalPrice;
}
  

  const writeMessage = (name, material, size, note) => {
    const mensaje = `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`;
    console.log(mensaje);
}
  
writeMessage("Alfredo", "cartón", "grande", "Por favor,envuelvelo");

  const precioSinIVA = 100;
  const precioConIVA = totalPrice(precioSinIVA);
  
console.log(`Precio con IVA: ${precioConIVA}`);
  

// Readme ejercicio 7

const mostrar = (nombre, edad) => {
    console.log(`Tienes ${edad} años y te llamas ${nombre}`)
}

const numMayor = (num1, num2) => {
    if(num1 > num2){
        console.log(`El numero ${num1} es mayor`);
    }else{
        console.log(`El numero ${num2} es mayor`);
    }
}

const posneg = (num) => {
    if(num > 0){
        console.log('El numero es positivo')
    } else if(num = 0){
        console.log('El numero es 0')
    }
    else{
        console.log('El numero es negativo')
    }
}


const notas = (num) => {
    if(num >= 5 || num <= 8){
        console.log('Aprobado')
    } else if(num > 8 || num <=10){
        console.log('Matricula de honor')
    }
    else if(num > 0 || num < 5){
        console.log('Suspenso')
    }
}

const encontrarMayor = (num1, num2, num3) => {
    const mayor = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
    return mayor;
}
  
const numeroMayor = encontrarMayor(10, 5, 20);
console.log(`El número mayor es: ${numeroMayor}`);
  


const divisible = (entero) => {
    if(entero % 3 == 0){
        console.log(`${entero} es divisible de 3`);
    }
    else if(entero % 5 == 0){
        console.log(`${entero} es divisible de 5`);
    }
    else if(entero % 5 == 0 && entero % 3 == 0){
        console.log(`${entero} es divisible de 3 y 5`);
    }
    else{
        console.log('No es divisible de ninguno')
    }
}
divisible(2)

const parImpar = (numero) => {
    if(numero % 2 == 0){
        console.log(`${numero} es par`);
    }else{
        console.log(`${numero} es impar`);
    }
}

parImpar(3)

const calculoAnios = (anio) => {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        console.log(`${anio} es un año bisiesto`);
    } else {
        console.log(`${anio} no es un año bisiesto`);
    }
}

calculoAnios(2444)


const tipado = (valor1, valor2) => {
    if(typeof valor1 != 'number' || typeof valor2 != 'number'){
        valor1 = Number(valor1)
        valor2 = Number(valor2)
        let suma = valor1 + valor2;
        console.log(`El resultado1 de la suma de ${valor1} y ${valor2} es ${suma} `)
    }
    else{
        let suma = valor1 + valor2;
        console.log(`El resultado2 de la suma de ${valor1} y ${valor2} es ${suma} `)
    }
}

tipado(1,'2');


const cincoLetras = (palabra) => {
    if(palabra.length > 5){
        console.log(palabra.toUpperCase())
    }
    else{
        console.log('Tiene menos de 5 letras')
    }
}

cincoLetras('Davidma')


const cincoLetrasTer = (palabra) => {
    palabra.length > 5 ? console.log(palabra.toUpperCase()) : console.log('Tiene menos de 5 letras ternario');
}
cincoLetrasTer('Davidma')

// - Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

const verbos = (verbo) => {
    
    if(verbo.endsWith('ar')){
        return '1ª';
    } else if(verbo.endsWith('er')){
        return '2ª';
    } else if(verbo.endsWith('ir')){
        return '3ª';
    }
}


const checkVerbs = (verbo1, verbo2) => {
    console.log(verbos(verbo1), 'y ', verbos(verbo2));
}

checkVerbs('andir', 'corrar')


function generateWord(word1, word2, word3) {
    let part1 = word1.slice(0, 2);
    let part2 = word2.slice(1, 3);
    let part3 = word3.slice(-1);
    return part1 + part2 + part3;
}

let resultado = generateWord("Hola", "Adios", "Manir");
console.log(resultado);





function separarEmail(email) {
    const [usuario, dominio] = email.split('@');

    console.log(`El usuario es ${usuario}`);
    console.log(`El dominio es ${dominio}`);
}

separarEmail("davidmagarcia95@gmail.com");


function letraAleatoria(palabra) {
    const indiceAleatorio = Math.floor(Math.random() * palabra.length);
    const letra = palabra.charAt(indiceAleatorio);
    console.log(letra);
  }
  
  letraAleatoria("palabra");
  

  function intercalarMayusculasMinusculas(palabra) {
    if (palabra.length !== 5) {
      console.log("La palabra debe tener exactamente 5 letras.");
      return;
    }
  
    let nuevaPalabra = "";
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
        nuevaPalabra += palabra[i].toUpperCase();
      } else {
        nuevaPalabra += palabra[i].toLowerCase();
      }
    }
  
    console.log(nuevaPalabra);
  }
  
  intercalarMayusculasMinusculas("David");

  function generarNombreUsuario(nombre, apellido) {
    const primeraLetraNombre = nombre.charAt(0).toUpperCase();
    const apellidoSinEspacios = apellido.replace(/\s/g, "");
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const nombreUsuario = `${primeraLetraNombre}${apellidoSinEspacios}${numeroAleatorio}`; 
    return nombreUsuario;
  }
  
  const nombreUsuario = generarNombreUsuario("David", "Garcia");
  console.log(nombreUsuario);


