let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

//find method
console.log(fruits.find(fruit => fruit === 'Apple'));
console.log(fruits.find(fruit => fruit === 'Apple1'));

//findIndex method
// -1 means not found
console.log(fruits.find(fruit => fruit === 'Apple));
console.log((firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1')));

//push method adds an element to the end of the array and adjusts the length
console.log(fruits.push('Kiwi'));
console.log(fruits);

//pop method removes the last element of the array and returns the removed element
console.log(fruits.pop());
console.log(fruits);

let number = [3, 2, 5, 4, 7];
console.log(numbers.sort());

//slice method to cut out a part of the array
console.log(fruits.slice(1, 3));

// if we only give 1 parameter, it will cut out the rest of the array
console.log(fruits.slice(1));
console.log(fruits.slice(-1));

fruits.array.forEach(fruits => console.log(fruits));

//more information
