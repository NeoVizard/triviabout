const { getToken, getCategories, getQuestions } = require('./quiz');

const rooms = {}

// Create a room and set its defaults and a new room token
async function createRoom(roomName) {
    token = await getToken();
    room = { "name": roomName, "token": token, "users": [], "questions": [], "answers": [], "state": 0 };
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

// Leave a room and return the remaining users, delete room if empty, change leader if needed
function leaveRoom(roomName, id) {
    let user = deleteUser(roomName, id);
    let users = getUsers(roomName);
    console.log(`User '${user.name}' leaving room '${roomName}'`);
    if (users.length === 0) {
        deleteRoom(roomName);
        console.log(`Room '${roomName}' deleted`);
    } else if (user.isLeader) {
        users[0].isLeader = true;
    }
    return users;
}

function setRoomState(roomName, state) {
    rooms[roomName].state = state;
    getUsers(roomName).forEach(u => (u.state = state));
}

function getRoomState(roomName) {
    return rooms[roomName].state;
}

// Delete a room
function deleteRoom(roomName) {
    delete (rooms[roomName]);
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
    user = { "id": id, "name": userName, "isLeader": isLeader, "state": 0, "answer": null, "score": 0 };
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

// Delete user from room and returns that user
function deleteUser(roomName, id) {
    // rooms[roomName].users = rooms[roomName].users.filter(u => u.id !== id);
    let users = rooms[roomName].users;
    return users.splice(users.findIndex(u => u.id === id), 1)[0];
}

module.exports = { createRoom, joinRoom, leaveRoom, setRoomState, getRoomState, deleteRoom, refreshRoomQuestions, getRoomQuestions, addUser, addAnswer, clearAnswers, getUsers, deleteUser };