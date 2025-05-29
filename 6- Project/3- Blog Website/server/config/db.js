const mongoose = require('mongoose');

module.exports = connectDB = async () => {
    try {
        mongoose.set('strictQuery', false); // When Search On Any Field Not Respond Error
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DB is Connected: ${connect.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}
