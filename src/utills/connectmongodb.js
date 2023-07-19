const mongoose = require("mongoose");
const logger = require("./logger");
const {MONGODB_URL} = process.env;
const connectmongodb=async ()=>{
    console.log(MONGODB_URL);
    try{
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("Successfully connected to database");
        logger.info("Successfully connected to database");
    }catch(error){ 
        console.log("database connection failed. exiting now...");
        console.error(error);
        logger.error(error);
        process.exit(1);
    }
}

module.exports = connectmongodb;