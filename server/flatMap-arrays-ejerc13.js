//flatMap

//  ejercicio con calendarios

const calendar= {
    primaryCalendar:[
    {
    startDate: new Date(2021,1,1,10),
    endDate: new Date(2021,1,1,11),
    title:"cita de trabajo",
    },
    {
    startDate: new Date(2021,1,1,10),
    endDate: new Date(2021,1,1,11),
    title:"cita de trabajo",
    },
    {
    startDate: new Date(2021,1,1,13),
    endDate: new Date(2021,1,1,14,30),
    title:"salir a comer",
        }],
    secundaryCalendar:[{
    startDate: new Date(2021,1,1,15),
    endDate: new Date(2021,1,1,15,30),
    title:"cita con mi jefe",
    },
    {
    startDate: new Date(2021,1,1,20),
    endDate: new Date(2021,1,1,21),
    title:"cena",
    },
    {
    startDate: new Date(2021,1,1,21,30),
    endDate: new Date(2021,1,1,23),
    title:"conferencia on line",
    }],

};

// es un objeto con dos calendarios, queremos un array con las fechas de inicio de ambas citas.

// const resp= Object.keys(calendar)
// console.log(resp); //[ 'primaryCalendar', 'secundaryCalendar' ]

const resp2= Object.values(calendar);
resp2.flat()
// console.log(resp2);

// const resp3= resp2.flatMap(item=>item.startDate);
// console.log(resp3);   //[ undefined, undefined ]

/* me esta regresando un undefined   una manera de saber que pasa es con 
un return y un console.log*/

/* nota: observese que arriba no existen los corchetes de la funcion,
por eso no sería posible recibir un return, es necesario agregarlos.*/

// const resp3= resp2.flatMap(item=>{
// console.log("item",item);

// return item.startDate;
// });

/*flatmap   no permite actuar sobre los niveles del array
pero el  item.startDate del return  es un array, por lo que 
podemos hacer un map sobre el  vamos a comentar el codigo y a 
actuar sobre el*/

const resp3= resp2.flatMap(item=>{
    // console.log("item",item); 
    return item.map(fecha=>fecha.startDate);
    });

    console.log(resp3);
    

