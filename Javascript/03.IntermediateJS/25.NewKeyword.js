// new keyword in javascript..


//The User is normal function as well as functional object..
//In the normal function this keyword points toward the window object but.
// when we create an object with new keyword then this keyword point to the function itself..
//(and we can access the properties of function under itself)..

var User = function(firstname,secondname){
    this.firstname = firstname;
    this.secondname = secondname;
    this.getFullName = function(){
        return this.firstname + this.secondname;
    }
}

//It will show  undined because with new keyword this keyword under normal function points to window object..
var Nil = User('Nil','Rajpurohit');
console.log(Nil);

//It will show the properties of the function as an object,
// because we create an object with new keyword and now it pointing itself..
var Nil = new User('Nil','Rajpurohit');
console.log(Nil);
