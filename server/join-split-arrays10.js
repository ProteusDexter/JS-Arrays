//   join une un string con cada elemento de un arreglo

const elementos=["Water","Air","Earth","Fire"];
let strings;
elementos.forEach(element => {
    strings+="--"+element;   
},1);
console.log(strings);

console.log(elementos.join("--"));


/*split  me entrega un array de elementos  cuando estos estan 
separados por un separador comun, por ejemplo un espacio o un guion o una barra 
o lo que sea*/

const title="Curso de manipulación de arrays";
console.log(title.split(" "));

//por ejemplo puede servir para esto o para una url

const transMail=title.split(" ").join("_").toLowerCase().concat("@email.com")

console.log(transMail);