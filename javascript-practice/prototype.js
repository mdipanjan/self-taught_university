//1.
// Prototypes are essentially parents from which objects can be created
// when we create object using object literal the root Object(object) is used to create new objects

x = {};
y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

//2.
//Multilevel Inheritance
let A = [];

// A derives from Array Object, Array object derives from root Object

//3.
//Property descriptor


//4.
// Prototype members &Instance members

function Circle(radius){
    //Instance property or method
    this.radius = radius;
}
//prototype property or method
Circle.prototype.draw = function(){
    console.log('draw something');
}
circle1 = new Circle(5);
circle2 = new Circle(8);

