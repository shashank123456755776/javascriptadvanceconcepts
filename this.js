//This  in Global Space 
//In Any case either strict and non strict mode  the value of this  in global space will always window based on diffrent like browsers as  window and node as global 
console.log(this)

// what is case of functional scope
function x(){
    console.log(this)
}
// in aboce code ,in non strict mode it will gives undefined values
// in strict mode gives windows
// means inside the function the value of this depends on strict mode and non strict mode 

x()
//  in non strict mode this substitution occurs means will gives undefined
//  the value of this also depends how functionhas been called
// In non strict mode if function has been called without reference  like this x() the it will gives undefined values
// but if it has been called with refernce used window like window.x() then it will gives window objects 

// function inside the objects is called as methods 

// this inside the objects methods:
const obj={
    name:"shashanksuman",
    fun:function(){
        console.log(this)
    }
}
obj.fun()
// Above Code gives objects as output means this inside  the methods will points  out objects itself
// call ,apply and bind:It would used when we need to share methods 

// how this works inside the arrow function
// arrow function dont have this binding

const object1={
    name:"shashanksuj",
    fun:()=>{
      console.log(this)
    }

}
object1.fun()
// In above  case value will be global Space Means window objects:
// means it is Enclosed Lexial Context means it will points its lexial 
const my={
    name:"shashank suman",
    fun:function(){
     const y =()=>{
        console.log(this);
     };
     y();
    }
}
my.fun()
// This in case for arrow functions its depends where where enclosing lexial context lexial goes to
// Arrow function does have own this binding 

// This inside DOM elements reference to the  HTMl element:

// This inside class,constructor behaves diffrentely




