//False and True values.

/* undefine
    NaN
    null
    ''
    0 
    This all are False value other then this all are True value */

//Example: 

var userName = '';

if(userName){
    console.log('Hello User');
}

if(0){
    console.log("The Value is 0");
}

if(undefined){
    console.log("Variable is undefine");
}


//True value Example.
if("Undefine"){
    console.log("variable is undefine");
}

if(2+2){
    console.log("4");
}

if(userName == ''){
    console.log("UserName is '' ");
}