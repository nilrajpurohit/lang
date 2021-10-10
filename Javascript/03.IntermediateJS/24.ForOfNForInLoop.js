//For Of and For in are two additional loops in javascript...
//For Of is use for array..
//For in is use for abject..

//For Of..
// const name =['nil','vishal','nikul','hemant'];
// for (const n of name){
//     console.log(n);
// }





//For In..
const days = {
    sun: 'Sunday',
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'wednesday',
    thr: 'Thrusday',
    fri: 'Friday',
    sat: 'Saturday'    
}

//Printing the Keys..
for (const n in days){
    console.log(`Key: ${n}`);
}

//Printing the Values..
for (const n in days){
    console.log(`Value: ${days[n]}`);
}

//Printing the Keys with Values..
for (const n in days){
    console.log(`Key: ${n}  Value: ${days[n]}`);
}