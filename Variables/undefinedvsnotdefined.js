//Undefined vs not defined
// javscript is lossely type languages means  you can put any data types in variables ,string,or anythings 
console.log(a)
var a=6
// in case of  x is their is no memory allocations 
console.log(x)

// In case of "a" We have allocated memory which is initially "undefined" place holder  thats why we get undefined after console
// But in case of x ,their is no memory allocation ,so thats whyb we get  reference errors that is also called not defined


//re initalization happen in caes of let 
let a=9
 a=10
 console.log(a)
//  let can be reassingned not redeclare
//  but in case of var redeclare abd reassigned will be happens 


// One error is syntax error  means code does not run
// const a 
// a=10
// this above code will code synatx error code does run after ,missing initilaztion,


// lets understands type errors when we reassigned the value of const
const a=1000
a=1000
// this  above code will gives to type errors 
// type errors came when we dont do  assigned and declare together for const type variable gives types errors
// const a=10  this  is try but above code gives types errors 

//  in down code we wil get syntax erorr beacuse we dont initilazed it 
// const b


// lets summarized we havew three types of errors :
// 1)type errors 2)reference errors 3)syntax errors 4
// const b=1000   b=1000   here we try to reaggined value of b wich is const tahts why it will gives types errors
// console.log(x) let x=1000 it will gives refernce errors  temporal dead zone cannot acces before initilazation in case of let and const also 
// type error ...


// to handle the temporal deasd zone we have initalized varibale let and const at top 
// used const when we not wnats ton  change the value furthers 
