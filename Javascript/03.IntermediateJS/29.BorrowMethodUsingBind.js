//Borrowing an method properties of an object an bind to other object..
//Exmaple given below..

var nil = {
    fname : 'Nil',
    lname : 'Rajpurohit',
    getFullName: function(){
        return this.fname + " " + this.lname;
    }
}

console.log(nil);// This is an object that created at above..
console.log(nil.getFullName());// this is we access object property method..


//created an other object but with getFullName() method property..
//so now getFullName() which is pointing to nil object we gonna set to point to vishal object...(by using bind() proto properties).. 
var vishal = {
    fname: 'Vishal',
    lname: 'Wayker',
}

console.log(vishal);
//Now we gonna set getFullName point to vishal object..(using bind() prototype)..
//bind() always gives u a refernce of property so we must store it on variable and then call..

var vishalFullName = nil.getFullName.bind(vishal); //so now the vishalFullName is become an function.. which reference to the getFullName method property..
console.log(vishalFullName());

//Another way to bind..(using prototype call() property)..

var fullNameVishal = nil.getFullName.call(vishal);
console.log(fullNameVishal);
//or
console.log(nil.getFullName.call(vishal));