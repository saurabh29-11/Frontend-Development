"use strict";
// Q10 – Nested Hoisting and Closures
// Original snippet:
// function outer() {
//   console.log(count);
//   var count = 5;
//   function inner() { console.log(count); var count = 10; }
//   inner();
// }
// outer();
//
// Tasks:
// 1. Predict and explain output.
// 2. Show how hoisting creates separate memory contexts.
// 3. Convert inner to arrow and note behavior changes.
// 4. Add debug comments to explain call stack.

console.log("Q10 - Nested Hoisting and Closures");

// Prediction in comments:
// - outer: var count is hoisted and initialized to undefined at function start, so console.log(count) -> undefined
// - inner: var count inside inner is hoisted to inner scope as undefined, so console.log(count) -> undefined
// Therefore outputs: undefined, undefined

function outer() {
  // hoisted: var count => undefined until assignment
  console.log("outer - before init count:", count);
  var count = 5;
  function inner() {
    // inner has its own hoisted 'count' var => undefined initially
    console.log("inner - before init count:", count);
    var count = 10;
    console.log("inner - after init count:", count);
  }
  inner();
  console.log("outer - after inner call, count:", count);
}

outer();

// Arrow version of inner:
function outerWithArrow() {
  console.log("\nouterWithArrow - demonstrating arrow inner behavior");
  var count = 5;
  const innerArrow = () => {
    // Arrow function does NOT create its own 'this' or its own arguments, but 'var count' inside arrow
    // would still be function-scoped if declared here. To illustrate, we will not redeclare count:
    console.log("innerArrow sees outer's count:", count);
  };
  innerArrow();
}

outerWithArrow();

// Debugging notes:
// - Use debugger statements or place breakpoints in VS Code to inspect activation records.
// - Call stack: outer -> inner -> (return), observe separate variable environments for each function.
