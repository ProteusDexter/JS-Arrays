
const words=['spray', 'limit','elite','exhuberant'];

const newwords =[];
/*-----------------metodo for/if----------------------------------*/
// for (let index = 0; index < words.length; index++) {
//     const element = words[index];
//     if (element.length>=6 ){
//         newwords.push(element)   
//     }    
// }

for (let index = 0; index < words.length; index++) {
    
    if (words[index].length>=6 ){
        const element = words[index];
        newwords.push(element)   
    }    
}
console.log("newarray metodo for / if ",newwords);

/*--------------metodo filter------------------------------------*/
const newwords2=words.filter(item=>item.length>=6);
console.log("newarray2 metodo filter ",newwords2);


let orders=[
    {nombre:"fabian",cant:120, entregado:true},
    {nombre:"regina",cant:80, entregado:true},
    {nombre:"omar",cant:70, entregado:false},
    {nombre:"tatis",cant:110, entregado:false},
    {nombre:"paula",cant:150, entregado:true},
    {nombre:"fabiola",cant:105, entregado:false},
];


const neworders2=orders.filter(item=>!item.entregado);
console.log(neworders2);
const neworders=orders.filter(item=>item.entregado);
console.log(neworders);
const neworders3=orders.filter(item=>item.entregado && item.cant>=110);
console.log(neworders3);



//  query nos identifica aquellos textos que contengan un determinado string
// en este caso fabi esta contenido en fabian y fabiola por lo que el buscador
//nos entrega ambos.
const buscador = (query) => {
    return orders.filter (item => {
        return item.nombre.includes(query);
    })
};
console.log(buscador("fabi"));


