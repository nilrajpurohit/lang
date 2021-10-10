 //The context and global context are kind of a scanner who scan the enter code..(expamle below)..
 
 
 //function call first..
 sayName();
 //function declartion later..
 function sayName(){
     console.log("Nil Rajpuohit");
 }


 //variable call first..
 console.log(name);
 //Variable declartion later..
 var name = "Nil Rajpurohit";

 //as above exmaple the context is working behind of code that scan the whole code and then run it..
 // There are two cases:
 // 1. Function declartions are scanned and made available..
 // 2. Variable declartions are not scanned and made undefined..
 //Examples above and below..


 //normal function..

 //call first.
 sayName2();
 //declare later.
 function sayName2(){
     console.log('Hey There, its Nil!');
 }


 //variable function..
 
 //call first.
//  sayName3();
 //declare later.
 var sayName3 = function(){
     console.log('Hey There, its NilRajp');
 }


//as above example first is normal function which is declare after to its call, made available by context.
// and second one is variable function which is declare  after to its call, made undefine by context.

//global and local context..

//this is global context variable..
var name = 'nil';

function Name(){
    // this is local context variable..
    var name = 'NilRajp';
    console.log(name);
}
// This console.log() doesn't know about local context variable.. (run the code to find out)..
console.log(name);

//This Name() does know about the global context name variable but that he have its own local context name variable..
//so The Name() method doesn't take the global one if he have the same variable name as local..
Name();
