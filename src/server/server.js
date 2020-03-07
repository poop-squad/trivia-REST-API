require('dotenv').config();
require('express-async-errors');

const express = require('express');
const morgan =  require('morgan');
const cors = require('cors');
const qAndARouter = require('./routes/questions-and-answers-router');
const errorHandler = require('./utils/error-handler');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use('/qanda', qAndARouter);

app.get('/', (req, res) => {
    res.send({
        message: 'hello world'
    });
});

app.use(errorHandler);

module.exports = app;