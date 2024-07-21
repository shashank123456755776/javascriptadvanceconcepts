
// very important concepts shadowing in javasctpts  lets undestands by examples 
// lets understands three type of scope in case of var scope refers to global scope
// in case of let and const scopem  has two types 1)block scope 2) scipt scope which is another scope 


//  q1

var a=100
{
    var a=10
    console.log(a)
}
console.log(a)
// In this example shawdowing going on means in both case inide console and outside console we just tring to access the varibales which has same referense
// So values which came after the after shawdowing other varaibles 
// in above examples what happens  a=10  came after shawowig 100 so in both case output will be 10 and 10


// q2 but what happen in caes of let and const lets understands 
let b =100
{
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(c)


// very important in such cases what happen initially let b=100 will hoisted and asigned value in scipt scope which is another scope 
// inside block let b=20 ,hoisted and assigned valuse in block scope 
// so here their is two values of b one is in block scope and other is another scope  
// /so output will be  30 and 100 
// same goings for const 


// their is one more important concepts which is called as chaining of block scope 
// If value will be  found in lexial block then its okk instead it will scrounge in upper lexial 


// Q3 
let a=3
{
let a=8
{
    console.log(a)
    //  In Such Cases We just try to find values  in block scope it willl see parent lexila block and suddenly it found 8 and print 8

}
}
console.log(a)
// in such case it access a which is found it block scope (not global and not script)

// same works for arrow functions




//  a cocept when varibale not declare with any variables then it automatically becomes glboal variable s

function fun() {
    a = 8;
}
fun();
console.log(a);



// This below code give reference errors because function fun has been deleted fromm global execution after execution so after we access the value whuch does not exits
function fun() {
    var a = 8;
}
fun();
console.log(a);