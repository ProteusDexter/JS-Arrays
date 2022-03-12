//  flat y flatMap    sirven para manipular arrays anidados.  (aplanar el array)

const matriz=[
    [1,2,3],
    [4,5,6,["a","b",["x","y","z"]]],
    [7,8,9]
];



const newMatriz2=matriz.flat();
console.log(newMatriz2);
const newMatriz=matriz.flat(3); // el argumento indica el nivel de profundidad en este caso son3
console.log(newMatriz);


//flat-map

const users=[
    { userId:1,userName:"tom",attributes:["nice","cute"]},
    { userId:2,userName:"mike",attributes:["nicecute"]},
    { userId:3,userName:"nico",attributes:["lovely","cool"]}
];
//usando las funciones de map y flat por separado
const resp = users.map(user=>user.attributes).flat();
console.log(resp);

//usando flatMap directo
const resp2 = users.flatMap(user=>user.attributes);
console.log(resp2);


