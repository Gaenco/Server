const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const profesoresSchema = new Schema({
    Edad: {
        type: String,
        require: true,
        trim: true
    },
    Nombre: {
        type: String,
        require: true,
        trim: true
    },
});


module.exports = Mongoose.model("profesores",profesoresSchema);