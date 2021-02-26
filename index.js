const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
require("dotenv/config");

const homeRoute = require("./routes/home");
const drugRoute = require("./routes/drugs");

mongoose.connect(process.env.MONGO_DB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", homeRoute);
app.use("/drugs", drugRoute);
//Simular un sistema de inventario de farmacia.

/* POST->Registrar un medicamento
o Nombre
o Tipo de medicamento
o Cantidad
o Fecha de registro
o Precio
o Ubicación
GET->Traer la lista de medicamentos guardados
GET->Traer un elemento por id o nombre
PUT->Editar un documento de la API (por ID)
DELETE-> Eliminar un documento de la API (por ID)
Podrá utilizar SQLITE, MONGODB, O OBJETOS en memoria para almacenar los datos de la API */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
