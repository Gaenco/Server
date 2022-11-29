const { Router } = require("express");
const Profesor = require("../models/profesores.model");

const controller = {};

controller.create = async (req,res) =>{
    const {Edad, Nombre} = req.body; 

    const profesor = new Profesor({
        Edad: Edad,
        Nombre: Nombre,
    });

    const newProfesor = await profesor.save();

    if (!newProfesor){
        return res.status(409).json({error: "Ocurrio un error al agregar un profesor"});
    }
    return res.status(201).json(newProfesor);
}

controller.findAll = async (req, res) => {
    try {
      const profesor =
        await Profesor.find({});
  
      return res.status(200).json({ profesor });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error interno de servidor" });
    }
  }
