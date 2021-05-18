const { getToken, getCategories, getQuestions } = require('./quiz');

const rooms = {}

async function createRoom(roomName) {
    token = await getToken();
    room = { "name": roomName, "token": token, "users": [], "questions": [] };
    rooms[roomName] = room;
}

async function joinRoom(roomName, userName, id) {
    if (roomName in rooms) {
        addUser(roomName, id, userName);
    }
    else {
        await createRoom(roomName);
        addUser(roomName, id, userName, true);
    }
}

function deleteRoom(roomName) {
    delete (room[roomName]);
}

async function refreshRoomQuestions(roomName, amount, category = '', difficulty = '') {
    res = await getQuestions(amount, category, difficulty, rooms[roomName].token);
    res.forEach(e => {
        e.answers = [];
        e.answers.push(e.correct_answer, ...e.incorrect_answers);   // Array containing all answers
        e.answers.sort(() => (Math.random() > 0.5) ? 1 : -1);       // Randomize order
    });
    rooms[roomName].questions = res;
}

function getRoomQuestions(roomName) {
    return rooms[roomName].questions;
}

function addUser(roomName, id, userName, isLeader = false) {
    user = { "id": id, "name": userName, "isLeader": isLeader };
    rooms[roomName].users.push(user);
}

function getUsers(roomName) {
    return rooms[roomName].users;
}

// Refactor to leaveRoom
function deleteUser(roomName, socketId) {
    rooms[roomName].users = rooms[roomName].users.filter(u => u.id !== socketId);
}

module.exports = { createRoom, joinRoom, deleteRoom, refreshRoomQuestions, getRoomQuestions, addUser, getUsers, deleteUser };