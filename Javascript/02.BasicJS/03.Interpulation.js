// User SingUp.
// Basically The Data we take from WebPage (Form Tag) but this is just an example.

var name = "Nil";
var surname = "Rajpuohit";
var userID = "abc123";
var password = "Nil123";
var confirmPass = "Nil123";
var email = "Nilraj@gmail.com";
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;


//Normal way to write statment with variable / Vlaue.
console.log('User full name is: ',name+surname);
console.log('User ID is: ',userID);
console.log('User Password is: ',password);
console.log('User Email is: ',email);
console.log('User Logged from Google: ',isLoggedInFromGoogle);
console.log('User Logged from facebook: ',isLoggedInFromFacebook);


//Interpulation or Injecting the variable in the statement.(Another way to write stuffs).
console.log(`
        User full Name is: ${name+surname}
        User ID is : ${userID}
        User Password is: ${password}
        User Email is: ${email}
        User is logged from google: ${isLoggedInFromGoogle}
        User logged from facebook: ${isLoggedInFromFacebook}
`);
