const { default: mongoose } = require("mongoose");
require('dotenv').config();
const moongoose = require("mongoose");
// define the Mongodb connection URL
// const mongoURL = "mongodb://127.0.0.1:27017/gopalll";

const mongoURL = process.env.MONGODB_URL;

// set up MongooDB connection
mongoose.connect(mongoURL/*, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}*/);
// db object
const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected  to Mongodb server");
});
db.on("error", () => {
    console.log("error  to Mongodb server");
});
db.on("disconnected", () => {
    console.log("disconnected  to Mongodb server");
});

module.exports = db;
