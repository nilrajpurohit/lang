//Another Conditional i.e Switch case.
//Swtich Case works like (if else if) kind.

//Case : Types of User for a Ecommerce Website.

/* admin - full access.
subadmin - add or delete item.
user - purchase an item. */


var type = "subadmin";

switch(type){
    case "admin":
        console.log("You ahve the full access of website");
    break;
    case "subadmin":
        console.log("You have only access to add and delete item");
    break;
    case "user":
        console.log("You are the customer of this site");
    break;
    default:
        console.log("Trail User");
    break;
}

//break is use to break the process.
//if the condition is true after then break the processes.
