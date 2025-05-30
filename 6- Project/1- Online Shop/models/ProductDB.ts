// Import Mongosse
    import mongoose from "mongoose";


// Create Schema
    const productSchema: mongoose.Schema = new mongoose.Schema({
        name: String,
        price: Number,
        category: String,
        description: String,
        image: String
    });


// Create Model
    const Product = mongoose.model('product', productSchema);

// Export Product
    export default Product;