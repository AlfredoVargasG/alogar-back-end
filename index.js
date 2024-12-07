const express = require('express'); // Importar el framework Express
const dotenv = require('dotenv'); // Importar dotenv
dotenv.config(); // Configurar dotenv
const app = express(); // Crear una instancia de la aplicación Express
const routes = require("./api/routes/index"); // Importar las rutas
const compression = require('compression'); // Importar compression

// Definir un puerto para el servidor
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(compression());
app.use(express.json());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`); // Mensaje en la consola
});
