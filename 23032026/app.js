let nombres = [];
function agregarNombre(){
    let nombre = prompt("Ingresa el nombre a agregar");
    if(nombre){
        nombres.push(nombre);
        alert(`!Nombre:  ${nombre}  -  Se agrego de manera exitosa`);
    }else{
        alert("El nombre no puede estar vacio");
    }
}
function mostrarNombres(){
    if(nombres.length === 0){
        alert("No hay nombres en el arreglo, por que esta vacio");
    }else{
        let mensaje = "Nombres almacenados\n";
        nombres.forEach((nombre,indice)=>{
            mensaje+=`${indice+1} .- ${nombre}\n`;
        });

        alert(mensaje);
    }
}
/*
Nombre almacenados
1.- Aaron
2.- Jonathan
3.- Daniel
*/
function mostrarMenu(){
    let opcion;
    do{
        opcion = prompt(`
            Opciones disponibles
            1.- Agregar Nombre
            2.- Mostrar nombre
            3.- Salir
            "Elige una opcion"
            `);
        
        switch(opcion){
            case "1":
                agregarNombre();
                //console.log("Se esta trabajando al funcion de agregar nombre");
                break;
            case "2":
                mostrarNombres();
                //console.log("Se esta trabajando la funcion de mostrar nombres");
                break;
            case "3":
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no valida");

        }
        }while( opcion !==  '3');
}
mostrarMenu();