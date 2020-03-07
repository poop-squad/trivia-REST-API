const express = require('express');
const router = express.Router();
const controller = require('../controllers/questions-and-answers-controller');

router.get('/test/:id', (req, res) => {
    res.send({
        message: 'test',
        value: req.params.id
    });
});

router.get('/:category/:amount', controller.getQuestionsAndAnswers);
router.post('/', controller.addQuestionAndAnswer);

module.exports = router;