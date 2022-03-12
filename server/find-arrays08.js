//find    Me devuelve el primer elemento que cumpla con la condicion especificada

const numbers=[
    1,30,49,29,10,49,13
]

const cond =28;

let find=false
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    
    if (element===cond){
        console.log("encontramos el num ",element)
        find=true
        break;
    }
}
if (find ===false){
    console.log(`El num ${cond} no se encuentra en la lista`)
}

// con find nos devuelve un undefined si no encuentra el elemento

const resp5=numbers.find(item=>item===28)   // la respuesta se asigna a la resp5
console.log("el numero encontrado es el ",resp5);





const products = [
{
    name: "Pizza",
    price: 12,
    id: '🍕'
},
{
    name: "Burger",
    price: 23,
    id: '🍔'
},
{
    name: "Hot dog",
    price: 34,
    id: '🌭'
},
{
    name: "Hot cakes",
    price: 355,
    id: '🥞'
},
];

//actuando sobre un objeto
const resp6=products.find(item=>item.id==='🍔')
console.log(resp6)

/*existe el metodo findIndex que nos devuelve el indice del elemento
o sea la posicion en el arreglo  Nota: si no encuentra el elemento
nos retornará   (-1)*/
const resp7=products.findIndex(item=>item.id==='🍔')
console.log("el elemento está en la posición  ",resp7)

