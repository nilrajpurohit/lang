//In javascript does not need to initialize or write datatype
//Javascript is smart to understand automatic that which type of datatype is there.
// There are three ways or keyword to initialize a variable i.e var,let and const.

var fullName = "Nil Rajpurohit";    /* string */
var mobNumber =1234567890;          /* number (can be integer or decimal). */
var religiousIndian = true;         /* boolean */

console.log(fullName);
console.log(mobNumber);
console.log(religiousIndian);



//In above we initialize variable.
//Now we directly pass data.

console.log('Nil Rajpurohit');
console.log(1234567890);
console.log(true);



//Different between var,let,const keywords.

var name='Nil';     /*var use for declare variable as glocal.*/
const male = true;  /*const use for variable value is fix can't change.*/
// const male = false;      /*It will Show error because male is already declared.*/

function details(){
    let surname = 'Rajpurohit';     /*let use for declare variable as local.*/
    console.log(name+surname);
    console.log(male);
}

details();
console.log(name);
// console.log(surname);     /*It will show an error because surname in local vriable.*/



//Override The variable.
var userID = 'abc789';
console.log(userID);
userID = 'xyz123';           /*this value will overwritten to the older one value.*/
console.log(userID);