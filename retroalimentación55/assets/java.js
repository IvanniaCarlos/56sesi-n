/*ARRAYS O ARREGLOS

colección de datos ordenados
= -> Asignación
== -> Igualdad
=== -> Identidad

Indices

inicio -> 0
Final -> tamaño menos 1
*/
/*
let arr =[1,2,3,4,5];

console.log(arr);

//ACCEDER POR INDICE
console.log(arr[2]);
*/
// ARRAY DE DOS DIMENSIONES

/*let matrix = [1,2,3,
              4,5,6,
              7,8,9]
*/
/*
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix);
console.log(matrix.length);
console.log(matrix[2][0]);
*/
/*
// METODOS DE UN ARRYS
let nums = [1,2,3,];
nums.push(4);
console.log(nums);
 
nums.pop();
console.log(nums);
*/

// SHITF & UNSHIFT
/*
let nums = [1,2,3,4,5];
console.log(nums);
nums.shift();
console.log(nums);
nums.unshift(1);
console.log(nums);
*/
/*
// splice

//ELEMINAR
let nums = [1,2,3,4,5,6,7,8,9];

console.log(nums);
nums.splice(7,9);
console.log(nums);
//AGREGAR
let.nums =[7,29];
*/
/*
//PARAMETROS Y ARGUMENTO
function saludo1(){
        console.log("hello");
};
function saludo2(nombre){
    console.log(`hola ${nombre}`);
};
saludo1();
saludo2(`ivi`);
*/
/*
// SLICE
let nums = [1,2,3,4,5,6];
// nums = ['uno','dos','tres','cuatro','cinco','seis'];
console.log(nums);
console.log(nums.slice(0, 3));
console.log(nums);
*/
/*
let nums= [1,2,3,4,5,6];

console.log(nums);
console.splice(1, 3);
console.log(nums);
*/
/*
let nums1 = [1,2,3];
let nums2 = [4,5,6];
let nums3 = nums1.concat(nums2);

console.log(nums1);
console.log(nums2);
console.log(nums3);

// LOS ARRAYS ORIGINALES NO SE MODIFICAN
console.log(nums1);
console.log(nums2);
*/

// BUSQUEDA Y MODIFICACIÓN

let nums =[3,1,2,3,4,5,6];
console.log(nums.indexOf(3));
console.log(nums.lastIndexOf(3));
console.log(nums.includes(5));