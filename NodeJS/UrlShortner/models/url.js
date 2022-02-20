const mg = require('mongoose');

const urlSchema = new mg.Schema({
    urlCode : String,
    longUrl : String,
    shortUrl : String,
    date : {type : String, default : Date.now} 
})

module.exports = mg.model('Url',urlSchema);