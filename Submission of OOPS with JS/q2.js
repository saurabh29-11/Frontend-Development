const menu = {
    pizza: 200,
    burger: 100,
    fries: 80,
    coke: 40
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Item not found: ${item}`);
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        return total;

    } catch (err) {
        console.log("Error:", err.message);
    }
}

console.log("Bill =", calculateBill(["pizza", "coke"]));
console.log("Bill =", calculateBill(["pizza", "icecream"])); // error
