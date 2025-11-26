// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run: node Q6.js
// Fetches product data from https://fakestoreapi.com/products and logs Title, Price, Image URL.
// Uses async/await and try/catch. If running in Node.js <18, ensure global.fetch is available (Node 18+ includes fetch).

async function fetchProducts() {
  const url = "https://fakestoreapi.com/products";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const products = await res.json();
    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("----");
    });
  } catch (err) {
    console.error("Failed to load products. Please try again.");
    console.error("Error:", err.message);
  }
}

fetchProducts();
