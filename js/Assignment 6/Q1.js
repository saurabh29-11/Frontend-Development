// Q1 – The Startup Morning: Async Coffee Maker
// Run: node Q1.js
// Three async steps: boilWater, brewCoffee, pourIntoCup — each returns a Promise that resolves after 1–2s.
// Uses Promise chaining (.then()) and .catch() with simulated random failures.

function randomDelay() {
  // 1000 - 2000 ms
  return 1000 + Math.floor(Math.random() * 1001);
}

function maybeFail(chance = 0.2) {
  return Math.random() < chance;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Boiler failure!"));
      console.log("Step: Water boiled.");
      resolve("Boiled water");
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Brewing failed!"));
      console.log("Step: Coffee brewed using ->", water);
      resolve("Brewed coffee");
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Cup dropped!"));
      console.log("Step: Poured into cup ->", coffee);
      resolve("Coffee in cup");
    }, randomDelay());
  });
}

// Use Promise chaining
boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.error("Coffee process failed:", err.message);
  });
