// lets understand function in javascript 
// Output will be 10 ,100, 1

var x=1;
a();
b();
console.log(x)

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}
// lets explain in this code 
// first phase is memory alllocation phase
//  So memeory has been allocated for all variables and function as for x and function a  and b 
// So in memory allocation all varibales initially assigned with "undefined" value  and function with whole function block
// when function has been called two things happend context has been created for that particular function again process repaets as same 
// and second things is that "gec" and function call push in call stack for execution and call stack mede for  tracking  ,where is control of javascript
// the all execution contect happen inside the global execution context.
// finally when all code executed the whiole global execution has been deleted


   

// Their is One function is called is called as Arrow  functions 
const fun = (x,y)=>{
   return x*y
}
// anonomous functions
const multiply = function(x, y) {
    return x * y;
};
