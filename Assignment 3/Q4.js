"use strict";
// Q4 – Debugging Mystery
// Starting snippet:
// function showMessage() {
//   greeting = "Welcome"; // undeclared
//   console.log(greeting);
// }
// showMessage();
//
// Tasks:
// 1. Identify why this throws under strict mode: assigning to undeclared variable creates ReferenceError.
// 2. Fix it and explain scope declaration changes.
// 3. Add watch variable suggestion for VS Code debugger.

function showMessageFixed() {
  // In strict mode, we must declare variables. Without declaration, assignment creates a ReferenceError.
  let greeting = "Welcome";
  console.log(greeting);
}

console.log("Q4 - Debugging Mystery");
try {
  showMessageFixed();
  console.log("Fixed: no error under strict mode (greeting declared with let).");
} catch (err) {
  console.error("Error:", err.message);
}

// Debugging tips:
// - In VS Code set a watch for 'greeting' and place a breakpoint inside showMessageFixed to observe scope.
// - Strict mode disallows accidental globals and certain sloppy behaviors, making bugs easier to find.
