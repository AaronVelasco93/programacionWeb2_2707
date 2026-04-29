const express = require('express'); // Import the Express library to create a router for handling user-related routes
const router = express.Router();// create a new router instance to define routes for user operations
const db = require('../db'); // Import the database module to interact with the database for user-related operations

// mostrar todo los usuarios en raiz
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users'; // Define the SQL query to select all users from the database    
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al obtener los usuarios');
        } else {
            res.render('index', { users: results });
        }
    });
});
// agrergar nuevo usuario
router.post('/add', (req, res) => {
    const {nombre, correo} = req.body;
    const sql = 'INSERT INTO users (nombre, correo) VALUES (?, ?)';
    db.query(sql, [nombre, correo], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al agregar el usuario');
        } else {
            res.redirect('/');
        }
    });
});
// mostrar formulario para el usuario existente
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al obtener el usuario');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});
// actualizar usuario
router.post('/update/:id', (req, res) => {
    const {nombre, correo}= req.body;
    const id = req.params.id;
    const sql = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?';
    db.query(sql, [nombre, correo, id],(err, results)=>{
        if (err) {
            console.error(err);
            res.status(500).send('Error al actualizar el usuario');
        } else {
            res.redirect('/');
        }
    });
});
// eliminar usuario
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al eliminar el usuario');
        } else {
            res.redirect('/');
        }
    });
});
//expotar todas las rutas en el app.js
module.exports = router;