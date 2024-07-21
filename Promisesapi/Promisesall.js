//1  Promise.all([])................................................................
// Let us suppose 3 api call pi ,p2 ,p3 promise.all([p1,p2,p3])
// Any one of the api is rejected ,promises.all also give error immediately not move forwards[fail] or [succ,fail]
// if  success then it will wait for all succes unitil no one is fail of all api it givess array [succ,succ,succ] at max time (1s or 2s or 3s) at 3s




// 1))))
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


Promise.all([p1,p2,p3]).then((res)=>{
     console.log(res)
}).catch((err)=>{
    console.log(err)
})