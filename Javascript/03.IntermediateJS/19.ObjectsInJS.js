//Objects in JS..
//Objects is differ from Array..
//Array is a collection of values(it can be object)..
//Object is a collection of properties..
//Example Below..

// The user is object under that all are properties of user..
var user = {
    firstName : 'Vipul',
    lastName : 'Rajpurohit',
    verified : true,
    age : 21,
    countLoggedIN : 10
}

//The users is an array of objects..
var users = [
    {
        firstName : 'Nil',
        lastName : 'Rajpurohit',
        verified : false,
        age : 21,
        countLoggedIN : 10   
    },
    {
        firstName : 'Vishal',
        lastName : 'Wyaker',
        verified : true,
        age : 21,
        countLoggedIN : 20
    }
];

console.log(user);
console.log(); //just to break the line in console..
console.log(users);

//access property by its object..
 console.log(user.firstName);
 console.log(users[0].firstName);
 console.log(users[1].firstName);


 //we can change the property value...
 user.verified = false;
 console.log(user);

 console.log();
 
 users[0].verified = true;
 console.log(users[0]);


console.table(user);