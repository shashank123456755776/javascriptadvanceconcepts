//1 Map filter Reduce is higher ordered function
// these all function has been used for transforamtion for array also 
// map function has been used for transoformaion each elemnts in arrays 
const arr =[1,2,3,4,5]
function double(x){
     return x*2
}
// here we can see mapo function also a higher oredr function because it atkes call back function which 
const output=arr.map(double)
console.log(output)


//2 Filter Function Used For Filter 
const arr1=[2,4,5,6,7,8,9]
function even(x){
    return x%2!==0
}
const output1=arr1.filter(even)
console.log(output1)
// So here  we can see how filter function has been used filter the value,so bascially function inside the
// filter  function iterate on each elements in the array

// now  lets understands the reduce  
// reduce used when you have take all elements of arrays and gets with sigle output

// SO  reduce function atkes two arguments 1st is call back function which takes two arguments which is accumulators and curent values of array 
// and 2nd is initilizing accumulator

// question 1
// caculate the sum
ar=[1,2,3,4,5,56,7]
// here function will iterate on each elemnts of the ar
// and curr=ar[i]
const op=ar.reduce(function(acc,cur){
  acc=acc+cur
  return acc
},0)
console.log(op)

// question 2 find the maxmimum value in arrays:
// using reduce function
max=0
op1=ar.reduce(function(acc,cur){
      if (cur>acc){
        max=cur
      }
      return max
},0)
console.log(op1)

const obj=[
    {name:"shashank",age:30},
    {name:"saurabh",age:45},
    {name:"krishna",age:15},
    {name:"radha",age:14},

]

ops=obj.filter(function(data){
      if (data.age<30){
        return data
      }
}).map((data2)=>data2.name)
console.log(ops)
