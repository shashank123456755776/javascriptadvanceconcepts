let arr=["shashank","suman","saurabh"]
const obj1 ={
    name:"shashank",
    city:"vrindavan",
    fun1:function(){
        console.log(this.name+" "+this.city)
    }
}
// Every thing in javascript is objects 
// In case of object-- object._proto_ gives object protypes after that object._proto_._proto_gives null
// arr._proto_ gives arrayprototpes  arr._proto_._proto_gives object prototpes after that arr._proto_._proto_._proto gives null
//same for function as above 

let obj2={
    name:"krishanradharani",
    city:'golaka'
}
obj2.__proto__=obj1
obj2.fun1()

// In JavaScript, each object has a prototype. Prototypes are used for inheritance and allow objects to inherit properties and methods from other objects. When you access a property or method on an object, JavaScript first checks if that property or method exists directly on the object. If it doesn't find it, it looks for it in the object's prototype, and if it's still not found, it continues up the prototype chain until it finds the property or reaches the end of the chain (where the prototype is null).

// In JavaScript, prototypes are accessed using the __proto__ property (or Object.getPrototypeOf(obj) method). However, it's important to note that __proto__ is considered deprecated and is not recommended for direct use in production code.

