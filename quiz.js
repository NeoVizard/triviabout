const fetch = require('node-fetch');

async function getToken() {
    try {
        // TODO: Error Handling on the JSON response
        const response = await fetch('https://opentdb.com/api_token.php?command=request');
        const data = await response.json();
        return data["token"];
    } catch (error) {
        res.status(500).json({
            "error": error
        });
    }
}

async function getCategories() {
    try {
        const response = await fetch('https://opentdb.com/api_category.php');
        const data = await response.json();
        return data;
    } catch (error) {
        res.status(500).json({
            "error": error
        });
    }
}

async function getQuestions(amount, category, difficulty, token = null) {
    try {
        const url = `https://opentdb.com/api.php?amount=${amount}${category !== '' ? '&category=' + category : ''}${difficulty !== '' ? "&difficulty=" + difficulty : ''}&type=multiple${token ? '&token=' + token : ''}`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        return data["results"];
    } catch (error) {
        res.status(500).json({
            "error": error
        });
    }
}

module.exports = { getToken, getCategories, getQuestions }