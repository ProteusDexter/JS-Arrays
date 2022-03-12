/* some nos permite saber si alguno de los elementos de un arreglo
 (por lo menos uno de ellos cumple  con una condicion) */

const numbers=[1,13,3,9,5,2,7];

//metodo for para saber si alguno de los elementos es par
let esPar;
let noEsPar
let par;
for(i=0;i<numbers.length;i++){
    if (numbers[i]%2===0){
    esPar=true
    console.log(numbers[i],esPar)
    par=numbers[i]
    }
    else{
        noEsPar=false
        console.log(numbers[i],noEsPar)
    }
};
console.log("por lo menos hay un elemento par por ejemplo el  :",par, "por lo tanto es:", esPar)

//otra forma más eficiente es:

let rta=false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element %2===0) {
    rta=true;
    break;
    }
};
console.log("rta",rta);


//todavia mas eficiente con el metodo some
const rta2 = numbers.some(item=>item%2===0);
console.log("rta2",rta2);

/*    agendar citas o calendario de clases (una nueva
cita se empalma con por lo menos alguna que ya este hecha?)*/

const dates= [
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
        },
    {
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
    },
   
]

const newCita=
{
    startDate: new Date(2021,1,1,11),
    endDate: new Date(2021,1,1,13,30),
    title:"nueva cita",
    }

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlaping=(newDate)=>{
    return dates.some(date =>{
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start:newDate.startDate,end: newDate.endDate}

        )
    })
}
console.log("alguna cita se empalma? :",isOverlaping(newCita));


// al menos una orden fue entregada?
let orders=[
    {nombre:"fabian",cant:120, entregado:true},
    {nombre:"regina",cant:80, entregado:true},
    {nombre:"omar",cant:70, entregado:false},
    {nombre:"tatis",cant:110, entregado:false},
    {nombre:"paula",cant:150, entregado:true}
];


const resp =orders.some (item => item.entregado)
console.log("alguna entregado/a? :",resp);
