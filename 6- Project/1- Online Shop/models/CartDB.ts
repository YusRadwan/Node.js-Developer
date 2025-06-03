// Import Mongosse
    import {Document, Schema, model} from "mongoose";

    interface ICart extends Document {
        name: String;
        price: Number;
        amount: Number;
        userId: String;
        productId: String;
        timestamp: Date;
    }

// Create Schema
    const cartSchema  = new Schema<ICart> ({
        name:      { type: String },
        price:     { type: Number },
        amount:    { type: Number },
        userId:    { type: String },
        productId: { type: String },
        timestamp: { type: Date }
    });

// Create Model
    const Cart = model<ICart>('cart', cartSchema);

// Export Product
    export default Cart;