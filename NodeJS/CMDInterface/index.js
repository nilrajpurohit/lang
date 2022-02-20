#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const  {addCustomer,findCustomer,updateCustomer,removeCustomer,listCustomer} = require('./js/commands');
const { update } = require('./models/customerModel');

//Questions For Add Customer..
const questions = [
    {
        type:'input',
        name:'firstname',
        message : 'Customer First Name'
    },
    {
        type:'input',
        name:'lastname',
        message : 'Customer Last Name'
    },
    {
        type:'input',
        name:'phone',
        message : 'Customer Phone Number'
    },
    {
        type:'input',
        name:'email',
        message : 'Customer Email ID'
    }
];

program
.version('1.0.0')
.description('Client Managment System')

//Command For Add Customer..
// program
// .command('add <firstname> <lastname> <phone> <email>')
// .alias('a')
// .description('Add a customer')
// .action((firstname,lastname,phone,email)=>{
//     addCustomer({firstname,lastname,phone,email});
// });

program
.command('add')
.alias('a')
.description('Add a customer')
.action(()=>{
    prompt(questions).then(answers =>addCustomer(answers));
});

//Command For Find Customer..
program
.command('find <name>')
.alias('f')
.description('Find a customer')
.action((name)=>{
    findCustomer(name);
});

//Command For Update Customer..
program
.command('update <_id>')
.alias('u')
.description('Update a customer')
.action((_id)=>{
    prompt(questions).then((answers)=>updateCustomer(_id,answers))
});

//Command For Remove Customer..
program
.command('remove <_id>')
.alias('r')
.description('Remove a customer')
.action((_id)=>removeCustomer(_id));

//Command For Lists Customer..
program
.command('list')
.alias('l')
.description('Remove a customer')
.action(()=>listCustomer());

program.parse(process.argv);