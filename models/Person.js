const mongoose = require("mongoose");

//define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true,
    },
    mobile: {
        type: String,
        requireed: true,
    },
    email: {
        type: String,
        requireed: true,
        unique: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        requireed: true,
    },
});

// create peerson model
const Person = mongoose.model("person", personSchema);
module.exports = Person;
