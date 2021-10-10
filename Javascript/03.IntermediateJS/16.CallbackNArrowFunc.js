// Callback and arrow function are also know as shot hand function..
var numbers = [2,3,6,8];
//normal function..
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(2));



//second way to return true or false by normal function
function isEven2(num){
    //if ur passing an conditional statment in return it will throw boolean value..
    return num % 2 === 0
}
console.log(isEven2(11));



//Third way is function as variables..
var isEven3 = function(num){
    return num%2 === 0;
}
console.log(isEven3(6));


//every() is an Array method, which is use to loop through every single value in array similar(map,filter,foreach)..
//but if every value or condition of every value is true then only every() return true..
var result = [2,3,8,6].every(isEven3);
console.log(result);



//Now callback and arrow function..
//callback or arrow function is introduce in ES6..
//Callback function is like..


//first way..
//In this arrow or callback function we use and "e" as a parameter the is an each number in array which passing one by one..
//if you use "{}" in this "()=>{}" then always you have to return the statement..
var res = [3,6,9,12].every((e)=>{
    return e%3 === 0;
});
console.log(res);

//second way..
//In this we no using "{}" in this "()=> statement" then we not have to write return statement..
var res2 = [3,5,9,12].every((e) => e%3 === 0);
console.log(res2);

//But the second is little bit complicetd,That why here is the third one..
//Third way..
var res3 = [2,4,6,8,10].every((e)=>(e%2 === 0));
console.log(res3);
//In above the "()=>(statement)" the second parenthises means returning the statement..


//callback or arrow function as variable..
var myEven = (e) =>(
e%2 === 0
);


console.log(myEven(10));
// or..

var res5 = [2,4,9].every(myEven);
console.log(res5);