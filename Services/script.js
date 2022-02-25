'use strict';
let obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
};
for (let o in obj) {
	console.log(`the value of ${o} is ${obj[o]}`);
}
const sum = function (x, y) {
	return x + y;
};
const add = sum(195, 358);
console.log(`The sum of the two numbers is ${add}`);

for (let i = '#'; i.length < 8; i = i + '#') console.log(i);
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(2, 3));
