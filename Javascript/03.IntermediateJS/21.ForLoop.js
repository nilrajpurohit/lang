//For Loop in javascript..
//ForLoop take three things 'initialization';'conditon';'increment or decrement'..

// for (let i=0; i<=10;i++){
//     console.log(i);
// }

//This is an array..
var states = [
    'Maharashtra',
    'Rajasthan',
    'Assam',
    1947,
    'Tamil Naidu',
    'Kerela'
];

//get all The value under states array by using forloop..
// for(let i=0; i<states.length; i++){
//     console.log(states[i]);
// }


//checking that if the states value is not equal to string then continue that means don't console.log() it, go for the next one.. 
// for(let i=0;i<states.length;i++){
//     if(typeof states[i] !== 'string') continue;
//     console.log(states[i]);
// }


//checking that if the states vlaue is not sting then break/stop entire execution of loop's..
for(let i=0; i<states.length; i++){
    if(typeof states[i] !== 'string') break;
    console.log(states[i]);
}