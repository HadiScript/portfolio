const mongoose = require("mongoose");
// mongodb://localhost:27017/ecom-udemy'
// process.env.MONGO_URI
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://hadiraza:852728..@hadiraza.btzq4od.mongodb.net/?retryWrites=true&w=majority`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB