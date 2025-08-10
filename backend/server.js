import express from 'express'
import mongoose from 'mongoose';
import { messageModel } from './message.model.js'
import Pusher from 'pusher';
import cors from 'cors'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 9000;
const dbUrl = process.env.MONGODB_URL;

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

app.listen(port, () => console.log(`Server is running at localhost:${port}`));

const pusher = new Pusher({
    appId: "1876310",
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "mt1",
    useTLS: true
});

mongoose.connect(dbUrl, {
    retryWrites: true
})

mongoose.connection.on('error', (err) => {
    console.log(`Database connection error occurred :( ${err}`);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log(`Successfully connected to database at ${dbUrl}`);

    const messageCollection = mongoose.connection.collection("message");
    const changeStream = messageCollection.watch()

    changeStream.on('change', (change) => {
        console.log("A change occurred", change)
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message
            })
        } else {
            console.log("Error triggering pusher")
        }
    })
});

app.get('/', (req, res) => {
    return res.status(200).send("Hello world")
})

app.get('/api/v1/messages', (req, res) => {
    messageModel.find().then((data) => {
        return res.status(200).json(data);
    }).catch((e) => console.log(e))
})

app.post('/api/v1/messages', (req, res) => {
    const dbMessage = req.body;
    messageModel.create(dbMessage).then((data) => {
        return res.status(201).json(data);
    }).catch((e) => console.log(e))
})
