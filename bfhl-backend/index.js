const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets
        .filter(item => /^[a-z]$/.test(item))
        .sort()
        .slice(-1);

    res.json({
        is_success: true,
        user_id: 'john_doe_17091999', // Replace with your actual user ID
        email: 'john@xyz.com', // Replace with your actual email
        roll_number: 'ABCD123', // Replace with your actual roll number
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet,
    });
});

// GET /bfhl
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
