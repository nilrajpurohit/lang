//Array in javascript..
//Array is an datatype to store multiple of value under one variable..

var users = ['nil','nikul','vishal','hemant'];
//it will print the whole array..
console.log(users);
//In array the position which is index start with "0"..
//it will print the value which is on particular index..
console.log(users[0]);
console.log(users[2]);
//out of index it will not throw or show error, it will show undefine..(that means there is no value on that index).
console.log(users[10]);


//pop() is an array method..
// pop() remove the last element from the array..
users.pop();
console.log(users);

//push is an array method which is used to add element at the last position..
users.push('hemant');
console.log(users);

//indexOf is an array method which return the index as per the value pass in..
console.log(users.indexOf("nikul"));


//shift() is an array, this used to remove first element from the array and other unshift the index of array values..
users.shift();
console.log(users);

//unShift() is an array method, this is used to add element at first place by shifting the array index..
users.unshift('nilll');
console.log(users);

//Array.from() is used to create an array from string...
console.log(Array.from("nil"));

