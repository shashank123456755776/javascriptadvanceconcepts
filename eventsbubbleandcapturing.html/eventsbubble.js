// document.querySelector("#grandparent")
// .addEventListener("click",()=>{
//     console.log("grandparent clicked")
// },false)
// document.querySelector("#parent")
// .addEventListener("click",()=>{
//     console.log("parent clicked")
// },false)

// document.querySelector("#child")
// .addEventListener("click",()=>{
//     console.log("child clicked")
// },false)

// event capturing

// document.querySelector("#grandparent")
// .addEventListener("click",()=>{
//     console.log("grandparent clicked")
// },true)
// document.querySelector("#parent")
// .addEventListener("click",()=>{
//     console.log("parent clicked")
// },true)

// document.querySelector("#child")
// .addEventListener("click",()=>{
//     console.log("child clicked")
// },true)

// lets takes one example if we takes alternate treu or false

// document.querySelector("#grandparent")
// .addEventListener("click",()=>{
//     console.log("grandparent clicked")
// },true)
// If we use true or false so it would first decide what it would be first events capturing or bubblings

// document.querySelector("#parent")
// .addEventListener("click",()=>{
//     console.log("parent clicked")

// },false)

// document.querySelector("#child")
// .addEventListener("click",()=>{
//     console.log("child clicked")
// },false)

// we can control event propagation vy e.stoppropagation()

document.querySelector("#grandparent")
.addEventListener("click",()=>{
    console.log("grandparent clicked")
},false)

document.querySelector("#parent")
.addEventListener("click",(e)=>{
    console.log("parent clicked")
    e.stopPropagation()

},false)

document.querySelector("#child")
.addEventListener("click",()=>{
    console.log("child clicked")
},false)