//Map is not object it is different..
var myMap =  new Map();

//Map is empty..(see result).
console.log(myMap);

//Set propeties in Map. Map always store data as `key:value` pair..
myMap.set(1,"Uno");
myMap.set(2,"dos");
myMap.set(3,"tres");

//Map is have an some properties now..
console.log(myMap);

//Accessing single-single key from map by using for loop..
for (let key of myMap.keys()){
    console.log(key);
}

//Accessing single-single value from map by for loop..
for (let value of myMap.values()){
    console.log(value);
}
//Accessing single-single key:value pair by for loop..
for (let [key,value] of myMap){
    console.log(`${key} : ${value}`);
}


//forEach is differ from for because if you pass key parameter in forEach(). The forEach consider as value..
//forEach always consider first parameter as value.. and second parameter as a key/index..
myMap.forEach((key) => {
    console.log(key);
});

myMap.forEach((key,value)=> {
console.log(`${key} : ${value}`);
});