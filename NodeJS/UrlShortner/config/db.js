const mg = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () =>{
try{
    await mg.connect(db,{
        useNewUrlParser : true,
    });
    console.log("MongoDB Connected!");
    }catch(err){
        console.log(`Error ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;