// we can create object using many methods

// Object creation using object literal

const car = {
    color:'red',
    dimensions:{
        height:20,
        width:10
    },
    speed: function(){
        console.log('speed');
    }
}

// Factory function

function createHuman(name,age){
    return{
        name: name,
        age: age,
        saySomething: function(){
            console.log(`Hello! I am ${name}`)
        }
    }

}
const User1 = createHuman('Jake', 20)

// Constructor function

function createCar(name, color){
    this.name = name,
    this.color = color
    this.speed = function(){
        console.log('this is speed method')
    }
}
const car = new createCar('BMW', 'White');