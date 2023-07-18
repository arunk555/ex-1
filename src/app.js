require("dotenv").config();
const express = require("express");
const ErrorHandler = require("./middlewares/ErrorHandler");
const logger = require("./utills/logger");
const morganMiddleware = require("./middlewares/morgan.middleware");
const app = express();
const PORT = 4000;
/*  Morgan http middleware*/
app.use(morganMiddleware);

app.get('/api/status', (req, res)=>{
    logger.info("The API is up and running!");
    res.status(200).json({
        status: "UP",
        message: "The API is up and running!"
    })
});

app.get('/test', (req, res, next)=>{
    /* try {
        throw new Error('Just for testing the error!') 
    } catch (error) {
        next(error);
    } */
    setTimeout(() => {
        try {
            const number=10;

            console.log(number.toUpperCase());
            //throw new Error('Just for testing the error!') 
        } catch (error) {
            error.statusCode = 500;
            next(error);
        }
    }, 1000);
})

app.use(ErrorHandler);


app.listen(PORT, function(){
  console.log(`Express server listen to the port ${PORT}`);
});
