require('dotenv').config();
const express = require('express');
const userrouter = require('./routes/user.routes');
require('./configs/mongodb').connect();

const app = express();

app.use(express.json());

app.use("/user", userrouter);

app.use('*',(req, res)=>{
    res.status(404).json({
        success: false,
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        }
    })
})

module.exports = app;