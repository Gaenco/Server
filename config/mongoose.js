const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "3000";
const dbname = process.env.DBNAME || "WebLearningDB";

const dbUri = 'mongodb+srv://Gabo:jewel2003@weblearningcluster.pgx5w0i.mongodb.net/test' || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async () =>{
    debug(dbUri);
    try {
        await Mongoose.connect(dbUri); 
        debug(" Successful database connection ");
    } catch (error) {
        debug("Error while connecting to database");
        process.exit(1);
    }
      
}

module.exports = {
    connect
}