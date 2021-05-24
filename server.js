const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const { getToken, getCategories, getQuestions } = require('./quiz');
const { createRoom, joinRoom, deleteRoom, addUser, getUsers, deleteUser, refreshRoomQuestions, getRoomQuestions, addAnswer, clearAnswers, leaveRoom, setRoomState, getRoomState } = require('./rooms');

let users = [];

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    // Generate API token on joining room
    socket.on('joinRoom', async (roomName, userName) => {
        await joinRoom(roomName, userName, socket.id);
        socket.join(roomName);
        socket.emit('joinedRoom', getRoomState(roomName));
        io.in(roomName).emit('users', getUsers(roomName));
        console.log(`User '${userName}' joined room '${roomName}'`);
    });

    // On start game, get the questions based on the settings/params
    socket.on('startGame', async (roomName) => {
        io.in(roomName).emit('gettingQuestions');
        await refreshRoomQuestions(roomName, 10);
        const questions = getRoomQuestions(roomName);
        setRoomState(roomName, 1);
        io.in(roomName).emit('questions', res);
    });

    // Get answer and set to user
    socket.on('answer', (answer, score, roomName) => {
        addAnswer(roomName, socket.id, answer, score);
        if (getUsers(roomName).filter(u => u.answer === null && u.state === 1).length === 0) {
            io.in(roomName).emit('answers', getUsers(roomName));
        }
    });

    socket.on('nextQuestion', (roomName) => {
        clearAnswers(roomName);
        io.in(roomName).emit('nextQuestion');
    });

    // Maybe store the questions locally and emit them one at a time
    // OR store the whole JSON from the API and send all Q&A, check back with socket only for answers
    // Scores after every question makes it feel more like a game and less like a test.

    socket.on('playAgain', (roomName) => {
        setRoomState(roomName, 0);
        io.in(roomName).emit('playAgain');
    });

    socket.on('disconnecting', () => {
        try {
            socket.rooms.delete(socket.id);
            const roomName = socket.rooms.keys().next().value;
            const remainingUsers = leaveRoom(roomName, socket.id);
            if (remainingUsers.length !== 0) {
                io.in(roomName).emit('users', remainingUsers);
            }
        }
        catch (e) {
            console.log(e);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server running");
});