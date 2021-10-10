//Destructing Data in javascript...

var User = ["Nil Rajpurohit", 3 , "Admin"];

//This is call accessing data by position or index..
console.log(User[0]);

//But we can also access each value of array by storing in seprate variable..
//But this is not the actual way to destruct the data..
var name = User[0];
var course = User[1];
var role = User[2]; 

console.log(role);

//The Actual way is this...
//That means we together assign the value of array under the variable..
var [name, course ,role] = User;
console.log(name); 


//But in case of Object the name of property and the assigned variable must be same..(javascript check that)..
var person = {
    name: "Nil",
    age:21,
    address:"Mumbai",
}
//this is an long way to access property..(that why we destruced it..)
console.log(person.address);

//like this..
var {name,age,address} = person;
console.log(address);


