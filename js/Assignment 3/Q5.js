"use strict";
// Q5 – Hoisting Lab: The Sequence Trap
// Original snippet:
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
//
// Tasks:
// 1. Explain each hoisted element's memory state in comments.
// 2. Fix the code to run properly.
// 3. Rewrite using arrow functions to compare hoisting differences.

console.log("Q5 - Hoisting Lab");

// Explanation:
// - Function declarations are hoisted fully (the function object is available before execution).
// - var declarations are hoisted as undefined (memory allocated, initialized to undefined).
// - let/const are hoisted but are in Temporal Dead Zone (TDZ) until initialized; accessing throws ReferenceError.

// Fixed version:
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
function startGame() { console.log(status); }

console.log("score:", score);
announce();
startGame();

// Arrow-function rewrite:
// Note: Arrow functions assigned to const/let are NOT hoisted as callable functions before assignment.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

console.log("Using arrows:");
announceArrow();
startGameArrow();

// Debug notes:
// - If announceArrow was used before definition, it would throw because the variable exists or is in TDZ depending on declaration.
// - Hoisting differences matter when structuring module initialization vs function helpers.
