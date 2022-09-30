const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// schema = pattern that all documents in a collection will follow.


const pizzaSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }, 
    price: {
        type: Number,
        required: true,
    },
    isVeggie: {
        type: Boolean,
        default: false
    },
    ingredients: [String],
    dough: {
        type: String,
        enum: ["thin", "thick", "with cheese", "with garlic"]
    }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;