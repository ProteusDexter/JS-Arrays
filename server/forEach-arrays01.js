const letras=['a','b','c'];

letras.forEach(item => console.log('forEach',item));

for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log('for',element)    
}

// Se puede acceder an shortcut  simplemente escribien for y elegir el elemento con el cuadrado
// para que se auto esciba el metodo y solo se tiene que ajustar.

letras.forEach(element => {   console.log(`antes del console.log va el 
codigo que se tiene que escribir, por ejemplo: `);
console.log('forEach',element)
    
});

let letter=[1,2,3];

letter.forEach(element => {
   console.log (element*2)});