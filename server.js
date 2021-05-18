const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const { getToken, getCategories, getQuestions } = require('./quiz');
const { createRoom, deleteRoom, addUser, getUsers, deleteUser } = require('./rooms');

let users = [];

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    io.emit('users', users);

    // Generate API token on joining room
    socket.on('joinRoom', ({ roomName, userName }) => {
        console.log(roomName);
        console.log(userName);
        // getToken().then(() => { });
    });

    // On start game, get the questions based on the settings/params
    socket.on('startGame', (difficulty) => {
        getQuestions(10, '', difficulty).then((res) => {
            res.forEach(e => {
                e.answers = [];
                e.answers.push(e.correct_answer, ...e.incorrect_answers);   // Array containing all answers
                e.answers.sort(() => (Math.random() > 0.5) ? 1 : -1);     // Randomize order
            });
            socket.emit('questions', res);
        });
    });

    // Maybe store the questions locally and emit them one at a time
    // OR store the whole JSON from the API and send all Q&A, check back with socket only for answers
    // Scores after every question makes it feel more like a game and less like a test.
});

server.listen(3000, () => {
    console.log("Server running");
});