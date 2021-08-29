// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q);

// destructuring array 
const [p, q] = [99, 49, 79, 89];
// console.log(p, q);

const [friend1, friend2] = ['toma', 'lipu'];
// console.log(best, faltu);
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

//chaining

const office = {
    department: { ename: "IT", employeeNum: 100, monthlyIncome: 100000000, stuff: 35 },
    ceo: {
        namelist: {
            cname1: 'A',
            cname2: 'B',
            cname3: 'C'
        },
        salary: 2500
    },
    totalStuff: 250
};
console.log(office?.ceo?.namelist?.cname3);
console.log(office?.backend?.namelist?.cname1);