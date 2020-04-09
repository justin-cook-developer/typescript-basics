// Javascript Type Basics
console.log("typeof 32:", typeof 32); // number
console.log('typeof "hello":', typeof "hello"); // string
console.log("typeof true:", typeof true); // boolean

console.log("\ntypeof null:", typeof null); // object ???

// function duplicateObject(obj) {
//   if (typeof obj === "object") {
//     // do work
//   } else {
//     throw new Error("obj must be of type 'object'.");
//   }
// }

console.log("\ntypeof undefined:", typeof undefined); // undefined
console.log("typeof {}:", typeof {}); // object

console.log("\ntypeof []:", typeof []); // object
console.log("Array.isArray([]):", Array.isArray([])); // true

// // Type Weirdness
console.log('\n3 + "a":', 3 + "a");
console.log("3 + undefined:", 3 + undefined);
console.log("typeof (3 + undefined):", typeof (3 + undefined));
console.log("Number.isNaN(3 + undefined):", Number.isNaN(3 + undefined));

// function add(lhs, rhs) {
//   return lhs + rhs;
// }

const weirdResult = add(3, "a");
console.log("weirdResult:", weirdResult);
