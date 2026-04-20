// Variables gobales
// arreglo donde se almacenan los usuarios registrados
let usuarios = [];
// obtener referencia del DOM a los elementos  del HTML principales
const form = document.getElementById('formUsuario');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const BtnDescargar = document.getElementById('descargarBtn');
function generarID(){
    return usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
}
// Eventos del formulario
form.addEventListener('submit', 
    function(e) { 
        e.preventDefault(); // evitar recarga de página
        //  obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('correo').value.trim();
        // agregar nuevo usuario al array con id generado
        usuarios.push({ id: generarID(), nombre, email });
        mostrarUsuarios(); // actualizar la tabla
        form.reset(); // limpiar el formulario     
}); 
// Funciones de  visualizacion 
// mostrar todos los usuarios en la tabla 
// recorrer cada usuario dentro del Array y crear una fila en la tabla con sus datos
// crear la fila con los datos para la edicion y eliminación de cada usuario
// agregar boton para eliminar el usuario y asignar evento para eliminarlo del array y actualizar la tabla
function mostrarUsuarios() {
    tabla.innerHTML = '';// limpiar la tabla antes de mostrar los usuarios
    // por cada usuario  enb el array se crear una fila en la tabla con sus datos
    usuarios.forEach((user,index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td contenteditable onblur="ediarCampo(${index},'nombre', this.textContent)">${user.nombre}</td>
            <td contenteditable onblur="ediarCampo(${index},'', this.textContent)">${user.email}</td>
            <td><button onclick="eliminarUsuario(${index})">Eliminar</button></td>
        `;
        tabla.appendChild(row);
    });
}
// funcion de edicion
function ediarCampo(index, campo, valor) {
    usuarios[index][campo] = valor.trim(); // actualizar el campo editado en el array

}
// Funcion de eliminación
function eliminarUsuario(index) {
    if( confirm('¿Estás seguro de eliminar este usuario?')) {
        usuarios.splice(index, 1);// eliminar el usuario del array
        mostrarUsuarios();// actualizar la tabla
    }
}
//  evento de inportacion de JSON
inputArchivo.addEventListener('change', 
    function(e) {
    const archivo = e.target.files[0]; // obtener el archivo seleccionado
    const lector = new FileReader(); // crear un lector de archivos
    
    // cuando el archivo se haya cargado, procesar su contenido
    lector.onload = function(e) {
        try {
            const datos = JSON.parse(e.target.result); // parsear el contenido del archivo como JSON 
            // validar que sea un arreglo
            if (Array.isArray(datos)) {
                usuarios = datos; //reemplazar el array de usuarios con los datos importados
                mostrarUsuarios(); // actualizar la tabla con los usuarios importados
            } else {
                throw new Error('El archivo JSON debe contener un arreglo de usuarios');
            }
        }catch (error) {
            alert('Error al cargar el archivo JSON: ' + error.message);
        }
    };
    lector.readAsText(archivo); // leer el archivo como texto

});

BtnDescargar.addEventListener('click', 
    function() {
        const blb = new Blob([JSON.stringify(usuarios, null, 2)], { type: 'application/json' }); // crear un blob con el contenido JSON de los usuarios
        const url = URL.createObjectURL(blb); // crear una URL para el blob
        const a = document.createElement('a'); // crear un elemento de enlace
        a.href = url; // asignar la URL al enlace
        a.download = 'usuarios.json'; // establecer el nombre del archivo a descargar
        document.body.appendChild(a); // agregar el enlace al DOM
        a.click(); // simular un clic en el enlace para iniciar la descarga
        document.body.removeChild(a); // eliminar el enlace del DOM
        URL.revokeObjectURL(url); // liberar la URL creada para el blob

    });