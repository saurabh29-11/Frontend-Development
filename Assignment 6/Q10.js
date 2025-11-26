// Q10 – The Final Delivery: Async Pipeline Debugger
// Run: node Q10.js
// Steps: takeOrder → prepare → pack → dispatch → deliver
// Each step returns a Promise with random 1–2s delay and random success/failure.
// runPipeline() uses async/await and try/catch to orchestrate the flow.

function randDelay() {
  return 1000 + Math.floor(Math.random() * 1001);
}

function maybeFail(prob = 0.2) {
  return Math.random() < prob;
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Failed to take order"));
      console.log("Step 1: Order taken");
      resolve();
    }, randDelay());
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Failed to prepare food"));
      console.log("Step 2: Food prepared");
      resolve();
    }, randDelay());
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Failed to pack"));
      console.log("Step 3: Package ready");
      resolve();
    }, randDelay());
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Failed to dispatch"));
      console.log("Step 4: Out for delivery");
      resolve();
    }, randDelay());
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Failed to deliver"));
      resolve("Delivery completed!");
    }, randDelay());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    const result = await deliver();
    console.log(result);
  } catch (err) {
    console.error("Pipeline failed!");
    console.error("Reason:", err.message);
  }
  // Comments: Each await pauses the async function until the Promise resolves or rejects.
  // If a Promise rejects, control jumps to the catch block. The event loop schedules the timers
  // and microtasks while awaiting; await does not block the whole thread, only the async function.
}

runPipeline();
