// lets gives oupuput of folowings codes
// how much time taken to run p1 and p2
// answer both code will run at 10s beacuse until p1 not resolve it will awit for p1 the at 10s both will executed
p1=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(" p1 has been resolved")
        
    },10000);
})


p2=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(" p2 has been resolved")
        
    },5000);
})

 async function myhandledata(){
    const val2=await p2
    console.log("kya bhua")
    const val1= await p1
    console.log(val2)
    console.log(val1)

}
myhandledata()