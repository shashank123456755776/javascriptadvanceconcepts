// function statements or function declarations 
a()
b()
function a(){
    console.log("a called")
}

// function expressions
// Here Anonomous function has been used to Create Function 
var b=function(){
    console.log("b called")
}

// name function expressions
var c=function b(){
    console.log("wkdebw")
}


// The difference between function statements and expression of hoisting
// When We call a it gives function but in case of b we get undefin3ed because b aasigned with undefined
//  and We try to call valuse which is undeinde so it gives errors 

// anonomous function
// it looks like function declarations but it has no name
// function(){

// }
// We cannot run anonomous function directly it will gives us syntax errors  so what of use of it
// anonomous function  used to assigned values to variables


// first class function
// the ability of  used function as values  and passed as arguments to another function and retured out by other function is called as first class function

// Function assigned to a variable
const sayHello = function() {
    console.log("Hello!");
};

// Function passed as an argument
function greet(greetingFunction) {
    greetingFunction();
}

greet(sayHello); // Outputs: Hello!

// Function returned from another function
function createGreeter() {
    return function() {
        console.log("Greetings from the greeter!");
    };
}

const myGreeter = createGreeter();
myGreeter(); // Outputs: Greetings from the greeter!


// Assigned to variables: Functions can be assigned to variables just like any other value.
// Passed as arguments: Functions can be passed as arguments to other functions.
// Returned from other functions: Functions can be returned as values from other functions

// Also called first class functions