/* .includes retorna un booleano dependiendo de si se cumple o no la cond
de que el elemento sea parte o no de el arreglo*/


const mascotas=["perro","gato","perico","tortuga","hamster"];
const cond="tortuga"

//con el ciclo for
let find=false;
for (let index = 0; index < mascotas.length; index++) {
    const element = mascotas[index];
    if(element===cond){
        console.log(`Se encontró a ${cond} dentro del arreglo
por lo tanto la cond es : ${find}`) //aqui el scope de find no nos ayuda ya que es dif al de la salida
        find=true
        break;
    }};
    if(find===false){
        console.log(`El elemento ${cond} no se encuentra en
el arreglo por lo tanto la cond es : ${find} `)
    };



//mientras que con includes 

// console.log(mascotas.includes(cond))    esto me retorna el booleano

if(mascotas.includes(cond)){
    console.log(`Se encontró a ${cond} dentro del arreglo
por lo tanto la cond es : ${find}`)
}
else{
    console.log(`El elemento ${cond} no se encuentra en
el arreglo por lo tanto la cond es : ${mascotas.includes(cond)}`)
}
