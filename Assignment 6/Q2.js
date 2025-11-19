// Q2 – Task Scheduler: Micro vs Macro Challenge
// Run: node Q2.js
// Demonstrates microtask (Promise.then) vs macrotask (setTimeout) ordering.
//
// Expected behavior (in comments below) and explanation included.

// Log start
console.log("Start");

// macrotask
setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

// microtask
Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

// synchronous
console.log("Synchronous: immediate log");

// Log end
console.log("End");

/*
Expected output order:
Start
Synchronous: immediate log
End
Microtask: Promise.then callback
Macrotask: setTimeout callback

Explanation:
- Synchronous code runs first.
- Microtasks (Promise callbacks) are processed immediately after the current stack completes, before the event loop moves to macrotasks.
- Macrotasks (setTimeout) are processed later in the task queue.
*/
