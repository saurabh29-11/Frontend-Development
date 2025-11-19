"use strict";
// Q6 – Pyramid Pattern Generator
// Generate pattern (default limit = 5):
// *
// * *
// * * *
// ...
//
// Tasks:
// 1. Replace let with var and observe changes.
// 2. Debug step-by-step to track variable re-use.
// 3. Outer loop limit controlled by user input (default=5).
// 4. Use strict to catch undeclared loop variables.

const userLimit = process && process.argv && process.argv[2] ? Number(process.argv[2]) : 5;
const limit = Number.isNaN(userLimit) ? 5 : userLimit;

console.log("Q6 - Pyramid Pattern Generator (limit =", limit + ")");

// Using let (recommended)
console.log("Pattern using let:");
for (let i = 1; i <= limit; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}

// Using var (observe differences)
console.log("\nPattern using var (same output but 'var' leaks to function scope):");
for (var i = 1; i <= limit; i++) {
  var line = "";
  for (var j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}

// Debugging notes:
// - In strict mode, using undeclared variables like 'k = 1' would throw ReferenceError.
// - Using var causes i and j to be function-scoped and can lead to bugs in asynchronous callbacks or nested loops.
