// so promises has been handle by two ways one methods by uisng then/catch and other methods by using async/await
// when we use then/catch  then their is one problems it not pauses the program and move in next line  until  promises reoslve 
// lets underatns by example
// p=new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("promiswe resolve succefully");
//     },4000);
// })
// function da(){
//     p.then((data)=>{console.log(data)})
//     console.log("kaise ho")
//     // we not wants thats kaise ho resolev until promises ahs been resolved thats
//     // why i used asynv/awit to resolve such probblems

// }
// da()

// here in above code "kaise ho" run without wait until promises resolve so this is very bad practice
// as programmer 
// so we not wants that any line of javascript run until the promises has been resolved
// so lets by async and awit as below code 
 p2=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promiswe resolve ");
    },4000);
 })
async function data(){
   const val =await p2
   console.log("my bad")
   console.log("jaldi chalo mujhe js engine")
 }
 data()
// so here in code we see how awit key wait the whole program until the promisese has been resolved
// after promises resolved then next line will be executed
