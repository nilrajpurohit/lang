// import User from './34.Classjs'

const User = require('./34.Classjs');

//Creating an object of a class..
//Object is an copy of class..(to access the properties and method of class)..

//var objectname = newKeyword Class Constructor()..
var nil = new User('Nil Rajpurohit','Nilrajp@gmail.com');

//accessing the property of User class by an abject..
console.log(nil.email);

//accessing the method of class by object..
console.log(nil.addCourse('ReactJS'));
console.log(nil.addCourse('NodeJS'));
console.log(nil.totalCourseNo());