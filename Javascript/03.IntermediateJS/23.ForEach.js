var state = ['Rajasthan','Maharashtra','Tamil Naidu','Kerela'];

//forEach is an array function but is perform like loop which is commonly use in production..
//In javascript foreach()  takes a callback function..(its can be the arraow function)..
//callback function also know as arrow function..
//In the function as single parameter consider an taking single value for an array for each time..

//callback function can be..
state.forEach(
    function(s){
        return console.log(s);
    }
);


//callback function can be..
state.forEach((s)=> (console.log(s)));


//callback function can be..
state.forEach(s => console.log(s));


