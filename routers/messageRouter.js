const express = require('express');
const Message = require("../models/message");


const router = express.Router();

// MESSAGES ROUTERS
router.post('/send', async (req, res) => {
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


// router.get('/messages', AuthCheck, gettingAllMessage);
// router.get('/:id', AuthCheck, getMessageById);
// router.delete('/admin/:id', AuthCheck, admin, deleteMessage);

module.exports = router;

