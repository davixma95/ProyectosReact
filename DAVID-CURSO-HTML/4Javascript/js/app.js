//Carpeta con promesas y con eventos supongo

//Eventos --> Los 2 mejores y mas rapidos getElementById() y getElementByIdAll

// const titulo = document.getElementById('titulo');

// const divs = document.getElementByIdAll(".nota1, .nota2, #notaa2");

// console.log(titulo);
// console.log(titulo.textContent);
// console.log(divs);


// textContent es el contenido pero no es el texto, son los hijos de la etiqueta

// console.dir() Para ver el desplegable de propiedades del objeto de document

// header id="header" class="header">
//       <h1 id="main-title" class="title title--big">Soy un título</h1>
//       <h2 id="main-subtitle" class="subtitle subtitle--big">
//         Soy un subtítulo
//       </h2>
//       <h3 id="start-point" class="start">
//     </header>

const titulo3 = document.getElementById('start-point');
const tituloID = titulo3.id;
const tituloClass = titulo3.className;
const header3 = titulo3.parentElement.localName;
const hermanoMayor = titulo3.previousElementSibling;


console.log(`Soy un h3 con el id ${tituloID}, con la clase ${titulo3.className}.
Mi padre es un ${header3} con id ${header3}, mi hermano es un ${hermanoMayor.localName}, con un id ${hermanoMayor.id} y su texto es ${hermanoMayor.textContent}`)




{/* <nav>
 <ul>
<li class="list-item"><a href="#">Inicio</a></li>
<li class="list-item"><a href="#">Acerca de</a></li>
<li class="list-item"><a href="#">Contacto</a></li>
</ul>
</nav> */}

// const elementos = document.getElementByIdAll('*');
// const conteo = {};

// elementos.forEach(elemento => {
// const etiqueta = elemento.tagName.toLowerCase();
//     if (conteo[etiqueta]) {
//         conteo[etiqueta]++;
//     } else {
//         conteo[etiqueta] = 1;
//     }
// });

// console.log('Conteo de etiquetas:');
// for (const etiqueta in conteo) {
//     if (conteo.hasOwnProperty(etiqueta)) {
//         console.log(`Hay ${conteo[etiqueta]} etiquetas ${etiqueta}`);
//     }
// }


const numbers = [1, 2, 3];
console.log(...numbers);

// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const enviar = document.getElementById('botonEnvio');

const mostrar = (event,name) => {
    console.log(event)
    console.log('Estamos en un console')
}

enviar.addEventListener('click' , event => mostrar(event, 'Adrian'));
//Para enviar parametros sin usar la funcion nada mas empezar el documento esto es obligatorio


/*
    Elementos del DOM
    Constantes
    Variables
    Funciones
    Acciones
    Eventos
*/


//Ejercicios de Eventos

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const mostrar2 = (event) => {
    let texto = 'Quitate de encima';
    event.target.textContent = texto;
}

const mostrar3 = (event) => {
    let texto = 'Soy un titulo';
    event.target.textContent = texto;
}

const titulo = document.getElementById('main-title');

titulo.addEventListener('mouseover', mostrar2);
titulo.addEventListener('mouseleave', mostrar3);



// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.
const parrafo = document.getElementById('parrafito');
const tecla = (event) => {
    console.log(event)
    console.log(`has pulsado una tecla que es la ${event.key}`)
}

window.addEventListener('keydown', tecla);
//Ambas valen
// document.addEventListener('keydown', tecla);



// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const arraypal = ['david', 'Pueblo', 'Elena', 'AssassinsCreed','Fiestas'];
let index = 0;

const h2 = document.getElementById('main-subtitle');

const buttonPrevious = document.getElementById('antes');
const buttonNext = document.getElementById('despues');

h2.textContent = arraypal[index];

buttonPrevious.addEventListener('click', () => {
    if (index === 0) {
    index = 4;
  }
  index--;
  h2.textContent = arraypal[index];
});

buttonNext.addEventListener('click', () => {
  index++;
  if (index === arraypal.length) {
    index = 0;
  }
  h2.textContent = arraypal[index];
});











