const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: "E-Commerce Backend is Live!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});