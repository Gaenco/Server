const express = require("express");
const router = express.Router();

//importacion de rutas
const usuarioRouter = require("./usuario.router");
const profesorRouter = require("./profesores.router");


//definicion de rutas
router.use("/usuario", usuarioRouter);
router.use("/profesor", profesorRouter);

module.exports = router;