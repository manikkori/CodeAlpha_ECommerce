const db = require("../config/db");

exports.placeOrder = async (req, res) => {
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const { cartItems, totalPrice } = req.body;
    const userId = req.user.id;

    if (!cartItems || cartItems.length === 0) {
      await connection.release();
      return res.status(400).json({ message: "No items in cart." });
    }

    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total_price, status) VALUES (?, ?, ?)",
      [userId, totalPrice, "Pending"],
    );

    const orderId = orderResult.insertId;

    for (let item of cartItems) {
      await connection.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES (?, ?, ?, ?)",
        [orderId, item.product_id, item.quantity, item.price],
      );
    }

    await connection.commit();
    res.status(201).json({ message: "Order placed successfully.", orderId });
  } catch (error) {
    await connection.rollback();
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  } finally {
    connection.release();
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const [orders] = await db.query(
      "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
      [userId],
    );
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
