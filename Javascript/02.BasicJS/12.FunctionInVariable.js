//There is one other type to declare the function..
//First way: This is the normal funtion
//This is an function which taking two parameter name and role by role we gonna return the statment as switch condition true.
function getUserRole(name , role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break; //break is not neccessary in javascript(this is a smart language:) )..
        case "subadmin":
            return `${name} is subadmin only delete and create or add the course`;
            break;
        case "testprep":
            return `${name} is only to take test on course`;
            break;
        case "user":
            return `${name} is user who consume the content`;
            break;
        default:
            return `${name} is a trail user`;
            break;
    }
}

//there are two way to printout..
console.log(getUserRole("Nil","subadmin"));

var result = getUserRole("Nil","subadmin");
console.log(result);


//Second way: passing a function in variable..
//In this case we declared a function under the variable i.e Function In variable
//A variable is as function wich have two parameter..(logic is same as above normal function)
var getUserRole2 = function (name,role)
{
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break; //break is not neccessary in javascript..(this is a smart language:) )..
        case "subadmin":
            return `${name} is subadmin only delete and create or add the course`;
            break;
        case "testprep":
            return `${name} is only to take test on course`;
            break;
        case "user":
            return `${name} is user who consume the content`;
            break;
        default:
            return `${name} is a trail user`;
            break;
    }
}

console.log(getUserRole("Vishal","admin"));

var result = getUserRole("Vishal","admin");
console.log(result);