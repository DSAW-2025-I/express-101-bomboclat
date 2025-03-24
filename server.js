const express = require('express');
const app = express();
const PORT = 3000;


const students = {
  1: { name: "Victor Andres", lastName: "Luna", email: "victorlume@unisabana.edu.co", id: "0000360773" },
  2: { name: "Juan Jose", lastName: "Campos", email: "------", id: "------" } //juanjo pon tu infomracion aqui y testea
};


app.get('/user-info/:id', (req, res) => {
  const studentId = req.params.id;

  if (students[studentId]) {
    res.json(students[studentId]);
  } else {
    res.status(404).json({ error: "Estudiante no encontrado" });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
