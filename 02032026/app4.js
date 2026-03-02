//              0        1        2       3          4
let frutas = ["pera", "Manzana","fresa","mango","aguacate"];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log("------------------------------------");
console.log(frutas.length);


console.log("-------------FOR OF-----------------------");


for(let fruta  of frutas){
    console.log(fruta);
}

console.log("----------------FOR IN--------------------");


for(let fruta  in frutas){
    console.log(fruta);
}