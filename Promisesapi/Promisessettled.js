// // ..........................................
// 2 promises.allsettled([]) ii wait for all api either any one succes or failure 
// output looks like [success,fail,success] or [fail,success,fail]
// it will give arrays of objects
const p1 =  new Promise(function(resolve, reject) {
    setTimeout(()=>{
       resolve("p1 success")
    },3000);
});
const p2 =  new Promise(function(resolve, reject) {
setTimeout(()=>{
 resolve("p2 success")
},1000);
// setTimeout(()=>{
//     reject("p2 fail")
//  },1000);
});
const p3 =  new Promise(function(resolve, reject) {
// setTimeout(()=>{
//    resolve("p3 success")
// },2000);
setTimeout(()=>{
  reject("p3 fail")
},2000);
});


Promise.allSettled([p1,p2,p3]).then((res)=>{
console.log(res)
}).catch((err)=>{
console.log(err)
})