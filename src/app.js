require('dotenv').config();
const express = require('express');
const ErrorHandler = require('./middlewares/ErrorHandler');
const logger = require('./utills/logger');
const morganMiddleware = require('./middlewares/morgan.middleware');
const connectmongodb = require('./utills/connectmongodb');
const router = require('./routes');
const app = express();
const PORT = 4000;
// fdsfccc
/*  Morgan http middleware*/
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(morganMiddleware);

app.use(router);

app.get('/api/status', (req, res) => {
    logger.info('The API is up and running!');
    res.status(200).json({
        status: 'UP',
        message: 'The API is up and running!'
    });
});

app.get('/test', (req, res, next) => {
    /* try {
        throw new Error('Just for testing the error!') 
    } catch (error) {
        next(error);
    } */
    setTimeout(() => {
        try {
            const number = 10;

            console.log(number.toUpperCase());
            //throw new Error('Just for testing the error!')
        } catch (error) {
            error.statusCode = 500;
            next(error);
        }
    }, 1000);
});

app.use(ErrorHandler);

app.listen(PORT, function () {
    connectmongodb();
    console.log(`Express server listen to the port ${PORT}`);
});
