// functionl programmming not function without higher oredr function 
// A function which takes another function as arguemnts and return function  IS CALLed as higher oredr function
//   
// call back function
// a function which has been passed into the higher ordered function is called as call back function
function x(){
  console.log("shashank suman")
}
// higher oredr function function
function y(x){
    x()
}

// By examples  we can  understands 
// dont repeat the function ,how to write optimized code using hof
// lets us suppose we wnat to calculate the radius ,circumfernece and diameter of the cicles wtihout
// making diffrent functions,so in such case we will use higher oredr function function
// examples
const calculate = function (radius, logic) {
    return logic();
};

const radius = 3;

// Anonymous function
const area = function () {
    return Math.PI * radius * radius;
};

const circumference = function () {
    return 2 * Math.PI * radius;
};

const diameter = function () {
    return 2 * radius;
};

console.log(calculate(radius, circumference)); // Output circumference
console.log(calculate(radius, diameter)); // Output diameter
console.log(calculate(radius, area)); // Output area
// Here in above output we see how by how using the concept of higher order function 
// We not repeat the whole code oonly one function inside the another and solve the logics 

