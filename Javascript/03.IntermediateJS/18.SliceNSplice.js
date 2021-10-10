//Slice and Splice are methods of Array..
//Slice() is use like cutting a big cake and take that cutting part..

//First Slice()..
var numbers = [1,3,5,9,7,2,4,6];
//as per the javascript the starting index is inclusive and ending index is exclusive..
console.log(numbers.slice(1,3));
console.log(numbers.slice(3));


//Second Splice()..
//Splice() is use to delete the array index value and put or replace that value by given value as parameter..
var num = [1,2,5,6,8,9];

//IN splice() method there is three parameters 'starting index','no of deleting value','replacing value'..
//The second parameter is not an ending index it is and no of count to delete after the starting index..
console.log(num);
num.splice(1,3,"Hi");
// num.splice(1,3,"Hi","Bye");
console.log(num);
