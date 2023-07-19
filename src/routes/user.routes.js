const express = require('express');
const logger = require('../utills/logger');
const userrouter = express.Router();

userrouter.get('/healthcheck', (req, res) => {
    logger.info(req.url + 'The API is up and running!');
    res.status(200).json({
        status: 'UP',
        message: 'The API is up and running!'
    });
});

module.exports = userrouter;
