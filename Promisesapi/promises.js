// let us suppose we wnat to check card validation then allow orderde the payement has succefully 
// promise is a container after eventual completion of the asynchronous operations
// we accept promises because of two problems we are stucked with which is call back hell and inversion control
// call back hell means when we call multipe asynchronous operation inide the function then it create a problem of callback hell
// inversion control in call back hell we just pass on efunction inide the other function
// So one function call again and agian until we get result 

// not in promises we will never call other function until we get result in contianer as promises
//promises resolve all others problems whatever we already discussed above
card="126333"
ordered(card).then(function(card) {
  console.log(card)
  return card
})
.then(function(card){
   return  payment(card)
}).then(function(paymentinfo){
    console.log(paymentinfo)
})
.catch(function(error){
    console.log("error aa gya",error)
})
function payment(card){
    return new Promise((resolve,reject)=>{
        resolve("payment is succesfully")

    })
}

function ordered(card){
    return new Promise((resolve, reject) => {
        if(card.length>4){
            setTimeout(() => {
                resolve("card is valid")
            }, 5000);
        }
        else{
            reject("card is not valid")
        }  
    })
}
