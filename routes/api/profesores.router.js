const express = require("express");
const router = express.Router();

const profesorController = require("../../controllers/profesores.controller");

router.post("/", profesorController.create);

router.get("/", (req, res, next) => {

    return res.status(200).json({ message: "Profesor bien" });

});

module.exports = router;