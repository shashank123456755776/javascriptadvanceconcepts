// Hoisting and variables 
// Here we can see function getName able to access before initilizing 
// Hoisting is phenoma in javasript where you can access the variables and function before initilazation
//hoisting not only moving declare part in above
// In deeply what happen first memory has been allocated for each and every variable and functions
// then execution phase occurs ,initially what happen x initialized with undefined the allocation happen at run time


getName()
// we get function itself 
console.log(getName)
console.log(x)
// undefined

var x=7
function getName() {}{
    console.log("shashanksuman")
}
// here when we console myname then we get  undefined because js treat myname as varible so initially it initialized
// with undefined we try to getname data leads undeined valuse
console.log(myname)
var myname=()=>{
    console.log("Namstey jajascript")
}


//  a cocept when varibale not declare with any variables then it automatically becomes glboal variable s

function fun() {
    a = 8;
}
fun();
console.log(a);
