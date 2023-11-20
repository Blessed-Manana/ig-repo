const mongoose = require("mongoose");
require('dotenv').config();

async function dbConnect() {

    const connectionString = "mongodb+srv://devworkmail44:wXCSI3i3fN9qu921@cluster0.t1kwxcj.mongodb.net/";

    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Successfully connected to MongoDB Atlas!");
    } catch (error) {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
    }
}

module.exports = dbConnect;
