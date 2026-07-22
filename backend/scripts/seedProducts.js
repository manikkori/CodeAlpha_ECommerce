require("dotenv").config({ path: "../.env" });
const db = require("../config/db");

const dummyProducts = [
  {
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
    price: 199.99,
    stock_quantity: 50,
    image_url:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    name: "Mechanical Gaming Keyboard",
    description:
      "RGB mechanical keyboard with tactile blue switches and programmable keys.",
    price: 89.5,
    stock_quantity: 120,
    image_url:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
  },
  {
    name: "Ultra-Wide 34-inch Monitor",
    description:
      "Curved ultra-wide monitor for immersive gaming and productivity.",
    price: 450.0,
    stock_quantity: 15,
    image_url:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
  },
  {
    name: "Ergonomic Office Chair",
    description:
      "Adjustable ergonomic chair with lumbar support for long working hours.",
    price: 150.0,
    stock_quantity: 30,
    image_url:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80",
  },
];

const seedDB = async () => {
  try {
    await db.query("DELETE FROM products");
    await db.query("ALTER TABLE products AUTO_INCREMENT = 1");

    for (let product of dummyProducts) {
      await db.query(
        "INSERT INTO products (name, description, price, stock_quantity, image_url) VALUES (?, ?, ?, ?, ?)",
        [
          product.name,
          product.description,
          product.price,
          product.stock_quantity,
          product.image_url,
        ],
      );
    }

    console.log("Database seeded with products successfully.");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
