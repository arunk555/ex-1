const express = require('express');
const authrouter = express.Router();

authrouter.get('/auth/session', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'welcome  session'
    });
});

module.exports = authrouter;
