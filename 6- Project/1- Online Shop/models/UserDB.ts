// Import Mongosse
    import {Document, Schema, model} from "mongoose";

    interface IUser extends Document {
        username: string;
        email: String,
        password: string;
        admin: Boolean
    }

// Create Schema
    const userSchema  = new Schema<IUser> ({
        username: { type: String, required: true},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: {type: Boolean, default: false}
    });


// Create Model
    const User = model<IUser>('user', userSchema);

// Export Product
    export default User;