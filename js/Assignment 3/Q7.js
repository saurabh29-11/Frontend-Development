"use strict";
// Q7 – Smart Calculator
// Tasks:
// 1. Use a switch to handle operations: add, divide, power, root, subtract.
// 2. Custom error for divide by zero and root of negative number.
// 3. Throw InvalidOperationError for unknown operation.
// 4. Wrap in try...catch and print formatted summary.

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {}
class MathError extends Error {}

function compute(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new MathError("Division by zero");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new MathError("Root of negative number");
      return Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError("Operation not recognized: " + op);
  }
}

console.log("Q7 - Smart Calculator");
for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  try {
    const result = compute(op, num1, num2);
    console.log(`Operation: ${op} | Result: ${result}`);
  } catch (err) {
    if (err instanceof InvalidOperationError) {
      console.error(`InvalidOperationError for '${op}':`, err.message);
    } else if (err instanceof MathError) {
      console.error(`MathError for '${op}':`, err.message);
    } else {
      console.error(`Error for '${op}':`, err.message);
    }
  }
}

// Summary note:
// - divide will raise MathError due to division by zero.
// - root with num2=0 attempts 1/0 => Infinity, but our root uses b as degree; root by 0 is invalid mathematically.
