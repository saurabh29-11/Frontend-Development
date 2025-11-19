"use strict";
// Q9 – JSON Audit
// Tasks:
// 1. Parse entries with try...catch.
// 2. Detect missing keys (user, age) and invalid JSON.
// 3. Push valid entries to clean array; log errors with line numbers.
// 4. Convert age to Number and filter under-18 users.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

console.log("Q9 - JSON Audit");
for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    // Check required keys
    if (!("user" in parsed) || !("age" in parsed)) {
      throw new Error("Missing key(s): required 'user' and 'age'");
    }
    // Convert age
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error("Invalid age number");
    clean.push(parsed);
    console.log(`Line ${i} parsed OK:`, parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, message: err.message });
    console.error(`Line ${i} error:`, err.message);
  }
}

console.log("\nValid entries:", clean);
console.log("Errors:", errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
console.log("Adults (18+):", adults);
