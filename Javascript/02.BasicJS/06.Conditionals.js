// If else condition..
//IF else totally work on boolean value i.e true or false value.
//true and false value can be pass as direct as well as indirect.
/* emaple: */

/*
direct..
if(true){
    some code.
}


indirect..
var fanIsOn = false;

if(fanIsOn){
    some code.
}
*/
 
//case 1: Temperature checking.

var temperature = 29; // the temperature is in types celcious,ferhenites. we perform as celcious.

/* If condition */
if(temperature < 20){
    console.log('The temperature is too cold');
}

/* If Else condition */
if(temperature < 30){
    console.log("The temperature is modrate");
}else{
    console.log("The temperature is too hot");
}

/* If Else If condition */
if(temperature < 20){
    console.log("Outside is too cold");
}
else if(temperature < 30 && temperature > 19)
{
    console.log("Temperature is modrate");
}
else
{
    console.log("Outside is too hot");
}



/* Nested If condition. */

//Case 2: purchasing item from website.
/* User Logged In or not  */
/* User Email id is valid or not */
/* User Email cardInfo is valid or not */

var isLoggedIn = true;
var isEmailValid = true;
var isCardInfoValid = true;

if(isLoggedIn){
    if(isEmailValid){
        if(isCardInfoValid){
            console.log("User is able to purchase Item");
        }
    }
}

isLoggedIn=false;

/* Nested If Else condition */

if(isLoggedIn){
    if(isEmailValid){
        if(isCardInfoValid){
            console.log("User is able to purchase Item");
        }else{
            console.log("User Card info is not valid please check");
        }
    }else{
        console.log("User Email is Invalid please check your email id");
    }
}else{
    console.log("User is not Logged In please login first");
}




/* If else with logical operators. */
//differ between && and ||. (&& (AND Operator)) (|| (OR Operator))

if(isLoggedIn && isEmailValid && isCardInfoValid){
    console.log("User is able to purchase Item");
}else{
    console.log("User is Not able to purchase");
}

//Now using OR Operator ||
if(isLoggedIn || isEmailValid || isCardInfoValid){
    console.log("User is able to purchase item");
}else{
    console.log("User is Not able to purchase");
}