const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
// define the Mongodb connection URL
const mongoURL = "mongodb://127.0.0.1:27017/gopalll";

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
