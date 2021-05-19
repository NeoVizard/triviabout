const { getToken, getCategories, getQuestions } = require('./quiz');

const rooms = {}

// Create a room and set its defaults and a new room token
async function createRoom(roomName) {
    token = await getToken();
    room = { "name": roomName, "token": token, "users": [], "questions": [], "answers": [] };
    rooms[roomName] = room;
}

// Join a room, or create one and join if it doesn't exist
async function joinRoom(roomName, userName, id) {
    if (roomName in rooms) {
        addUser(roomName, id, userName);
    }
    else {
        await createRoom(roomName);
        addUser(roomName, id, userName, true);
    }
}

// Delete a room
function deleteRoom(roomName) {
    delete (room[roomName]);
}

// Refreshes the array of questions for a room
async function refreshRoomQuestions(roomName, amount, category = '', difficulty = '') {
    res = await getQuestions(amount, category, difficulty, rooms[roomName].token);
    res.forEach(e => {
        e.answers = [];
        e.answers.push(e.correct_answer, ...e.incorrect_answers);   // Array containing all answers
        e.answers.sort(() => (Math.random() > 0.5) ? 1 : -1);       // Randomize order
    });
    rooms[roomName].questions = res;
}

// Get the array of questions for a room
function getRoomQuestions(roomName) {
    return rooms[roomName].questions;
}

// Add a new user to a room
function addUser(roomName, id, userName, isLeader = false) {
    user = { "id": id, "name": userName, "isLeader": isLeader, "answer": null, "score": 0 };
    rooms[roomName].users.push(user);
}

// Add an answer to a user
function addAnswer(roomName, id, answer, score) {
    user = rooms[roomName].users.find(u => u.id === id);
    user.answer = answer;
    user.score = score;
}

// Set all the answer values of all users in a room
function clearAnswers(roomName) {
    rooms[roomName].users.forEach(u => {
        u.answer = null;
    });
}

// Get the array of users for a room
function getUsers(roomName) {
    return rooms[roomName].users;
}

// Refactor to leaveRoom
// Delete user from room
function deleteUser(roomName, id) {
    rooms[roomName].users = rooms[roomName].users.filter(u => u.id !== id);
}

module.exports = { createRoom, joinRoom, deleteRoom, refreshRoomQuestions, getRoomQuestions, addUser, addAnswer, clearAnswers, getUsers, deleteUser };