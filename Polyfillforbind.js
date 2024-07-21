// How to Write own implementation of bind methods 
let name={
    firstname:"shashank",
    lastname:'suman'
}
let prinname=function(){
    console.log(this.firstname+" "+this.lastname)
}

let prinmyname=prinname.bind(name)
prinmyname()


// lets create own bind methods 

