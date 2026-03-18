const frutas =['manzana','pera','platano','jicama'];
//Tradicional
/*
for (fruta of frutas) {
    console.log(fruta);
}

for (fruta in frutas) {
    console.log(fruta);
}

console.log(frutas);
*/
frutas.forEach(fruta=>console.log(fruta));

/*
frutas.forEach((fruta,index,array)=>{
    console.log(fruta);
    console.log(index);
    console.log(array);
});
*/