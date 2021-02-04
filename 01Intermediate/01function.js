let sayHello = function(name){

    console.log('Hello Everyone!!');
    console.log(`Hello ${name}!!`);
    
}

sayHello('john')

let fullNameMaker = function(firstName,laastName){
    console.log('Welcome to LCO');
    console.log(`Happy to have ${firstName} ${laastName} here!!`);
}

fullNameMaker('John','Doe')


let myAdder = function(num1,num2){
    let added = num1 + num2;
    return added
}

// result = myAdder(7,2)
// console.log(result)

let myMultiplier = function(num1,num2){
    return num1*num2
}
let guestUser = function(name='unName',courseCount = 0){
    return "Hello " + name + " Your course count is : "+courseCount;
}
console.log(guestUser('john',1));