// Q2. String Manipulation Report

let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase();

let words = cleaned.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
let formatted = words.join(" ").replace("Pro", "Pro Edition");

console.log("Cleaned Title:", formatted);
console.log("Length of Title:", formatted.length);
