// Q3 – Bug Tracker: Callback to Promise Migration
// Run: node Q3.js
// Original callback-based function is converted to getBugs() returning a Promise.
// Simulates random API failure and uses console.table().

function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() < 0.25; // 25% failure chance
      if (failed) return reject(new Error("Failed to fetch bugs from API"));
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

// Using getBugs()
getBugs()
  .then((bugs) => {
    // present neatly
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch((err) => {
    console.error("Error fetching bugs:", err.message);
  });

// For comparison: old callback usage (not needed, but shown)
fetchBugs((bugs) => {
  console.log("Old callback returned bugs (for reference):", bugs);
});
