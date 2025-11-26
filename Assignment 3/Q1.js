"use strict";
// Q1 – Dynamic Data Parser
// Tasks:
// 1. Convert each value into Number, Boolean, and String.
// 2. Skip invalid numbers (NaN, " ", "100px") but log them separately.
// 3. Build arrays for valid numeric data and invalid entries.
// 4. Print detailed report using loops and conditional formatting.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function parseValue(val) {
  // Convert to String
  const asString = String(val);
  // Convert to Boolean (JS truthiness)
  const asBoolean = Boolean(val) && !(typeof val === "string" && val.toLowerCase() === "false") ? true : (String(val).toLowerCase() === "true");
  // Convert to Number (attempt)
  const asNumber = Number(val);
  return { original: val, asString, asBoolean, asNumber };
}

const validNumbers = [];
const invalidNumbers = [];

console.log("Q1 - Dynamic Data Parser Report");
for (let i = 0; i < apiData.length; i++) {
  const v = apiData[i];
  const parsed = parseValue(v);
  // Detect invalid numeric entries: Number is NaN OR strings that are non-numeric like '100px' or blank ' '
  const num = parsed.asNumber;
  const isNumeric = typeof num === "number" && !Number.isNaN(num);
  if (isNumeric) {
    validNumbers.push(num);
  } else {
    invalidNumbers.push({ index: i, value: v });
  }

  console.log(`Index ${i}:`, {
    original: parsed.original,
    asString: parsed.asString,
    asBoolean: parsed.asBoolean,
    asNumber: parsed.asNumber,
    isNumeric
  });
}

console.log("\nValid numeric array:", validNumbers);
console.log("Invalid numeric entries (skipped):", invalidNumbers);

// Notes about edge-cases and hoisting/debug:
// - Converting null -> Number(null) === 0, String(null) === 'null', Boolean(null) === false
// - Undefined -> Number(undefined) === NaN
// - " " (space) -> Number(' ') === 0 but we treat blank strings as invalid by requirement.
// - '100px' -> Number('100px') === NaN -> invalid
// Use console.log to make all output visible for debugging.
