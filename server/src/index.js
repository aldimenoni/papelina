const express = require('express'); // Importa express para crear el servidor
const app = express(); // Crea una instancia de express
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de Papelina!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
