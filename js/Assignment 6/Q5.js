// Q5 – Frontend Rush: Avoiding Callback Hell
// Run: node Q5.js
// Implements 5-stage pipeline first with nested callbacks, then with async/await.
// Each stage takes 1 second.

function stage(name) {
  return (next) => {
    setTimeout(() => {
      console.log("Stage:", name);
      next && next();
    }, 1000);
  };
}

// Callback hell version (nested callbacks)
function pipelineWithCallbacks() {
  console.log("Pipeline with callbacks (starts):");
  stage("design")(() => {
    stage("build")(() => {
      stage("test")(() => {
        stage("deploy")(() => {
          stage("celebrate")(() => {
            console.log("Pipeline with callbacks (completed)");
            // After demonstrating callback hell, run async/await version
            pipelineWithAsyncAwait();
          });
        });
      });
    });
  });
}

// Helper returning a Promise for a stage
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Stage:", name);
      resolve(name);
    }, 1000);
  });
}

// Async/await version
async function pipelineWithAsyncAwait() {
  console.log("\nPipeline with async/await (starts):");
  try {
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline with async/await (completed)");
    console.log("\nComment: async/await improves readability by linearizing asynchronous steps and avoiding deeply nested callbacks, making errors easier to handle with try/catch.");
  } catch (err) {
    console.error("Pipeline failed:", err.message);
  }
}

// Start by demonstrating callback hell
pipelineWithCallbacks();
