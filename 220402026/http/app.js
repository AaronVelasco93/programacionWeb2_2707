// Importar el modulo http que viene con node
const http = require('http');
// definir el puerto en el que se ejecutará el servidor
const PORT = 3009;

// crear el servidor
const server = http.createServer((req, res) => {
    // configurar la respuesta
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo!');
});
// escuchar el servidor en el puerto definido
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
