var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
//hace el get de question
router.get('/quizes/question', quizController.question);
//hace el get que answer
router.get('/quizes/answer', quizController.answer);

module.exports = router;
