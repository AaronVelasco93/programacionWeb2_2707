// arreglo donde se guardan los usuarios registrados
const usuarios = [];

// guardar el formulario y salida|
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

// función para manejar el envío del formulario
form.addEventListener('submit', 
    function(event) {
    event.preventDefault(); // evitar que el formulario se envíe de forma tradicional
    // obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();

    // crear un objeto de usuario
    const nuevoUsuario = {
        nombre: nombre,
        email: email
    };
    // guardar en el arreglo
    usuarios.push(nuevoUsuario);

    
    // mostrar el usuario JSON registrado en la salida con formato JSON
    salida.textContent = JSON.stringify(nuevoUsuario, null, 2);
    
    // limpiar el formulario
    form.reset();
console.log(usuarios); // para verificar que los usuarios se están guardando correctamente

});

