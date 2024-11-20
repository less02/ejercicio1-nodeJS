const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para procesar el formulario
app.post('/registro', (req, res) => {
    const { nombre, edad, correo, curso } = req.body;

    // Validar datos
    if (!nombre || !edad || !correo || !curso) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    // Mostrar página de confirmación
    res.send(`
        <h1>Registro Completado</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Curso:</strong> ${curso}</p>
        <a href="/">Volver al formulario</a>
    `);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
