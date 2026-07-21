const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//basic test route 
app.get('/', (req, res) => {
    res.json({ message: "E-Commerce Backend is Live!" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});