//Scope Chaning is an concept of fetching variables..

var name = "Nil";
console.log(name);

function sayName(){
    //if it have its own name variable then it will take its own otherwise it will take from global name variable..
    var name="NilRajp";
    console.log(name);

    // this is nested function i.e function under function
    function sayName2(){
        //if it have its own name variable then it will take its own otherwise it will take from above scope level name variable..
        // var name = "nilraj"
        console.log(name);
    }
    // calling the nested function..
    sayName2();
}

sayName();