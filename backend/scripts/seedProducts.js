require("dotenv").config({ path: "../.env" });
const db = require("../config/db");

const dummyProducts = [
  {
    name: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
    price: 999.99,
    stock_quantity: 50,
    image_url:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  },
  {
    name: "Mechanical Gaming Keyboard",
    description:
      "RGB mechanical keyboard with tactile blue switches and programmable keys.",
    price: 1200.00,
    stock_quantity: 120,
    image_url:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80",
  },
  {
    name: "Ultra-Wide 34-inch Monitor",
    description:
      "Curved ultra-wide monitor for immersive gaming and productivity.",
    price: 4999.99,
    stock_quantity: 15,
    image_url:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
  },
  {
    name: "Ergonomic Office Chair",
    description:
      "Adjustable ergonomic chair with lumbar support for long working hours.",
    price: 2000.00,
    stock_quantity: 30,
    image_url:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80",
  },
  {
    name: "Pro Wireless Mouse",
    description:
      "Ultra-lightweight wireless gaming mouse with precision sensor.",
    price: 799.99,
    stock_quantity: 85,
    image_url:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
  },
  {
    name: "1080p Web Camera",
    description:
      "High-definition webcam with built-in dual noise-reducing microphones.",
    price: 3999.99,
    stock_quantity: 200,
    image_url:
      "https://images.unsplash.com/photo-1599641772594-521f7c2b5cb0?w=500&q=80",
  },
  {
    name: "Bluetooth Smartwatch",
    description:
      "Fitness tracker and smartwatch with heart rate monitor and water resistance.",
    price: 1599.99,
    stock_quantity: 40,
    image_url:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
  },
  {
    name: "Portable Bluetooth Speaker",
    description:
      "Waterproof portable speaker with 12-hour playtime and deep bass.",
    price: 4499.99,
    stock_quantity: 150,
    image_url:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },
  {
    name: "1TB Portable SSD",
    description:
      "High-speed external solid state drive for fast data transfers and backup.",
    price: 8999.99,
    stock_quantity: 60,
    image_url:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
  },
  {
    name: "Adjustable Laptop Stand",
    description: "Aluminum ergonomic laptop stand, foldable and portable.",
    price: 999.99,
    stock_quantity: 300,
    image_url:
      "https://images.unsplash.com/photo-1527842891421-42eec6699767?w=500&q=80",
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
