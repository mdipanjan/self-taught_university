//Primitives are value typed and Objects are reference typed


// Example:1
let x = 20;
let y = x;
    x = 100;

console.log(x)
console.log(y)
// Objeects are reference typed
let a = {value:10}
let b = a;

a.value = 20;

console.log(a);
console.log(b);


// Example:2
let number = 100;
function increase(number){
    number++
}
increase(number);
console.log(number)

//when number is passed as parameter inside increase function that is local to the function and 
//it is passed as value type and dose not increase as increase(number) and  number++ are not referencing the 
//same number variable


let num2 = {value:100};

function decrease (obj){
    obj.value--
}
decrease(num2);
console.log(num2)

//In case of num2 its copied by its reference so obj.value-- and decrease(num2) both are referencing same num2 from the memory