//basic function of javascript...
//to declare a function by using function keyword..
function syaHello(){
    //console.log() method is used to print out in the terminal/console..
    console.log("Hello This is Nil Rajpurohit!");
}
//for use the function we must call it like..
syaHello();


//function with parameters..(can be one or more)..
function sayHello2(name){
    console.log("Hello This is ",name);
}
//passing the value at the place of parameter..
sayHello2("Nil Rajpurohit");



//The diffrent between console.log() and return is return doesn't print the statement it just return it..
function sayHello3(){
    return "Hello This is Nil";
}

//now we gonna assign a variable and its value will be the string which return by the function..
var value = sayHello3();
console.log(value);

//return statement and console.log() are two diffrent things
//if u do anything like console.log() after return statement then it will never execute because the return statement is the last stage of block to execute function..
//if u want to print directly by function then you should go with console.log()..
//if u want just return the value to other place(in function,loop,condition,variable) you should go with return statement.. 



//Inject statement is very usefull and now generation are using that only..(example below)
//its very important to know what it is..(Inject variable/parameter in statement)..
function sayHello4(name,course){
    console.log(`Hello this is ${name},  Today we gonna look functions of ${course}`);
}

sayHello4("Nil","Javascript");