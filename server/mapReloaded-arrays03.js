let orders=[
    {nombre:"fabian",cant:120, entregado:true},
    {nombre:"regina",cant:80, entregado:true},
    {nombre:"omar",cant:70, entregado:false},
    {nombre:"tatis",cant:110, entregado:false},
    {nombre:"paula",cant:150, entregado:true}
];



let neworders3=orders.map(item=>{
   
    return {...item,tax:.19}
});
console.log("nuevo arreglo3 ",neworders3);
console.log("arreglo original ",orders);


//Nota : es comun que el programa no reconozca los comentarios  pór lo
//que los tuve que poner aparte
/*para ello usamos el metodo de propagacion que nos permite entregar cada 
    elemento y agregar el nuevo atributo de acuerdo al metodo en que se 
    tiene que hacer*/ 



// let neworders=orders.map(item=>item.cant);
// console.log (orders)
// console.log(neworders);


// let neworders2=orders.map(item=>{
//     item.tax=.19
//     return item}
// );
// console.log("nuevo arreglo2 ",neworders2);

/*nota sin embargo si ahora imprimimos el arreglo original en pantalla 
veremos que el arreglo tambien se alteró.*/

// console.log("arreglo original ",orders);


/*en este caso al retornar el objeto item del objeto orders, estamos copiando
la posicion en memoria del objeto en si por eso estamos modificando al objeto
orders, para proteger al objeto orders debemos crear un  uevo objeto de la 
siguiente manera..*/

