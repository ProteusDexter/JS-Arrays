/* asi como some devuelve tru si alguno de los elementos 
cumple con la condicion, EVERY en cambio requiere
que todos los elementos cumplan la condicion*/
//ejemplos

const numbers =[
   42, 1,28,39,29,10,13
]

/*  como la respuesta es booleana y de entrada la respuesta se espera tru
podemos crear una variable respuesta que sea true de inicio */

let resp =true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    //la condicion especifica que si por lo menos alguno es mayor que cuarenta cambie a false
    if(element=>40){
        resp=false;
        break;
    }
}
console.log( "todos son menores de 40 ",resp)

const resp2=numbers.every(item=>item<40); 
 // en cambio aqui es si todos son menores que 40 responda true si alguno no lo es responde false
console.log("todos son menores de 40 ", resp2)

//RETO


const data=[
    {
    name:"nicolas",
    age:12
},
    {
    name:"pedro",
    age:15
},
    {
    name:"zulema",
    age:12
},
    {
    name:"luis",
    age:18
},
    {
    name:"augusto",
    age:9
},
    {
    name:"maria",
    age:14
},
    {
    name:"andrea",
    age:11
}
];

const cond=15;
const menores=[];

data.map(item => menores.push(item.age))
const resp3=menores.every(item=>item<=cond);

console.log(`Todos son menores o iguales a ${cond} años? :`,resp3)

