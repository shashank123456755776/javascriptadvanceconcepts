// // Async function always return promises
// // if async function return promises alawys then their is no problems but if it will return a value like namastey
// // Then this function take this value  automatically wrap in promises then return
// async function getdata(){
//     return "namastey"
// }
// const datapromise=getdata()
// // Here In down We try to extact the values which is alraedy warpped in promises
// datapromise.then((res)=>{
//   console.log(res)
// })

// lets return promises
// here promises has been handle by then and catch methods
const p= new Promise((resolve,reject)=>{
    resolve("promise resolve succesfully")
})

async function getdata(){
    return p
}
const datapromise=getdata()
datapromise.then((res)=>{
    console.log(res)
  })
// So What We learn in Such Case if we will return promisew the it not going inside the promises
//which has been return by async function ,it return as it is as p

// Lets Learn Await With Async
// How To  Handle promises Using Async Await
// Awit always used inside async function
async function asyncawaithandlepromises(){
    const val=await p
    console.log(val)
}
asyncawaithandlepromises()