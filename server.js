const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const { getToken, getCategories, getQuestions } = require('./quiz');
const { createRoom, joinRoom, deleteRoom, addUser, getUsers, deleteUser, refreshRoomQuestions, getRoomQuestions, addAnswer, clearAnswers } = require('./rooms');

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
    socket.on('joinRoom', async ({ roomName, userName }) => {
        console.log(roomName);
        console.log(userName);
        await joinRoom(roomName, userName, socket.id);
        socket.join(roomName);
        socket.emit('joinedRoom');
        io.in(roomName).emit('users', getUsers(roomName));
    });

    // On start game, get the questions based on the settings/params
    socket.on('startGame', async (roomName) => {
        io.in(roomName).emit('gettingQuestions');
        await refreshRoomQuestions(roomName, 10);
        const questions = getRoomQuestions(roomName);
        io.in(roomName).emit('questions', res);
    });

    // Get answer and set to user
    socket.on('answer', (answer, roomName) => {
        addAnswer(roomName, socket.id, answer);
        if (getUsers(roomName).filter( u => u.answer === null).length === 0) {
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

    
    socket.on('disconnecting', () => {
        socket.rooms.delete(socket.id);
        const roomName = socket.rooms.keys().next().value;
        deleteUser(roomName, socket.id);
        const remainingUsers = getUsers(roomName);
        if (remainingUsers.length !== 0) {
            io.in(roomName).emit('users', remainingUsers);
        }
        else {
            deleteRoom(roomName);
        }
    });
});

server.listen(3000, () => {
    console.log("Server running");
});