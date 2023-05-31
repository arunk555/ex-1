const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;
console.log("sdfs "+MONGODB_URL);
exports.connect =async ()=>{
    try {
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDb connected successfully!");
        
    } catch (error) {
        console.log("unable to connect the MongoDb");
        console.error(error.message);
        process.exit(1);
    }
}


