const express = require('express');
const questionsRouter = express.Router();

questionsRouter.get('/test', (req, res) => {
    res.send('lol');
});

module.exports = questionsRouter;