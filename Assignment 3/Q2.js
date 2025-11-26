"use strict";
// Q2 – Employee Bonus Calculator
// Tasks:
// 1. Convert salary and years to numbers.
// 2. Calculate bonus = 10% if years > 3 else 5%.
// 3. Use strict mode (no implicit globals).
// 4. Template strings to print formatted details.
// 5. Use try...catch to handle conversion/missing property errors.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("Q2 - Employee Bonus Calculator");
for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    if (!emp || !emp.name) throw new Error("Missing employee or name property");
    // explicit numeric conversions
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("Invalid salary or years numeric conversion");

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)}`);
  } catch (err) {
    console.error(`Error processing employee at index ${i}:`, err.message);
  }
}

// Debugging / hoisting comments:
// - "use strict" prevents accidental globals. For example, writing salary = 100 would throw.
// - Always declare variables with let/const/var to avoid ReferenceError in strict mode.
