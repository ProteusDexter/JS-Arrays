
const suma=[1,2,3,4,5,6];

let acumulador=0
for (let index = 0; index < suma.length; index++) {
    // const element = suma[index];
    // acumulador+=element ;  
    acumulador += suma[index];
}
console.log('metodo for ',acumulador);


let total = suma.reduce((a,b) => a+b)
console.log("metodo reduce ",total)

//pero para que se parezca al metodo for veamoslo así:

let total2 = suma.reduce((acumulador,element)=>acumulador + element,0)
console.log("metodo reduce con valor inicial del acumulador en 0",total2)

/*siquisieramos multiplicar los elementos ente si el valor inicial del
acumulador no podria ser 0 tendría que ser 1 */

let mult = suma.reduce((acumulador,item)=>acumulador*item,1);
console.log(mult);

//reduce recargado.  ¿cuantos elementos hay de cada tipo en el arreglo?
//me debe devolver un objeto. 
//es una forma de hacer un histograma.
const redarray=[1,3,2,3,2,4,3,1];

let arreglo= redarray.reduce((obj,item)=>{
    if(!obj[item]) {
        obj[item]=1;
    }
    else{
        obj[item]++
    }
    return obj;
},{});

console.log(arreglo)

//tambien podriamos hacerlo con cosas

let cosas=['cafe', 'manzana','azucar','cafe','limon','cafe','limon']

let histograma=cosas.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1
    }
    else{
        obj[item]++
    }
    return obj;
},{});
console.log(histograma);



const data=[
    {
    name:"nicolas",
    level:'bajo'
},
    {
    name:"pedro",
    level:'alto'
},
    {
    name:"zulema",
    level:'bajo'
},
    {
    name:"luis",
    level:'medio'
},
    {
    name:"augusto",
    level:'bajo'
},
    {
    name:"maria",
    level:'medio'
},
    {
    name:"andrea",
    level:'alto'
}
];

/*la pregunta es cuantos elementos son bajos,medios y altos.
    punto uno:
un map sobre el elemento en item.level para que me devuleva un array.
punto dos:
un reduce como histograma sobre el array del map


nota: se pueden encadenar los metodos asi:
let levels = data.map(item=>item.level).reduce((obj,item)=>{
    if...
    else...
    return obj;
},
});
*/

let levels= data.map(item=>item.level);

// console.log(levels)

let histoLevel = levels.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1
    }
    else{
        obj[item]++
    }
    return obj;
},{});

console.log(histoLevel);



// const lista=[1,2,2,3,1,5,4,7,8,6,9,2,3,5,7,8,3,8,7,6,3,7,8,2,3,4,5,6];

let range1=[]
let range2=[]
let range3=[]

for (i=0;i<lista.length;i++)
{
    
    if (lista[i]<=4)
    {
        range1.push(lista[i]);
    }
    else
    { 
        if(lista[i]>4 && lista[i]<=7)
            {       
                range2.push(lista[i]);
            }
        else
            {
                range3.push(lista[i]);
            }
    }
};

console.log(range1,range2,range3)



const lista=[1,2,2,3,1,5,4,7,8,6,9,2,3,5,7,8,3,8,7,6,3,7,8,2,3,4,5,6];


const r1=lista.filter(item=>item<=4);
const r2=lista.filter(item=>item>4 && item<=7);
const r3=lista.filter(item=>item>7);

const rango=
    {r1:r1.length,
    r2:r2.length,
    r3:r3.length}
;

console.log(rango);

const range=lista.reduce((obj,value)=>{
if(value<=4) {obj["range 1/4"]++;
}
else{
if(value>4 && value<=7){
    obj["range 5/7"]++;
}
else{
    obj["range 8/9"]++;
}
}
return obj;
}
,{
"range 1/4":0,
"range 5/7":0,
"range 8/9":0,
});

console.log(range)


