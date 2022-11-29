const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const usuarioSchema = new Schema({
    nombre_u: {   
        type: String,
        trim: true
    },
    correo_u: {   
        type: String,
      
        trim: true,
        unique: true
    },
});

module.exports = Mongoose.model("Usuario",usuarioSchema);