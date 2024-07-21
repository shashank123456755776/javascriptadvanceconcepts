// callback function also called first calss function or first class citizens because it has also
// been passed inside another   function
setTimeout(() => {
    console.log("hi")
},2000);

 
function x(y){
    console.log("x")
    y()
}
// y is also called callback function
x(function y(){
    console.log("y")
})

// event listiners are very haeavy