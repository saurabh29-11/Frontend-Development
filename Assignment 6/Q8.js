// Q8 – Order Processing Flow: Async Retry Mechanism
// Run: node Q8.js
// submitOrder() fails 50% of the time. processOrder() tries up to 3 times before giving up.

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject(new Error("Submit failed")) : resolve("Order submitted");
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

(async () => {
  try {
    await processOrder(3);
    console.log("Order processed successfully.");
  } catch (err) {
    console.error(err.message);
  }
})();
