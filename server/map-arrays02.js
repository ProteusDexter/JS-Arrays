const nombres=["fabian","regina","luis"];

let saludos=[];
for (let index = 0; index < nombres.length; index++) {
    const item = nombres[index];
    saludos.push(`Hola  ${item}`);    
}

//usando el metodo map se haria así:

const saludos2=nombres.map(item=>`Hola  ${item}`)
console.log("arreglo original :",nombres)
console.log("metodo for :", saludos)
console.log( "metodo map :", saludos2)