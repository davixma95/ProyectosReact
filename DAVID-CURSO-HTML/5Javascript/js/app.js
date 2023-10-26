// const array = ['Davidma', 'Laura','Elena'];

// const [name1, name2, name3] = array;
// const [name1, , name3] = array;


// console.log(name1, name3);


// const objeto = {
//     name:'Davidma',
//     age:'28',
//     direccion:'Alcobendas'
// };

// const objeto2 =objeto;
// objeto2.edad = 'davidd';
// console.log(objeto)
// console.log(objeto2)


// const {name, age} = objeto;

// console.log(name, age);


// let number = [3,2,1,0];
// let number2 = number;

// number.push(5);
// console.log(number)
// console.log(number2)
// console.log(...number2)
// console.log([...number2])



// const originalName = ['Laura', 'David', 'Mar'];

// const sortNames = ([...names]) => {
//     names.sort((a,b) => {
//         if(a < b) return 1;
//         if(a > b) return -1;
//         return 0;
//     })
//     console.log(originalName);
//     console.log(names);

// }

// const sortNames = names => {
//     const sortedNames = [...names].sort((a,b) => {
//         if(a < b) return 1;
//         if(a > b) return -1;
//         return 0;
//     })
//     console.log(originalName);
//     console.log(names);
//     console.log(sortedNames);

// }
// sortNames(originalName)





/*const enviar = document.getElementById('botonEnvio');

const mostrar = (event,name) => {
    console.log(event)
    console.log('Estamos en un console')
}

enviar.addEventListener('click' , event => mostrar(event, 'Adrian'));



const buttonNext = document.getElementById('despues');

buttonNext.addEventListener('click', () => {
  index++;
  if (index === arraypal.length) {
    index = 0;
  }
  h2.textContent = arraypal[index];
*/






































const cuadrado = document.getElementById('cuadrado');
const boton = document.getElementById('botones');

const cambiarColores = (event) => {
    // const { id } = event.target;
    const { color } = event.target.dataset;
    if(cuadrado.classList[1]){
        cuadrado.classList.replace(cuadrado.classList[1], color);
    } else {
        cuadrado.classList.add(color);
    }
}

boton.addEventListener('click', cambiarColores);
