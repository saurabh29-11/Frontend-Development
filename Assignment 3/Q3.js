"use strict";
// Q3 – Transaction Validator
// Tasks:
// 1. Loop through transactions and throw custom errors for negative amounts, missing fields, or null.
// 2. Catch and categorize errors into arrays (invalid, valid).
// 3. Print final reports with counts.
// 4. Use a comment for where to set a breakpoint to watch variable states.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {
  constructor(type, message, item) {
    super(message);
    this.type = type;
    this.item = item;
  }
}

const valid = [];
const invalid = [];

console.log("Q3 - Transaction Validator");
for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    // Breakpoint suggestion: place a breakpoint on the next line to inspect 'tx' during debugging.
    // debugger;
    if (tx === null) throw new TransactionError("NullEntry", "Transaction is null", tx);
    if (typeof tx !== "object") throw new TransactionError("InvalidType", "Invalid transaction type", tx);
    if (!("id" in tx)) throw new TransactionError("MissingId", "Missing id", tx);
    if (!("amount" in tx)) throw new TransactionError("MissingAmount", "Missing amount", tx);
    if (typeof tx.amount !== "number") throw new TransactionError("InvalidAmountType", "Amount is not a number", tx);
    if (tx.amount < 0) throw new TransactionError("NegativeAmount", "Amount cannot be negative", tx);

    // If all checks pass
    valid.push(tx);
    console.log(`Transaction ${tx.id} is valid:`, tx);
  } catch (err) {
    if (err instanceof TransactionError) {
      invalid.push({ index: i, errorType: err.type, message: err.message, item: err.item });
      console.error(`Transaction index ${i} invalid -> ${err.type}: ${err.message}`);
    } else {
      // Unexpected error
      invalid.push({ index: i, errorType: "Unknown", message: err.message });
      console.error(`Transaction index ${i} unexpected error: ${err.message}`);
    }
  }
}

console.log("\nFinal Report:");
console.log("Valid transactions count:", valid.length);
console.log("Invalid transactions count:", invalid.length);
console.log("Invalid details:", invalid);
