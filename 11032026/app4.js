// funciones declarativas
function nummeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(nummeroAleatorio(1,15));

// Funciones expresadas    
const miNumero = function(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(miNumero(20,36));