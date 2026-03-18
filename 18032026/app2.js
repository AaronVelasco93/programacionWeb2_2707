var miCarro = new Object();
miCarro.marca='Ford';
miCarro.modelo='Fiesta';
miCarro.anio=2013;
console.log(miCarro);

var miCarro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2013,
    verificado: false,
    emplacada: true,
    fechaMultas: ["12/05/2015","23/06/2024"]
}
console.log(miCarro);
//leer
console.log(miCarro.fechaMultas[1]);

miCarro.color="Azul";
console.log(miCarro.color);
console.log(miCarro);

miCarro.modelo="Ikon Fiesta";
console.log(miCarro);

delete miCarro.verificado;
console.log(miCarro);