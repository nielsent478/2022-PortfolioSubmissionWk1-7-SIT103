var startofprogram = "Start of program";

// console.log(startofprogram[0]);
// comparing strings
let a = 'a';
let b = 'b';
if(a < b) {
	// true
	console.log(a + ' is less than ' + b);
} else if (a > b) {
	console.log(a + ' is greater than ' + b);
} else {
	console.log(a + ' and ' + b + ' are equal.');
}

// lowercase and uppercase
let c = 'c';
let d = 'D';

console.log(c.toUpperCase())
console.log(d.toLowerCase());
console.log(c + d);

// how to write long strings
let longString =
	'This is a very long string which needs ' + 'to wrap across multiple lines because ' + 'otherwise my code is unreadable.';
console.log(longString);
longString =
	'This is a very long string which needs \
	to wrap across multiple lines because \
	otherwise my code is unreadable.';

console.log(longString);