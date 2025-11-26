// Q9 – Debugging the Event Loop
// Run: node Q9.js
// Predict and explain execution order. Then run to compare.
//
// Prediction (write before running):
// 1. "Script start"
// 2. "Script end"
// 3. "Promise callback"
// 4. "Timeout callback"
//
// Reason: Promise callbacks (microtasks) run after current synchronous code but before macrotasks like setTimeout.

// Actual run:
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

// When you run this, you'll observe the predicted order because microtasks are drained before macrotasks.
