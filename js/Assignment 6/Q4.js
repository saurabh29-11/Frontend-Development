// Q4 – DevOps Delay: Async Timeout Race
// Run: node Q4.js
// Server A responds in 2s, Server B in 3s. Demonstrates Promise.all() and Promise.race().
// Random failure simulated.

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Server A failed"));
      resolve("Server A: Deployment success (2s)");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject(new Error("Server B failed"));
      resolve("Server B: Deployment success (3s)");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.table(results);
  })
  .catch((err) => {
    console.error("Deployment error (all):", err.message);
  });

// Race: fastest responder
Promise.race([serverA(), serverB()])
  .then((first) => {
    console.log("Fastest response:", first);
  })
  .catch((err) => {
    console.error("Deployment error (race):", err.message);
  });
