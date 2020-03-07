const knex = require('../../database/db');
const short = require('short-uuid');

const getQuestionsAndAnswers = async (req, res) => {
    // const rowCount = await knex.raw('select count("id") from questions WHERE category = ?', [req.params.category]);
    const queryResults = await knex.raw('SELECT a.question_id question_id, a.question_content question_content, a.category category, b.answer_content answer_content FROM questions a INNER JOIN answers b ON a.question_id = b.question_id WHERE category = ? ORDER BY RANDOM() LIMIT ?', [req.params.category, req.params.amount]);
    res.status(200);
    res.send({
        message: 'success',
        value: queryResults
    });
};

const addQuestionAndAnswer = async (req, res) => {
    const questionId = short.generate();
    const questionsQueryResults = await knex('questions')
    .insert({ question_id: questionId, question_content: req.body.question_content, submitter_name: req.body.submitter_name, category: req.body.category });
    const answerQueryResults = await knex('answers')
    .insert({ question_id: questionId, answer_content: req.body.answer_content, submitter_name: req.body.submitter_name });
    const queryResults = new Array(questionsQueryResults, answerQueryResults);
    res.status(200);
    res.send({
        message: 'success',
        value: queryResults
    });
};

const updateQuestion = async (req, res) => {
    const queryResults = await knex('questions').where({ question_id: req.params.id }).update(req.body);
    res.status(200);
    res.send({
        message: 'success',
        value: queryResults
    });
};

const deleteQuestion = async (req, res) => {
    const queryResults = await knex('questions').where({ question_id: req.params.id }).del();
    res.status(200);
    res.send({
        message: 'success',
        value: queryResults
    });
};

module.exports = {
    getQuestionsAndAnswers,
    addQuestionAndAnswer,
    updateQuestion,
    deleteQuestion
}