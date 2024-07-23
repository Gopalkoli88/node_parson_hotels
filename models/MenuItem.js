const mongoose = require("mongoose");
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ["Sweet", "Spicy", "Sour"],
        required: true,
    },
    is_drink: {
        type: String,
        default: false,
    },
    ingredients: {
        //here type is a string in form of the array so we are useing heree " []"
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    },
});
const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
