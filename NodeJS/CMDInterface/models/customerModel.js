const mongo = require('mongoose');

//Customer Schema..
const customerSchema = mongo.Schema({
    firstname : {type: String},
    lastname : {type: String},
    phone : {type: String},
    email : {type: String},
});

//Export 
module.exports = mongo.model('customer',customerSchema);