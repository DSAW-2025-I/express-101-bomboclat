const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const students = {
  1: { name: "Victor Andres", lastName: "Luna", email: "victorlume@unisabana.edu.co", id: "0000360773" },
  2: { name: "Juan Jose", lastName: "Campos", email: "juancamval@unisabana.edu.co", id: "0000342184" }
};

// Ruta base
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API en Vercel');
});

// Ruta de estudiantes
app.get('/user-info/:id', (req, res) => {
  const studentId = req.params.id;

  if (students[studentId]) {
    res.json(students[studentId]);
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});

// Verificar que PORT tiene valor
console.log("Valor de PORT:", PORT);

// Iniciar el servidor (solo si se ejecuta localmente)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

// Exportar la app para Vercel
module.exports = app;
