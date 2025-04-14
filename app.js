const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname));
app.use(express.json());

// Handle form submissions
app.post('/contact', (req, res) => {
    // Here you would typically integrate with an email service
    // For now, we'll just send a success response
    res.json({ 
        success: true, 
        message: 'Message received! Thank you for contacting me.' 
    });
});

// Serve index.html for all routes to enable client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong! Please try again later.'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the portfolio`);
});
