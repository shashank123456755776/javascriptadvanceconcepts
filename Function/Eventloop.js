// Event loop and asynchronous functions :
// javascript synchronous single theraed languages,it has one class stack  and only do one things at a time :


// call stack presents in js engine (js engine presents inside browsers)and all code executed in call stack,all context has been pushed inside the call stack
// in broswer has also local storage ,timer,also url like https,so browser has super power to connected with server 
// so we know call stack inside the js engines and js engines inside the browser 
// question is how js engine access timer ,https,or external server 
// answer is WEB API it contians settimeout(),dom apis,fetch(),storage(),localStorage,console,location 
// suppose inside the call stack we wants to access timer,domtree and many ,
// so we would need to use settimout that will use timer.
// a keywords window javascript get all features like timer from settimout throght window
// window.localstorage ,window.console..........super powers


//lets understands all concepts 

console.log("start")
setTimeout(() => {
    console.log("callbacks")
},5000);
console.log("End")
// in above code what happens 
//  firstly start and end will run because javascript is not goings to wait for call back function execution
// so what happen as we know settimout is features of web api which is part of browsers that have super power of timer
//  so settimout tells webappi please give access of timer ,so it put time=5s in timer and call back function  inside webapi and settimout push out its context from call stacks 
// so what happen after timer expires callback function hasbeen pushed inside a concept called as callback queue
// now event loop a concept which checks call stack is empty or or if empty it will put call back function from call back queue into call stack 
// and then agian execution has been formed after execution the function context has been deleted 
//  and finally we get like (start,end,callbacks)as outputs 

// callback queue is continous checking callstack is empty or not or also checking any values inside the callback queue or not

// another examples event listeners 
console.log("start")
document.getElementById("btn").addEventListener("click", function(cb){
    console.log("callbacks")
})
console.log("end")
// what happnes when js engine see document so by window objects its tells web api gives supuer power to use dom api access or fetching somethinngs from doms
// so write now we have id btnn now javsctpt see addevent listener so javascipt registered the calbcaks function inside the wep api.and attached event with callback function
// until and unless we remove eventlisteners or cut brosowers cross button ,event still attcahed with callback.
// after that global execution context has been deleted and after clcik the button bu users the call bcak function has been pushed inside the call back queue
// then event loops checks where function is present or not in queue and call stack is empty or not then event loop help to pushimg call back function from queue to callstack to execution


// why need of call back queue so suppose users click the button lot of times so we have lot of callback so how we would manage it so thts why we need of call back queue



// fetch  function work diffrently 

setTimeout(() => {
    console.log("callbacks bhai")
},5000);

fetch("https://api.netflix.com").then((data)=>{
  console.log("krishna is my life line")
})
////1000 lines wriiten suppose

// fetched function has been puttend inside the microstack queue after fetching the data 
// suppose we have thousans of line which is executed after fetched so callback for fetched has been wait in microstack queue
// so what happens when callback function also expires their timers and waited for executon in callstacks

// so in such case the microstack queue has been given priority first then call back queue has been executed


// promises and mutation observers goes inside teh microstack queue and other like settimout and eventlisteners goes inside callback queue