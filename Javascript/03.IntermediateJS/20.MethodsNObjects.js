//user is an object with some properties..
var user = {
    firstName : 'Nil',
    lastName : 'Rajpurohit',
    verified : true,
    age : 21,

    //property can be an array..
    courseList :[],

    //property can be an function..
    buyCourse : function(courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount: function(){
        return `${this.firstName} is enrolled ${this.courseList.length} course`;
    },
};

//calling the property of user object..
console.log(user.firstName);
//call the property function of user object..
console.log(user.getCourseCount());

//calling the property function of user object..
user.buyCourse("ReactJS");
user.buyCourse("MongoDB");
user.buyCourse("NodeJS");
user.buyCourse("ExpressJS");

//calling the property function of user object..
console.log(user.getCourseCount());