/// concat   concatena dos arrays y es inmutable

const array1= [ 1,1,2,2];
const array2= [ 3,3,4,4,];
const newArray=array1.concat(array2);
console.log(newArray);


//otra forma
const newArray2=[...array1,...array2];
console.log(newArray2);

//nota    con el operador de propagacion se debe cuidar lo siguiente

const texto="random";
const newArray3=newArray.concat(...texto);
//observese la salida
console.log(newArray3);
// a diferencia de :
const newArray4=newArray.concat(texto);
console.log(newArray4);
//entonces hay que considerar que es lo que se quiere.


//supongamos que se quiere agregar al array1 el array2, hay dos formas:

array1.push(array2);

console.log(array1);//[ 1, 1, 2, 2, [ 3, 3, 4, 4 ] ]

//pero si lo que se quiere es solo agregar elementos =>

//hagamoslo con el otro array

array2.push(...newArray)
console.log(array2); 
/*[
    3, 3, 4, 4, 1,
    1, 2, 2, 3, 3,
    4, 4
  ]
como se puede ver se agregan uno a uno los elementos no como bloque*/