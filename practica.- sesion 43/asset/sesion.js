/*
//map()
let nums = [1,2,3,4,5];
let numsPorDos = nums.map(n => n*2);
let numsPorDiz = nums.map(n => n*10);

console.log(nums);
console.log(mumsPorDos);
console.log(numeroPorDiez);

// NO SOLO FUNCIONA CON MUMEROS
let palabras = [ 'hola', ' hambre','queso','fresa'];
let mayus = palabras.map(p => p.toUpperCase());

console.log(palabras);
console.log(mayus);

//OTRA APLICACIÓN
function obtenerVocales(str) {
    for (let c of str) {
        switch (c) {
            case 'a': case 'e':case 'i': case 'o': case 'u':
                nuevaPalabra += c;
                break;
        }
    }
    return nuevaPalabra;
 }
let soloVocales = palabras .map (p => obtenerVocales(p));
console.log(soloVocales)
*/

/*
//REDUCE()
let numbers = [1,2,3,4,5];
// let numbersReduced = numbers.reduce(fuction(a,b){ return a +b });
let numbersReduced = numbers.reduce((a,b)=> a + b);

console.log(numbersReduced);
*/

/*
//sort()

let nums = [1,20,100,10,2,20];
console.log(nums);
nums.sort();
console.log(nums);

let numeros = [82,6234,9,765,50980];

console.log(numeros);
//ORDENAMIENTO POR UNICODE
console.log();
console.log('ORDENAMIENTO POR UNICODE');
console.log(numeros);

//ORDENAMIENTO NUMERICO ESTRICTO
numeros.sort((a,b)=> a-b);
console.log('ORDENAMIENTO POR UNICODE');
console.log(numeros);
*/
/*
//reverse()
 let words = ['a','e','i','o','u'];

 console.log(words);
 console.log(words.reverse());
*/
/*
// split 

let palabra = "eres el mejor";
let arr = palabra.split("");
console.log(arr);

 palabra = "hola,como,estas";
 arr = palabra.split(",");
console.log(arr);
*/

// join()
 let arr = ['h','o','l','a'];
   let palabra = arr.join('-')
   console.log(palabra);



