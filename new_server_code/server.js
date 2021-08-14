import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import Users from "./models/User.js";
import Messages from "./models/Messages.js"
import Chatrooms from "./models/Chatroom.js"
import Pusher from "pusher";
import cors from "cors";
import AsyncStorage from '@react-native-async-storage/async-storage';

const app = express();
const port = process.env.PORT || 8000;

const pusher = new Pusher({
    appId: "1230693",
    key: "dedf7c986071f7d72e6c",
    secret: "79a4401470b3390fd4c8",
    cluster: "eu",
    useTLS: true
  });

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
});
  
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
    const msgCollection = mongoose.connection.collection("messages")
    const chatroomCollection = mongoose.connection.collection("chatroom")

    const changeStreammsg = msgCollection.watch();
    const changeStreamcr = chatroomCollection.watch();
    changeStreammsg.on("change",(change) => {

        if (change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',{
                text: messageDetails.text,
                user: messageDetails.user,
                createdAt: messageDetails.createdAt,
                chatroom: messageDetails.chatroom,
                received: messageDetails.received
            });
        }
        else{
            console.log("Error triggering pusher");
        }
    });

    changeStreamcr.on("change",(change) => {

        if (change.operationType === 'insert'){
            const chatroomDetails = change.fullDocument;
            pusher.trigger('chatroom','inserted',{
                name: chatroomDetails.name,
                description: chatroomDetails.description,
                icon: chatroomDetails.icon,
                isBroadcast: chatroomDetails.isBroadcast
            });
        }
        else{
            console.log("Error triggering pusher");
        }
    });
    
});

//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>res.status(200).send('hello world'));

app.post('/users/new',(req,res) => {
    const user = req.body;
    Users.create(user,(err,data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.post('/messages/new',(req,res) => {
    const Message = req.body;
    Messages.create(Message,(err,data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/messages/sync', (req,res) => {
    let name = req.query.value; 
         
    Messages.find({chatroomName: name},(err,data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/chatrooms/new',(req,res) => {
    const Chatroom = req.body;
    Chatrooms.create(Chatroom,(err,data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/chatrooms/sync', (req,res) => {
    Chatrooms.find({isBroadcast: true},(err,data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.get('/personalchats/sync', (req,res) => {
    Chatrooms.find({isBroadcast: false},(err,data) => {
        if (err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => {
    console.log("Server listening on port 8000");
});