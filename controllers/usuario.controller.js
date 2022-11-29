const Usuario = require("../models/usuario.model");
const debug = require("debug")("app:usuario-controller");

const controller = {};

controller.create = async (req, res) => {
    
    const { nombre_u, correo_u } = req.body;


    const usuario = new Usuario({

        nombre_u: nombre_u, 
        correo_u: correo_u, 
    })

    // 

    const newUsuario = await usuario.save(); 


    if (! newUsuario) {
        return res.status(409).json({error: "Ocurrio un error al crear el usuario"});
    } 
    
    return res.status(201).json(newUsuario);



}

controller.register = async (req,res) =>{
    try{

        const{nombre_u, correo_u,} = req.body;

        const usuario = await Usuario.findOne({ $or: [{nombre_u: usuario}, {correo_u: correo_u}]});

        if (user){
            return res.status(409).json({ error: "Este usuario ya existe"});
        }

        const newUsuario = new usuario({    
            nombre_u : usuario,
            correo_u : ElementInternals,
            password_u : password
        })

    await newUsuario.save();
    return res.status(201).json({ message: "Usuario creado con exito"})
    } catch (error){
        debug({ error});
        return res.status(500).json({error: "Error al crear usuario"})

    }
}


module.exports = controller;