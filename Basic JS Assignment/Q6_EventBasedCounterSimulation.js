// Q6. Event-Based Counter Simulation

let count = 0;

function increment() {
    function innerInc() {
        count++;
        console.log("Count after increment:", count);
    }
    innerInc();
}

function decrement() {
    function innerDec() {
        count--;
        console.log("Count after decrement:", count);
    }
    innerDec();
}

// Simulating clicks
increment();
increment();
decrement();
