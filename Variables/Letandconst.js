// let and cost decalrations completely fiffrents from var :
//  are the hoisting of let and const completely diffrent from var
// let  and const  are temporal dead zone in time being 
console.log(b)

console.log(a)
let a=10
var b=10

//  So in above code we get undefined values  for b but reference errror or not defined error 
// why lets understands 
//  So in above code in case of let their  is concept temorarl dead zone in which a has been get another memory space called as scipt not in global execution context
// and aasigned as undefined so when it coame at let a=10 line gives reference error because it is in temporal dead zone
// time between "a" becomes hoisted  till it assigned some value is called temporarl dead zone in which a has been get another memory space
// why because a is not present in global exeection context it present in another space which is not global which is "script"
// so their is no such concepts of memory allocation and execution phase



// so lets undestands where we get refernce error lot of places
console.log(x)
// undefined
// in case of let when we try to acces the value before initialization we get reference errors 
// beacuse let in temporarl dede zone

//variable with var always attached with global execeution context that is window objects
// we can access b  by window.b but we cannot access a by window.b it gives undefined because a started with let so it will not present in the global space

// let and const is hoisted in separate space not global 