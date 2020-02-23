require('dotenv').config();
require('express-async-errors');

const express = require('express');
const morgan =  require('morgan');
const cors = require('cors');
const questions = require('./routes/questions-router');
const errorHandler = require('./utils/error-handler');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use('/questions', questions);

app.get('/', (req, res) => {
    res.send({
        message: 'hello world'
    });
});

app.use(errorHandler);

module.exports = app;