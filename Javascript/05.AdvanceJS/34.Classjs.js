//Class is as Userdefine datatype.. Which is use to store properties and method in it..
//It is a Collection of properties and methods related to it..

class User{
    //construstor is and defautl method of class which is use to intialize the properties of class..
    //you can declare or by default the construct is there in class no need to define..(but define for intialize the properties).
    constructor(name,email){
        //all are propertes of class..
        this.name = name;
        this.email = email;
        this.courseList = [];
    }
//This is a Method of class..
    getInfo(){
        return{name: this.name,
                email: this.email,
                courseList: this.courseList,
                totalCourse: this.totalCourse};
    }
//This is a Method of class..
    addCourse(name){
        this.courseList = [...this.courseList, name];
        return(`The ${name} is added to courseList.`);
    }

    totalCourseNo(){
        return this.totalCourse = this.courseList.length;
    }
}

module.exports = User;