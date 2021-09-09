const friends = ['Abul', 'Kabul', 'solaiman', 'segupta', 'nimai'];

const friendLength = friends.map(friend => friend.length);
console.log(friendLength);

const products = [{ name: 'Smart Phone', price: 10000 },
{ name: 'Smart Watch', price: 3000 },
{ name: 'Tv', price: 24000 },
{ name: 'Washing Machine', price: 35000 },
]

const productName = products.map(product => product.name);


const productPrice = products.map(product => product.price * 2);
//It will return [ 20000, 6000, 48000, 70000 ]
const productPrice2 = products.forEach(product => product.price * 2);
//It will return undefine


// console.log(productName);
console.log(productPrice);
console.log(productPrice2);
// console.log(products);