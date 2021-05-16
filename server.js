const http = require('http');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const socketio = require('socket.io');
const { getToken, getCategories, getQuestions } = require('./quiz')

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

app.get('/test', async (req, res) => {
    res.send(await getCategories());
});

app.get('/test2', async (req, res) => {
    res.send(await getQuestions(5, '', 'medium'));
});

app.get('/token', async (req, res) => {
    res.send(await getToken());
});

io.on('connection', socket => {
    console.log("Connected");
    console.log(socket.id);

    // Generate API token on joining room
    socket.on('joinRoom', ({ roomName, username }) => {
        getToken().then(() => { });
    });

    // On start game, get the questions based on the settings/params
    socket.on('startGame', ({ questionParams /* { category, difficulty } */ }) => {
        getQuestions(10, questionParams["category"], questionParams["difficulty"]).then(() => { });
    });

    // Maybe store the questions locally and emit them one at a time
    // OR store the whole JSON from the API and send all Q&A, check back with socket only for answers
    // Scores after every question makes it feel more like a game and less like a test.
});

server.listen(3000, () => {
    console.log("Server running");
});