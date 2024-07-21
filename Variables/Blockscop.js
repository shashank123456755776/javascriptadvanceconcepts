// block scope and shawdowing in js 
// what is block scope in javascript? 
// this is block 
{
// combined statements 
// it combine multiple javscript statements in single statements where javascipt expect single statements
//block scope means all function and  variables can accces within the scope is called as block scope and
}
{
    var a=9
    let b=7
    const c=6
    
    // here var hoisted in global space where as let and const  hoisted in  block statements
    // so important points is that let and const  hosited in separted block not in global so it will not accces in block scope
    // outside the blocks  
}


{
    var a=9
    const b=9
    let c=5
    
    

}
// console.log(a)
// console.log(b)
// console.log(c)

//  so in above code if we accse a we get 9 no errors but in case of let and const we get refernec errors 
// because javscript interpreter access the value in gec which not exits thats leads reference errors 
// but inside block a,b and c are accessaible 


