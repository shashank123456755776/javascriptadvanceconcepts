// scope chain
function a(){
    c()
    function c(){
        console.log(b)
    }
}
var b=10;
a()
// SO  in above code  we will get 10 as output what happens in javacsript when b has not found in in local scope of C then it will search for local scope of "a" and finally found in global execution context thats will gives us valuse of b
// that is called as scope chain

// lets taken another example to undestands deeply

function a(){
    c()
    var b=10;

    function c(){
        
    }
}
console.log(b)
a()
// In this example we get not defined error because we are right now as in global execution context means we tery to acces the values of b which are in local scope of a,thats leads errors 
// lexial environemnts means any  variable want to accces that is phyiscally presents inside the local scope of parents that is called as lexial envirnonmenst
// to underatsnds the lexial environemnst and local scope  what is the diffrences 
 function a(){
    c()
    var b=8
    function c(){
        console.log(b)
    }
 }
 a()
// here var b=8 is presents in the local scope of a function but that same variable "b" we can say like present in lexial environments of c
// So we can also say that local scope of parent aso called lexial environemnst of the child
// an dthe way of finding th variable in lexial envirnments of that function where variables are  , this  goings on untio we get null value ,or we get no lexial environments
// so (lexial  environemnts = local memory + lexial environments of Parent)
