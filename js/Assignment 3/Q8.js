"use strict";
// Q8 – Strict Mode Showdown
// Original problematic function:
// function demo(a, a) {
//   total = 10;
//   delete total;
// }
// demo(5, 10);
//
// Tasks:
// 1. Run with and without strict mode and observe errors.
// 2. Explain why strict mode disallows duplicate params, implicit globals, and delete on non-configurable.
// 3. Show a correct ES6 version.

console.log("Q8 - Strict Mode Showdown (strict mode active)");

// In strict mode, duplicate parameter names are not allowed and will throw a SyntaxError.
// Also assignment to undeclared variable 'total' would throw, and delete of an unresolvable name is invalid.

function demoFixed(a, b) {
  // Correct parameter usage
  let total = 10; // declare explicitly
  // delete total; // delete on declared variable is not allowed; delete works on object properties only
  return { a, b, total };
}

try {
  const result = demoFixed(5, 10);
  console.log("demoFixed result:", result);
} catch (err) {
  console.error("Error:", err.message);
}

// Non-strict behavior (for demonstration, not executable here): duplicate params allowed, implicit globals allowed.
// But in strict mode these are illegal to help catch bugs.
