// definir el arreglo 
let tareas=[];
// funcion para mostrar el menu
function mostrarMenu(){
    return parseInt(prompt(`
        Opciones diponibles
        1.- Agregar una tarea
        2.- ver todas las tareas
        3.- Marcar tarea como completada
        4.- Salir
        "Elije una opcion:"
        `));
}
function agregarTarea (){
    let nombre = prompt("Introduce el nombre de la tarea: \n");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false
        }
        tareas.push(tarea);
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }

}
function verTarea(){
    if(tareas.length === 0){
        alert("Litas de tareas Vacia");
    }else{
        let mensaje = "Listas de tareas \n";
        tareas.forEach((tarea, index)=>{
            mensaje+=`${index + 1} .- ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente" }]\n`;
        });
        alert(mensaje);
    }
}
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Ingresa el numero de tarea para marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(`
        La tarea: ${tareas[numero-1].nombre} ha asido marcada como completada
            `);
    }else{
        alert("Numero de tarea invalido")

    }



}
// funcion de inicio para el flujo de nuestro programa
function inciarPrograma(){

    let bandera = true;
    while(bandera){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                //console.log(tareas);
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                bandera = false;
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no valida");

        }
        
        
    }
}

inciarPrograma();