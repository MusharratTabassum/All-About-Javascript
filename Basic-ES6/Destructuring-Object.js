const employee = { id: 223, name: 'Ashutosh Banarjee', age: 38, phone: '01245679796', address: 'abc,Bankok' }

// const Name = employee.name;
// const Age = employee.age;
// const Address = employee.address;
// const Phone = employee.phone;

const { name, age, address, phone } = employee;
console.log(name, age);
console.log(address, phone);
// console.log(id); // It will give an error here as id is not present in the employee in line 8

const office = {
    department: { ename: "IT", employeeNum: 100, monthlyIncome: 100000000, stuff: 35 },
    ceo: {
        namelist: { cname1: 'A', cname2: 'B', cname3: 'C' }, salary: 2500
    },
    totalStuff: 250
};
const { ename, employeeNum, monthlyIncome, stuff } = office.department;
console.log(ename, stuff);
console.log(employeeNum, monthlyIncome);
const { cname2 } = office.ceo.namelist;
console.log(cname2);