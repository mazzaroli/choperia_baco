const express = require('express');
const path = require('path');

const app = express();

// Configuración básica de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Definir rutas básicas
app.get('/', (req, res) => {
    res.send('Bienvenido a Mi Restaurante');
});

// Si estamos en modo de producción (para servir el frontend)
if (process.env.NODE_ENV === 'production') {
    // Servir los archivos estáticos de React desde la carpeta de construcción (build)
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    // Ruta genérica para servir index.html desde React en cualquier otra ruta
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

// Configurar puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app;