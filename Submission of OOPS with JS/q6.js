const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Shirt", category: "Fashion", price: 1200, stock: 2 },
    { id: 4, name: "Shoes", category: "Fashion", price: 2500, stock: 10 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 10);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
    return products.reduce((group, item) => {
        if (!group[item.category]) group[item.category] = [];
        group[item.category].push(item);
        return group;
    }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
