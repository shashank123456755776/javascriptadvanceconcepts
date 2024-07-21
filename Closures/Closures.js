// function along  lexail environments/scope bundles togethers is called as closures 
function x(){
    
    var a=7
    function y(){
        console.log(a);
        
    }
    return y;
}
var z=x();
console.log(z);
z()
// In this code it seems like after calling z we will get reference errors but its wroung  beacuse
// We return function as per definition of closures ,We return function bundles with its lexial environemnst
// so in such case var a=7 also return with function  y 
// so when we acccess by z() then we will get 7 as output not undfined 
// might be we thnik when x context has been smashed from call stack the a will smashed also<so its give refernce errors but this is incorrect satemnets
// because we will get "a" also by closures conscepts

// we wil also takes refenece in closures emans ket suppose we get functionn containg lexial a
// so this ponits variable "a" not values.



// uses of closures
//  module  design patterns,currying,function like once ,memoize, maintaining state in async world,settimeouts ,iterators,and many more 


function a() {
    var b = 6;
    
    function y() {
        var a = 7;
        
        function p() {
            console.log(a);
            console.log(b);
        }
        return p; // Return the inner function p
    }
    return y(); // Invoke y and return its result, which is the inner function p
}

var z = a(); // z is now the inner function p
console.log(z); // This will print the definition of the function p

z(); // Now invoke z, which will execute the code inside function p