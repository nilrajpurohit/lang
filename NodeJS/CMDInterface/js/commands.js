const mongo = require('mongoose');

//Map global promise..
mongo.Promise = global.Promise;

//Database connection..
const db = mongo.connect("mongodb://localhost:27017/CMDInterface");

//Import CustomerModel..
const customer = require('../models/customerModel');

//Add Customer..
const addCustomer = (customerInfo) =>{
    customer.create(customerInfo).then(customerInfo=>{
        console.info("New Customer Added !");
        mongo.disconnect();
    }) 
}

//Find Customer..
const findCustomer = (name)=>{
    //Make Case Sensetive
    const search = new RegExp(name , 'i');
    customer.find({$or:[{firstname:search} , {lastname:search}]}).then(customerInfo=>{
        console.info(customerInfo);
        console.info(`${customerInfo.length} matches found !`);
        mongo.disconnect();
    })
}

//Update Customer..
const updateCustomer = (_id,customerInfo)=>{
    customer.updateOne({_id},customerInfo).then(customerInfo=>{
        // console.info(customerInfo);
        console.info('Customer Updated !');
        mongo.disconnect();
    })
}

//Remove Customer..
const removeCustomer = (_id)=>{
    customer.deleteOne({_id}).then(customerInfo=>{
        console.info('Customer Removed !');
        mongo.disconnect();
    })
}

//List Customer..
const listCustomer = ()=>{
    customer.find().then(customerInfos=>{
        console.info(customerInfos);
        console.info(`${customerInfos.length} customers !`);
        mongo.disconnect();
    })
}


//Export All Methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}