//Prototype is Use for injecting the additional/extra properties under object from outside the object..
//Prototype is help to create properties from outside without touching the main defination of object..


//Functional Object.
var User = function(Fname,Lname,age){
    this.Fname = Fname;
    this.Lname = Lname;
    this.age = age;
    //property as a function.
    this.getAge = function(){
        return this.age;
    }
}

//Creating an Object i.e 'Nil' of functional object i.e 'User'..
var Nil = new User('Nil','Rajpurohit',21);
console.log(Nil.Fname);
console.log(Nil.age);
console.log(Nil.getAge());


//adding another property in User functional object using prototype..
User.prototype.getFullName = function(){
    return this.Fname +" "+ this.Lname;
}


//Accessing the new added properties by 'Nil' Object..
console.log(Nil.getFullName());