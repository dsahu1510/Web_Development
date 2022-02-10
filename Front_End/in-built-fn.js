
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6


fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
console.log(fruits)


let numberStore = [0, 1, 2, 'five', '6', 7];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore)

let Fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(Fruits.length)
console.log(Fruits.slice(0, 4))


var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
  numbers[i] *= 2;
}
console.log(numbers)
// numbers is now [2, 4, 6, 8, 10]


// Our array with items
const cart = ['apple', 'banana', 'pear'];
// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}
// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'
// Add an item to our 'cart' array
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // Logs: 'orange'



// Our array with items
const colors = ['red', 'green', 'blue'];

// Using length property
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // Logs: 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // Logs: 'green'

// Using at() method
const atWay = colors.at(2);
console.log(atWay); // Logs: 'green'


let numberStore1 = [0, 1, 2];
let newNumber1 = 12;
numberStore1 = [...numberStore1, newNumber1];
console.log(numberStore1)


// function myFunction(x, y, z) { }
// let args = [0, 1, 2];
// myFunction(...args);
// console.log(myFunction)

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log(index, element);

// 0 'a'
// 1 'b'
// 2 'c'

var a1 = ['a', 'b', 'c'];
var iterator = a1.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

var arr = [1, 2, 3, 4, 5];

// console.log(arr.fill(4));
// console.log(arr.fill(2, 1, 3));
console.log(arr.fill(7, 3, 4)); // in this end is (no.-1)


const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 8;
console.log(array1.findIndex(isLargeNumber));

let arr1 = [1, 2, 3, 4];
var result = arr1.map(x => [[x * 2]]);
console.log(result)

var result = arr1.flatMap(x => [[x * 2]]);
console.log(result)