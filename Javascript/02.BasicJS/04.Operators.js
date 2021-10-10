// There are Many type of Operators in Programming lang.
/* Arethmatic Operators
    Logical Operators
    Relational Operators
    Bitwise Operators and ManyMore 
    You can find it on internet */



// a+b*c-b*c/d  Undicipline (Wrong way).
// (a+(b*c))-((b*c)/d)      (Correct way). brakects describe which operation will perform first.



//Exmaple of Arethmatic operators with Relational Operator and if else condition.
var costPrice = 500;
var sellingPrice = 299;
var price = (costPrice - sellingPrice);

if(price > 0){
    console.log(`you got profit of Price: ${price}`);
}
else if(price < 0){
    console.log(`you got loss of Price: ${price}`);
}else{
    console.log(`you got neither profit nor loss`);
}

console.log(`Your Price is: ${price}`);


//Another Example.

var sellPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice - sellPrice)/listPrice)*100;
console.log(`Discount percentage is: ${discountPercent}`);
// above console.log show the decimal or floating percentage.

displayDiscountPercentage = Math.round(discountPercent);
//Math.round() method  will roundup the decimal number into integer number.
//Math is an inbuilt library in javascript.
//round() is an method/function under the Math Library.

console.log(`${displayDiscountPercentage} % OFF`);