const cors = require('cors');
const path = require('path')
const dotenv = require('dotenv');

const express = require('express')
let app = express();

const connectDB = require('./config/db');

const Message = require("./models/message");
const { notFound, errorHandler } = require('./middlewears/AuthMiddlewear');



dotenv.config()

// app
connectDB()



// // middlewares
app.use(cors());
app.use(express.json());



// // route
app.post('/hadi/send', async (req, res) => {
    const { name, email, subject, msg } = req.body;
    try {
        let addingMessage = new Message({ name, email, subject, msg })
        let message = await addingMessage.save();
        res.status(200).json({ addedMessages: message })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" })
    }
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'mine/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'mine', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}



// for not found
app.use(notFound)

// // CastError: Cast to ObjectId failed for value &quot;1&quot;
app.use(errorHandler)



// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
