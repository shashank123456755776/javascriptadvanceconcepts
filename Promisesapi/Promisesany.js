// 4 promises.any([]) wait for first success and give answer like success
const p1 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
       resolve("p1 success")
    },3000);
});
const p2 =  new Promise(function(resolve, reject) {
setTimeout(()=>{
 resolve("p2 success")
},5000);
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


Promise.any([p1,p2,p3]).then((res)=>{
console.log(res)
}).catch((err)=>{
console.log(err)
})