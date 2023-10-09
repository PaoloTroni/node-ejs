//imports (requires)
require("dotenv").config();
const express = require("express");
const path = require("path");
const ejs = require("ejs");

//destructurig de los controllers

const { homepageController } = require("./controllers/homepage-controllers");
const {
  tosController,
  contactoController,
} = require("./controllers/others-controllers");

const {
  submitFormController,
} = require("./controllers/submit-form-controller");
const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/error-handling");

//server creado con express
const app = express();

// Configuración de motor de plantillas y archivos dinámicos
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middleware para datos de formulario
app.use(express.urlencoded({ extended: true }));

//rutas dinámicas

app.get(["/home", "/"], homepageController);

app.get("/tos", tosController);

app.get("/contacto", contactoController);

app.post("/submit-form", submitFormController);

//################################################################
//Middleweres de gestión de errores

app.use(errorHandler);

app.use(notFoundHandler);

//################################################################
//Puerto en escucha

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://${process.env.PORT}`);
});
