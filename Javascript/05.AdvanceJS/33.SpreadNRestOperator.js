// Spread and REST are  two same symbolic operator but the functionality is differe or reverse from each other..

//Speard Operator...

// "..." is called spread operator which is use to ungroup the group value..
var myObject = [1,2,3,6,7,4,5];

//This is noraml function which takes two parameter..
function sumOne(a,b){
    return a+b;
}

//In the sum function we are passing array with and spread operator..
//So now Spread operator ungroup the values from array and put values how much number of parameter is required..
//The Two parameter is required so from the array it will put first two (i.e 1 and 2) value as a parameter other will be ignored..
//But with the spread operator we must have to pass the variable name which have an group of values..(i.e "...myObject");
console.log(sumOne(...myObject));

//Basicly the spread operator is used to ungroup the values..
//So the REST operator is Revers of spread operator that means it make group of ungroup values.. 
//"..." is also called as REST operator..
//you can guess it by the setuation..


//The sumTwo function will add all the number in as parameter but i don't know how much parameter is passed it can be 10,5,200 or anything..
//So here come the REST operator..
//First we pass and parameter as REST Operator but Name can be any like args,para,or anything..


function sumTwo(...args){
    console.log(...args);       // this is just for check what is "...args" contains.
    let sum = 0;
    for (const arg of args){    //we have to loop through ...args
        sum = sum + arg;        //so now it will take single single value from args and put it in arg and add it in sum..
    }
    return sum;
}

console.log(sumTwo(1,2,3,4,10));        //now we are passing multi value as parameter in sumTwo()..


//We can also ignore sum values from it (example given below)...
//The a,b,...args is use to say that the a,b that means start two parameter take as it is and the rest of it make a group i.e "..args"
function sumThree(a,b,...args){
    console.log(...args);
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }

    return [sum , a+b];
}

console.log(sumThree(1,5,2,3,4));       //so now a,b (i.e 1,5 are two parameter and the rest all is a group and taking as a thrid parameter)..


