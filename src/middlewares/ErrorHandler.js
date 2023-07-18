const logger = require("../utills/logger");

const ErrorHandler=(error, req, res, next)=>{
    console.log("MiddleWare -> Error Handling");
    console.log(process.env.NODE_ENV);
    const code = error.statusCode || 500;
    const name = error.name || "";
    const message = error.message || "Something went wrong!";
    logger.error(error.stack);
    res.status(code).json({
        success: false,
        status: code,
        message: `${name}: ${message}`,
        stack: process.env.NODE_ENV === "development" ? error.stack : {} 
    });
}

module.exports = ErrorHandler;