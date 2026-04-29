// traer el mudulo de express
const express = require('express');
const path = require('path');
// crear una instancia de express
const app  = express();
// puerto para el servidor
const PORT = 3010;
// configurar el servidor para recibir datos en texto plano
app.get('/',(req,res)=>{
    // mandar un mesaje al cliente
    //res.send('Hola Mundo');
    // mandar un archivo HTML al cliente
    //res.sendFile("/Users/huronmarron/Desktop/clases2026/programacionWeb2_2707/220402026/node/index.html");
    res.sendFile(path.join(__dirname,'index.html'));
});
// iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
