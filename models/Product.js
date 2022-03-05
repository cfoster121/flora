const { Schema, model } = require('mongoose');

// Schema for Product model
const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Product = model('Product', productSchema);

module.exports = Product;