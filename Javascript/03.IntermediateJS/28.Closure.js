//Closure in Javascript..
//Closure is kind like a function which execut by the execution is not end because it still holding something..
//Emaple given below..

function addition(x){
    //A function is returning a function..
    return function(y){
        return console.log(x+y);
    }
}

var add = addition(5); // The addition() will not end up the execution because it is still holding the other function which is pass as a refernce to the add variable..
add(4); //so add is holding the refernce of the return function by addition now it time to call that fucntion by reference variable i.e add..


//another way of Clousre..i.e(curring concept)..
addition(5)(3); // The second "()" means call the function which is return by addition()...