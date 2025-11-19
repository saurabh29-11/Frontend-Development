// Q7 – The Lazy Loader: Promise Combinator Practice
// Run: node Q7.js
// Uses Promise.allSettled() to handle profile, posts, messages loading concurrently.
// Randomly rejects one promise. Prints which succeeded or failed and total time taken.

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject("Profile failed") : resolve("Profile Loaded");
    }, 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject("Posts failed") : resolve("Posts Loaded");
    }, 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.25 ? reject("Messages failed") : resolve("Messages Loaded");
    }, 1000);
  });
}

(async () => {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();
  results.forEach((r, i) => {
    console.log(`Module ${i + 1}:`, r.status, r.status === "fulfilled" ? r.value : r.reason);
  });
  console.log("Total time (ms):", end - start);
})();
