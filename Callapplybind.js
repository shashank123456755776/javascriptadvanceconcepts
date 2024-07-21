let name1 ={
    firstname:"shashank",
    lastname:"suman",
    printfullname:function(hometown,Country){
        console.log(this.firstname+""+this.lastname,"form "+hometown+" "+Country);
    }
}
name1.printfullname("punjab","India")

let name2={
    firstname:"Radha",
    lastname:"krishna"
}
name1.printfullname.call(name2,"goloka","Vrindavan")
// Using call methods we can function borrowing 
// so in above examples we see that if we want to pass extra arguments inside function passes by  separated comma 


// But in case of apply methods we will use [] as second arguaments as list
name1.printfullname.call(name2,["goloka","Vrindavan"])


// Bind Methods 
// Bind methods same as call methods but only one diffrences  is that bind methods bind the methods with other object and return the copy of that method



let printnames = name1.printfullname.call(name2, "goloka", "Vrindavan");
console.log(printnames); // undefined, because printfullname doesn't return anything
