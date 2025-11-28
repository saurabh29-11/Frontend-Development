// Q1. Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true; // change this to false to test scope behavior

    if (isPermanent) {
        let total = salary + bonus;
        console.log("Total Salary (Permanent Employee):", total);
    } else {
        console.log("Total Salary (Temporary Employee):", salary);
    }
}

calculateSalary();
console.log("Global Bonus remains:", bonus);
