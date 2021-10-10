// fill and filter are methods which is use under the array..

//First..(fill())
//fill is use to replace the array value by user value..
// in fill there are three parameters fill('value by replace', 'starting index' , 'ending index')...

//if we passing a single parameter that consider as 'value by replace'..
var numbers = [2,5,6,8,3,9];


//this gonna replace all the value under the array by 0..
// var result = numbers.fill(0);
// console.log(result);


//This gonna replace all the value by "h"...
// console.log(numbers.fill("h"));


//if we passing two parameter first will be the 'value by replace' and second will 'starting point'...
//it will leave index 0 and 1 as it is and all other value replace by passing value..(i.e "i").
// console.log(numbers.fill("i",2));

//if we all three parameter i.e 'value by replace' , 'starting index' , 'ending index'..
// console.log(numbers.fill('h',2,5));

//in javascript the starting index is inclusive and ending point is exclusive..(go and serach about this)..



//Second...(filter).
//Filter() is similar as(every,map,foreach)..
//filter create and another array as per condition..
//filter take an callback function...(what is callback and arrow function already discus in previous file).
var result2 = numbers.filter((num) => (num%2 !== 0));
console.log(result2);
