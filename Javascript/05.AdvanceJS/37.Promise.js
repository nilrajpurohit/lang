//Asynchronies javascript..

const uno = () => {
    return 'I m One'
}

const dos = () => {
    // Promise is use in Async function which takes a callback function and promise to return something in future but it can also say that there is error i cannot return something..
    //(that why Promise take one parameter as a callback function and that function takes two parameter i.e resolve and reject);
    //resolve means all thing is done and now i m returning something..
    //reject means there is an error i m throughing that error to you..
   return new Promise((resolve,reject)=> {
       setTimeout(()=> resolve('I m Two'),3000);
   })
}

const tres = () =>{
   return 'I m Three';
}

// async keyword say that this function will not return things in sequence..
const CallMethod = async () => {
    let valueOne = uno();
    console.log(valueOne);
//await keyword use to say to next execution that wait until and don't execute until i m not done my work..
    let valueTwo = await dos();
    console.log(valueTwo);

    let valueThree = tres();
    console.log(valueThree);
}


CallMethod();
