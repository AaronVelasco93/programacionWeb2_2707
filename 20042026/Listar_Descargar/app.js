// varibales y referencias al DOM
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

// inicualizar el arreglo de usuarios desde localStorage o crear uno nuevo
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
// mostrar los usuarios en la salida
mostrarUsuarios();

// Evento para enviar datos desde el formulario
form.addEventListener('submit',
     function (e) {
    e.preventDefault(); // evitar recarga de página
    // Obtener las valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();
    //  crear un objetos con los datos del usuario
    const nuevoUsuario = {
        nombre: nombre,
        email: email
    };
    // agregar a el array
    usuarios.push(nuevoUsuario);
    // Guardar el array en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // mostrar los usuarios en la salida
    mostrarUsuarios();
    // limpiar el formulario
    form.reset();

});

function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2);
}
// Evento para descargar el JSON
descargarBtn.addEventListener('click', 
    function () {
       const contenidoJSON = JSON.stringify(usuarios, null, 2);
    //    cracion de un blob con el contenido JSON
    // Blob es un objeto que representa un archivo de datos, en este caso el contenido JSON, se guardar en binario 
    const blob = new Blob([contenidoJSON], { type: 'application/json' });
    //  crear una URL para el blob
    const url = URL.createObjectURL(blob);
    // crear un enlace de descarga <a> y simular un clic para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usuarios.json';
    a.click(); // ejecutar el clic para iniciar la descarga
    // liberar la URL del blob después de la descarga
    URL.revokeObjectURL(url);

});