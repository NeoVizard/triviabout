const { getToken, getCategories, getQuestions } = require('./quiz');

const rooms = {}

function createRoom(roomName) {
    getToken().then(res => {
        room = { "name": roomName, "token": res, "users": [], "questions": [] };
        rooms[roomName] = room;
    });
}

function deleteRoom(roomName) {
    delete (room[roomName]);
}

function refreshRoomQuestions(roomName, amount, category = '', difficulty = '', token = null) {
    getQuestions(amount, category, difficulty, token).then(res => {
        res.forEach(e => {
            e.answers = [];
            e.answers.push(e.correct_answer, ...e.incorrect_answers);   // Array containing all answers
            e.answers.sort(() => (Math.random() > 0.5) ? 1 : -1);       // Randomize order
        });
        rooms[roomName].questions = res;
    });
}

function addUser(roomName, id, userName, isLeader = false) {
    user = { "id": id, "name": userName, "isLeader": isLeader };
    rooms[roomName].users.push(user);
}

function getUsers(roomName) {
    return rooms[roomName].users;
}

function deleteUser(roomName, socketId) {
    rooms[roomName].users = rooms[roomName].users.filter(u => u.id !== socketId);
}

module.exports = { createRoom, deleteRoom, refreshRoomQuestions, addUser, getUsers, deleteUser };